import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { GoogleGenerativeAI } from '@google/generative-ai';

const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 375;
const isTablet = width > 768;

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  navigationTag?: string;
}

export const GlobalChatAssistant: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      text: 'Olá! Sou o assistente virtual da Fatec Cotia. Como posso ajudá-lo hoje? Posso fornecer informações sobre cursos, cultura, empregos, segurança e muito mais!',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const router = useRouter();

  // Inicializar Gemini AI
  const genAI = new GoogleGenerativeAI(process.env.EXPO_PUBLIC_GEMINI_API_KEY || '');

  const systemPrompt = `Você é um assistente virtual da Fatec Cotia (Faculdade de Tecnologia de Cotia). 
Seu objetivo é ajudar estudantes e visitantes com informações sobre:

1. CURSOS DISPONÍVEIS:
   - Ciência de Dados (Noturno)
   - Comércio Exterior (Matutino)
   - Desenvolvimento de Software Multiplataforma (Noturno)
   - Design de Produto (Matutino)
   - Gestão da Produção Industrial (Flexível)
   - Gestão Empresarial

2. CATEGORIAS DO APP:
   - Cultura: Arte, música, teatro, cinema, patrimônio cultural
   - Educação: Cursos, bibliotecas, ensino superior, EAD
   - Empregos: Vagas, estágios, freelance, capacitação
   - Segurança: Serviços de emergência, segurança pública e digital

3. NAVEGAÇÃO DO APP:
   Quando você sugerir ao usuário visitar uma seção específica, inclua uma tag de navegação no formato [NAV:rota].
   Rotas disponíveis:
   - [NAV:/(stack)/cultura] - Para cultura
   - [NAV:/(stack)/educacao] - Para educação
   - [NAV:/(stack)/empregos] - Para empregos
   - [NAV:/(stack)/seguranca] - Para segurança
   - [NAV:/(stack)/fatecCourses] - Para cursos da Fatec

IMPORTANTE: 
- Seja sempre cordial e prestativo
- Forneça informações precisas sobre os cursos (todos têm 2800 horas)
- Quando sugerir uma navegação, use a tag apropriada
- Mantenha respostas concisas mas informativas`;

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    // Debug: Verificar se API key está configurada
    console.log('API Key configurada:', !!process.env.EXPO_PUBLIC_GEMINI_API_KEY);

    // ERRO 2: Validação de API Key
    const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
    if (!apiKey || apiKey.trim() === '') {
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: '⚠️ API Key do Gemini não configurada. Por favor, adicione EXPO_PUBLIC_GEMINI_API_KEY no arquivo .env para usar o assistente de IA.',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Usando Gemini 2.5 Flash - modelo mais recente disponível para esta API key
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
      
      // Construir histórico de conversa
      const chatHistory = messages
        .map((msg) => `${msg.isUser ? 'Usuário' : 'Assistente'}: ${msg.text}`)
        .join('\n');

      const prompt = `${systemPrompt}\n\nHistórico da conversa:\n${chatHistory}\n\nUsuário: ${userMessage.text}\n\nAssistente:`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const aiText = response.text();

      // Verificar se há tag de navegação
      const navMatch = aiText.match(/\[NAV:([^\]]+)\]/);
      const navigationTag = navMatch ? navMatch[1] : undefined;

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiText.replace(/\[NAV:[^\]]+\]/g, '').trim(),
        isUser: false,
        timestamp: new Date(),
        navigationTag,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error: any) {
      console.error('Erro ao comunicar com a IA:', error);
      
      // Tratamento específico de erros
      let errorText = 'Desculpe, ocorreu um erro ao processar sua mensagem.';
      
      // Erro de API Key expirada (400 Bad Request)
      if (error?.message?.includes('expired') || error?.message?.includes('API_KEY_INVALID')) {
        errorText = '🔑 API Key EXPIRADA! Sua chave do Gemini precisa ser renovada.\n\n🔄 Obtenha uma nova em: https://aistudio.google.com/app/apikey\n\n📝 Atualize no arquivo .env com: EXPO_PUBLIC_GEMINI_API_KEY=sua_nova_chave';
      } else if (error?.message?.includes('404') || error?.status === 404) {
        errorText = '❌ Modelo de IA não disponível. Verifique sua API key do Gemini e certifique-se de que está usando a versão correta da API.';
      } else if (error?.message?.includes('API key') || error?.message?.includes('API_KEY')) {
        errorText = '🔑 Erro na API Key. Verifique se sua chave do Gemini está correta e ativa.\n\n🔗 Obtenha uma nova em: https://aistudio.google.com/app/apikey';
      } else if (error?.message?.includes('quota') || error?.message?.includes('limit')) {
        errorText = '⏱️ Limite de requisições atingido. Aguarde alguns instantes e tente novamente.';
      } else if (error?.message?.includes('network') || error?.message?.includes('fetch') && !error?.message?.includes('expired')) {
        errorText = '🌐 Erro de conexão. Verifique sua internet e tente novamente.';
      } else if (error?.status === 400) {
        errorText = '⚠️ Requisição inválida (400). Possíveis causas:\n• API Key inválida ou expirada\n• Formato de requisição incorreto\n\n🔗 Verifique sua chave em: https://aistudio.google.com/app/apikey';
      } else {
        errorText = `⚠️ Erro ao processar mensagem: ${error?.message || 'Erro desconhecido'}. Tente novamente.`;
      }
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorText,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigate = (route: string) => {
    router.push(route as any);
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages, isVisible]);

  return (
    <>
      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setIsVisible(true)}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={['#7c3aed', '#a855f7']}
          style={styles.fabGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <MaterialCommunityIcons name="chat" size={28} color="#FFFFFF" />
        </LinearGradient>
      </TouchableOpacity>

      {/* Chat Modal */}
      <Modal
        visible={isVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <LinearGradient
              colors={['#0f0f23', '#1a1a2e', '#16213e']}
              style={styles.chatContainer}
            >
              {/* Header */}
              <View style={styles.chatHeader}>
                <View style={styles.headerContent}>
                  <MaterialCommunityIcons name="robot" size={24} color="#a855f7" />
                  <View style={styles.headerTextContainer}>
                    <Text style={styles.chatTitle}>Assistente Fatec</Text>
                    <Text style={styles.chatSubtitle}>Online</Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => setIsVisible(false)}
                  style={styles.minimizeButton}
                  activeOpacity={0.7}
                >
                  <MaterialIcons name="remove" size={24} color="#FFFFFF" />
                </TouchableOpacity>
              </View>

              {/* Messages */}
              <ScrollView
                ref={scrollViewRef}
                style={styles.messagesContainer}
                contentContainerStyle={styles.messagesContent}
                showsVerticalScrollIndicator={false}
              >
                {messages.map((message) => (
                  <View
                    key={message.id}
                    style={[
                      styles.messageBubble,
                      message.isUser ? styles.userBubble : styles.aiBubble,
                    ]}
                  >
                    <LinearGradient
                      colors={
                        message.isUser
                          ? ['#7c3aed', '#a855f7']
                          : ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)']
                      }
                      style={styles.bubbleGradient}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    >
                      <Text style={styles.messageText}>{message.text}</Text>
                      
                      {/* Navigation Button */}
                      {message.navigationTag && (
                        <TouchableOpacity
                          style={styles.navButton}
                          onPress={() => handleNavigate(message.navigationTag!)}
                          activeOpacity={0.8}
                        >
                          <MaterialIcons name="arrow-forward" size={16} color="#7c3aed" />
                          <Text style={styles.navButtonText}>Ir para esta seção</Text>
                        </TouchableOpacity>
                      )}
                      
                      <Text style={styles.messageTime}>
                        {message.timestamp.toLocaleTimeString('pt-BR', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </Text>
                    </LinearGradient>
                  </View>
                ))}

                {isLoading && (
                  <View style={styles.loadingContainer}>
                    <ActivityIndicator size="small" color="#a855f7" />
                    <Text style={styles.loadingText}>Digitando...</Text>
                  </View>
                )}
              </ScrollView>

              {/* Input */}
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.inputContainer}
              >
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="Digite sua mensagem..."
                    placeholderTextColor="#808080"
                    value={inputText}
                    onChangeText={setInputText}
                    onSubmitEditing={handleSendMessage}
                    multiline
                    maxLength={500}
                  />
                  <TouchableOpacity
                    onPress={handleSendMessage}
                    disabled={!inputText.trim() || isLoading}
                    style={[
                      styles.sendButton,
                      (!inputText.trim() || isLoading) && styles.sendButtonDisabled,
                    ]}
                    activeOpacity={0.8}
                  >
                    <LinearGradient
                      colors={
                        !inputText.trim() || isLoading
                          ? ['#4a4a4a', '#3a3a3a']
                          : ['#7c3aed', '#a855f7']
                      }
                      style={styles.sendButtonGradient}
                    >
                      <MaterialIcons name="send" size={20} color="#FFFFFF" />
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>
            </LinearGradient>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  // FAB Styles
  fab: {
    position: 'absolute',
    bottom: isSmallScreen ? 20 : 30,
    right: isSmallScreen ? 20 : 30,
    width: isSmallScreen ? 56 : 64,
    height: isSmallScreen ? 56 : 64,
    borderRadius: isSmallScreen ? 28 : 32,
    elevation: 8,
    shadowColor: '#7c3aed',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    zIndex: 9999,
  },
  fabGradient: {
    width: '100%',
    height: '100%',
    borderRadius: isSmallScreen ? 28 : 32,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: isSmallScreen ? 12 : 16,
  },
  modalContainer: {
    width: '90%',
    maxWidth: 600,
    height: '90%',
    maxHeight: 700,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  chatContainer: {
    flex: 1,
    borderRadius: 20,
  },

  // Header Styles
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(124, 58, 237, 0.3)',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerTextContainer: {
    gap: 2,
  },
  chatTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  chatSubtitle: {
    fontSize: 12,
    color: '#a855f7',
  },
  minimizeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Messages Styles
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
    gap: 12,
  },
  messageBubble: {
    maxWidth: '80%',
    marginVertical: 4,
  },
  userBubble: {
    alignSelf: 'flex-end',
  },
  aiBubble: {
    alignSelf: 'flex-start',
  },
  bubbleGradient: {
    borderRadius: 16,
    padding: 12,
    gap: 6,
  },
  messageText: {
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 20,
  },
  messageTime: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.6)',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
  },
  loadingText: {
    fontSize: 14,
    color: '#a855f7',
    fontStyle: 'italic',
  },

  // Navigation Button
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  navButtonText: {
    fontSize: 13,
    color: '#7c3aed',
    fontWeight: '600',
  },

  // Input Styles
  inputContainer: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(124, 58, 237, 0.3)',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 12,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    color: '#FFFFFF',
    maxHeight: 100,
    borderWidth: 1,
    borderColor: 'rgba(124, 58, 237, 0.3)',
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  sendButtonGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
