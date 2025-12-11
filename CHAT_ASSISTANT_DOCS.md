# 🤖 Assistente Virtual Inteligente - Documentação Técnica

> Sistema de chat com inteligência artificial integrado ao aplicativo Lab Mobile, utilizando Google Gemini AI para fornecer assistência contextualizada sobre a Fatec Cotia e suas funcionalidades.

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Arquitetura e Tecnologias](#-arquitetura-e-tecnologias)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Sistema de Navegação Inteligente](#-sistema-de-navegação-inteligente)
- [Integração com Google Gemini AI](#-integração-com-google-gemini-ai)
- [Tratamento de Erros](#-tratamento-de-erros)
- [Interface e Experiência do Usuário](#-interface-e-experiência-do-usuário)
- [Configuração e Instalação](#-configuração-e-instalação)
- [Arquitetura de Componentes](#-arquitetura-de-componentes)
- [Fluxo de Dados](#-fluxo-de-dados)
- [Persistência e Estado](#-persistência-e-estado)
- [Responsividade](#-responsividade)
- [Segurança e Boas Práticas](#-segurança-e-boas-práticas)

---

## 🎯 Visão Geral

O **GlobalChatAssistant** é um componente React Native que implementa um assistente virtual persistente, disponível em todas as telas do aplicativo. O componente oferece uma experiência de chat moderna e intuitiva, com integração à API do Google Gemini para processamento de linguagem natural e geração de respostas contextualizadas.

### Propósito

- Fornecer informações instantâneas sobre os **6 cursos tecnológicos** da Fatec Cotia
- Orientar usuários sobre as **4 categorias principais** do app (Cultura, Educação, Empregos, Segurança)
- Facilitar a **navegação** através de comandos em linguagem natural
- Oferecer suporte **24/7** sem necessidade de intervenção humana

### Características Principais

✅ **Persistência Global** - Mantém histórico de conversas durante toda a sessão do app  
✅ **Navegação Inteligente** - Detecta intenções e sugere navegação para seções específicas  
✅ **Interface Moderna** - Design com gradientes, animações e tema escuro  
✅ **Responsivo** - Adapta-se a smartphones (pequenos e grandes) e tablets  
✅ **Tratamento Robusto de Erros** - Mensagens claras para diferentes cenários de falha  
✅ **Validação de API** - Verifica configuração antes de fazer requisições  

---

## 🏗️ Arquitetura e Tecnologias

### Stack Tecnológico

| Tecnologia | Versão | Propósito |
|-----------|--------|-----------|
| **React Native** | 0.81.5 | Framework principal para desenvolvimento mobile |
| **TypeScript** | 5.9.2 | Tipagem estática e segurança de código |
| **Google Generative AI SDK** | Latest | Integração com Gemini AI |
| **Expo Router** | Latest | Sistema de navegação entre telas |
| **Expo Linear Gradient** | Latest | Efeitos visuais de gradiente |
| **React Hooks** | Built-in | Gerenciamento de estado e efeitos |

### Modelo de IA Utilizado

**Gemini 2.5 Flash**
- Modelo: `gemini-2.5-flash`
- Tipo: Large Language Model (LLM)
- Velocidade: Otimizado para respostas rápidas
- Capacidade: Compreensão contextual avançada
- Custo: Tier gratuito disponível

### Arquitetura do Componente

```
GlobalChatAssistant/
├── Estados React (useState)
│   ├── isVisible: boolean          # Controla visibilidade do modal
│   ├── messages: Message[]         # Histórico de mensagens
│   ├── inputText: string           # Texto de entrada do usuário
│   └── isLoading: boolean          # Estado de carregamento
│
├── Referências (useRef)
│   └── scrollViewRef               # Controla scroll automático
│
├── Hooks de Efeito (useEffect)
│   └── Auto-scroll ao adicionar mensagens
│
├── Integração AI
│   ├── GoogleGenerativeAI          # Cliente da API
│   ├── systemPrompt                # Prompt de sistema contextualizado
│   └── handleSendMessage()         # Processamento de mensagens
│
└── UI Components
    ├── FloatingActionButton (FAB)  # Botão de acesso
    ├── Modal                       # Container do chat
    ├── MessageBubbles              # Bolhas de mensagem
    ├── InputArea                   # Campo de entrada
    └── NavigationButtons           # Botões de navegação contextuais
```

---

## 🚀 Funcionalidades Principais

### 1. Chat Interativo com IA

**Descrição**: Conversa em linguagem natural com respostas contextualizadas sobre a Fatec Cotia e o aplicativo.

**Capacidades**:
- Responder perguntas sobre **cursos** (carga horária, objetivos, competências, períodos)
- Explicar **categorias** do app (Cultura, Educação, Empregos, Segurança)
- Fornecer informações sobre **infraestrutura** e **serviços** da Fatec
- Manter **contexto da conversa** através do histórico de mensagens
- Gerar respostas **naturais** e **concisas** adaptadas ao público universitário

**Exemplo de Interação**:
```
Usuário: "Quais cursos a Fatec Cotia oferece?"

Assistente: "A Fatec Cotia oferece 6 cursos tecnológicos:

1. 🎓 Ciência de Dados (Noturno)
2. 🌍 Comércio Exterior (Matutino)
3. 💻 Desenvolvimento de Software Multiplataforma (Noturno)
4. 🎨 Design de Produto (Matutino)
5. 🏭 Gestão da Produção Industrial (Flexível)
6. 💼 Gestão Empresarial

Todos têm 2800 horas de carga horária. Sobre qual curso gostaria de saber mais? [NAV:/(stack)/fatecCourses]"
```

### 2. Navegação Inteligente

**Descrição**: Sistema que detecta intenções de navegação e oferece botões de acesso rápido às seções do app.

**Mecanismo**:
1. IA analisa a pergunta do usuário
2. Detecta menção a categorias específicas (cultura, educação, etc.)
3. Inclui tag `[NAV:rota]` na resposta
4. Component renderiza botão "Ir para esta seção"
5. Ao clicar, usuário é redirecionado e chat é minimizado

**Tags de Navegação Disponíveis**:
```typescript
[NAV:/(stack)/cultura]       // Seção de Cultura
[NAV:/(stack)/educacao]      // Seção de Educação
[NAV:/(stack)/empregos]      // Seção de Empregos
[NAV:/(stack)/seguranca]     // Seção de Segurança
[NAV:/(stack)/fatecCourses]  // Cursos da Fatec Cotia
```

**Fluxo de Navegação**:
```
Usuário pergunta sobre cultura
       ↓
IA identifica contexto de "cultura"
       ↓
Responde com tag [NAV:/(stack)/cultura]
       ↓
Component detecta tag via regex
       ↓
Renderiza botão roxo "Ir para esta seção"
       ↓
Usuário clica → router.push(rota) → Modal fecha
```

**Exemplo Visual**:
```
┌─────────────────────────────────────┐
│ Assistente:                         │
│ "A seção de Cultura oferece..."    │
│                                     │
│ ┌──────────────────────────────┐  │
│ │  → Ir para esta seção        │  │ ← Botão aparece automaticamente
│ └──────────────────────────────┘  │
└─────────────────────────────────────┘
```

### 3. Persistência de Histórico

**Descrição**: Todas as mensagens são armazenadas em estado React durante a sessão do app, permitindo continuidade da conversa.

**Estrutura de Mensagem**:
```typescript
interface Message {
  id: string;              // Timestamp único
  text: string;            // Conteúdo da mensagem
  isUser: boolean;         // true = usuário, false = IA
  timestamp: Date;         // Data/hora da mensagem
  navigationTag?: string;  // Rota de navegação (se aplicável)
}
```

**Mensagem Inicial Padrão**:
```
"Olá! Sou o assistente virtual da Fatec Cotia. 
Como posso ajudá-lo hoje? Posso fornecer informações 
sobre cursos, cultura, empregos, segurança e muito mais!"
```

**Ciclo de Vida**:
- **Criação**: Componente montado no `_layout.tsx` raiz
- **Persistência**: Estado mantido durante navegação entre telas
- **Limpeza**: Histórico resetado apenas ao fechar o app completamente

### 4. Validação de Configuração

**Descrição**: Verificação automática da presença e validade da API Key do Google Gemini antes de fazer requisições.

**Validações Realizadas**:
```typescript
// 1. Verificar se variável de ambiente existe
const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;

// 2. Verificar se não está vazia
if (!apiKey || apiKey.trim() === '') {
  // Exibir mensagem de erro ao usuário
}

// 3. Log no console para debugging
console.log('API Key configurada:', !!apiKey);
```

**Mensagem de Erro ao Usuário**:
```
⚠️ API Key do Gemini não configurada. 
Por favor, adicione EXPO_PUBLIC_GEMINI_API_KEY 
no arquivo .env para usar o assistente de IA.
```

---

## 🧭 Sistema de Navegação Inteligente

### Implementação Técnica

O sistema de navegação utiliza **expressões regulares** para detectar tags especiais nas respostas da IA:

```typescript
// Detecção de tag de navegação na resposta da IA
const navMatch = aiText.match(/\[NAV:([^\]]+)\]/);
const navigationTag = navMatch ? navMatch[1] : undefined;

// Remoção da tag do texto exibido
const cleanedText = aiText.replace(/\[NAV:[^\]]+\]/g, '').trim();

// Armazenamento da tag na mensagem
const aiMessage: Message = {
  id: (Date.now() + 1).toString(),
  text: cleanedText,
  isUser: false,
  timestamp: new Date(),
  navigationTag, // Armazena a rota para renderizar botão
};
```

### Renderização Condicional de Botões

```typescript
{message.navigationTag && (
  <TouchableOpacity
    style={styles.navigationButton}
    onPress={() => handleNavigate(message.navigationTag!)}
  >
    <LinearGradient
      colors={['#7c3aed', '#a855f7']}
      style={styles.navigationButtonGradient}
    >
      <MaterialIcons name="arrow-forward" size={20} color="#fff" />
      <Text style={styles.navigationButtonText}>
        Ir para esta seção
      </Text>
    </LinearGradient>
  </TouchableOpacity>
)}
```

### Função de Navegação

```typescript
const handleNavigate = (route: string) => {
  router.push(route as any);  // Navega para rota
  setIsVisible(false);         // Minimiza o chat
};
```

### Prompt de Sistema para IA

O prompt de sistema instrui a IA sobre como e quando incluir tags de navegação:

```
3. NAVEGAÇÃO DO APP:
   Quando você sugerir ao usuário visitar uma seção específica, 
   inclua uma tag de navegação no formato [NAV:rota].
   
   Rotas disponíveis:
   - [NAV:/(stack)/cultura] - Para cultura
   - [NAV:/(stack)/educacao] - Para educação
   - [NAV:/(stack)/empregos] - Para empregos
   - [NAV:/(stack)/seguranca] - Para segurança
   - [NAV:/(stack)/fatecCourses] - Para cursos da Fatec
```

---

## 🔗 Integração com Google Gemini AI

### Inicialização do Cliente

```typescript
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(
  process.env.EXPO_PUBLIC_GEMINI_API_KEY || ''
);
```

### Configuração do Modelo

```typescript
const model = genAI.getGenerativeModel({ 
  model: 'gemini-2.5-flash' 
});
```

**Por que Gemini 2.5 Flash?**
- ✅ **Velocidade**: Responde em 1-3 segundos
- ✅ **Custo**: Tier gratuito com 15 requisições/minuto
- ✅ **Qualidade**: Compreensão contextual avançada
- ✅ **Disponibilidade**: Modelo estável e em produção

### Fluxo de Requisição

```typescript
const handleSendMessage = async () => {
  // 1. Validação de entrada
  if (!inputText.trim() || isLoading) return;

  // 2. Validação de API Key
  if (!apiKey || apiKey.trim() === '') {
    // Exibir erro
    return;
  }

  // 3. Adicionar mensagem do usuário ao estado
  const userMessage: Message = {
    id: Date.now().toString(),
    text: inputText.trim(),
    isUser: true,
    timestamp: new Date(),
  };
  setMessages((prev) => [...prev, userMessage]);

  // 4. Limpar input e ativar loading
  setInputText('');
  setIsLoading(true);

  try {
    // 5. Construir prompt com histórico
    const chatHistory = messages
      .map((msg) => `${msg.isUser ? 'Usuário' : 'Assistente'}: ${msg.text}`)
      .join('\n');

    const prompt = `${systemPrompt}\n\nHistórico:\n${chatHistory}\n\nUsuário: ${userMessage.text}\n\nAssistente:`;

    // 6. Fazer requisição à API
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const aiText = response.text();

    // 7. Processar resposta e adicionar ao estado
    const navMatch = aiText.match(/\[NAV:([^\]]+)\]/);
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: aiText.replace(/\[NAV:[^\]]+\]/g, '').trim(),
      isUser: false,
      timestamp: new Date(),
      navigationTag: navMatch ? navMatch[1] : undefined,
    };
    setMessages((prev) => [...prev, aiMessage]);

  } catch (error) {
    // 8. Tratamento de erros
    handleError(error);
  } finally {
    // 9. Desativar loading
    setIsLoading(false);
  }
};
```

### System Prompt Completo

O prompt de sistema tem **85 linhas** e contém:

1. **Identidade do Assistente**
   - Nome: Assistente Virtual da Fatec Cotia
   - Objetivo: Ajudar estudantes e visitantes

2. **Base de Conhecimento - Cursos**
   ```
   1. Ciência de Dados (Noturno)
   2. Comércio Exterior (Matutino)
   3. Desenvolvimento de Software Multiplataforma (Noturno)
   4. Design de Produto (Matutino)
   5. Gestão da Produção Industrial (Flexível)
   6. Gestão Empresarial
   ```

3. **Base de Conhecimento - Categorias do App**
   - Cultura: Arte, música, teatro, cinema, patrimônio
   - Educação: Cursos, bibliotecas, ensino superior, EAD
   - Empregos: Vagas, estágios, freelance, capacitação
   - Segurança: Emergência, segurança pública e digital

4. **Instruções de Navegação**
   - Formato de tags: `[NAV:rota]`
   - Lista de rotas disponíveis

5. **Diretrizes de Comportamento**
   - Ser cordial e prestativo
   - Fornecer informações precisas (ex: 2800 horas para todos os cursos)
   - Manter respostas concisas mas informativas

---

## ⚠️ Tratamento de Erros

O componente implementa um sistema robusto de detecção e comunicação de erros, com mensagens específicas para cada cenário.

### Tipos de Erros Tratados

#### 1. API Key Expirada (400 Bad Request)

**Detecção**:
```typescript
if (error?.message?.includes('expired') || 
    error?.message?.includes('API_KEY_INVALID')) {
  // ...
}
```

**Mensagem ao Usuário**:
```
🔑 API Key EXPIRADA! Sua chave do Gemini precisa ser renovada.

🔄 Obtenha uma nova em: https://aistudio.google.com/app/apikey

📝 Atualize no arquivo .env com: 
EXPO_PUBLIC_GEMINI_API_KEY=sua_nova_chave
```

#### 2. Modelo Não Disponível (404)

**Detecção**:
```typescript
if (error?.message?.includes('404') || error?.status === 404) {
  // ...
}
```

**Mensagem ao Usuário**:
```
❌ Modelo de IA não disponível. Verifique sua API key 
do Gemini e certifique-se de que está usando a versão 
correta da API.
```

#### 3. API Key Inválida ou Ausente

**Detecção**:
```typescript
if (error?.message?.includes('API key') || 
    error?.message?.includes('API_KEY')) {
  // ...
}
```

**Mensagem ao Usuário**:
```
🔑 Erro na API Key. Verifique se sua chave do Gemini 
está correta e ativa.

🔗 Obtenha uma nova em: https://aistudio.google.com/app/apikey
```

#### 4. Limite de Requisições (429)

**Detecção**:
```typescript
if (error?.message?.includes('quota') || 
    error?.message?.includes('limit')) {
  // ...
}
```

**Mensagem ao Usuário**:
```
⏱️ Limite de requisições atingido. Aguarde alguns 
instantes e tente novamente.
```

#### 5. Erro de Conexão

**Detecção**:
```typescript
if (error?.message?.includes('network') || 
    error?.message?.includes('fetch')) {
  // ...
}
```

**Mensagem ao Usuário**:
```
🌐 Erro de conexão. Verifique sua internet e tente novamente.
```

#### 6. Bad Request Genérico (400)

**Detecção**:
```typescript
if (error?.status === 400) {
  // ...
}
```

**Mensagem ao Usuário**:
```
⚠️ Requisição inválida (400). Possíveis causas:
• API Key inválida ou expirada
• Formato de requisição incorreto

🔗 Verifique sua chave em: https://aistudio.google.com/app/apikey
```

#### 7. Erro Genérico

**Detecção**:
```typescript
else {
  errorText = `⚠️ Erro ao processar mensagem: 
  ${error?.message || 'Erro desconhecido'}. Tente novamente.`;
}
```

### Console Logging para Debugging

```typescript
console.log('API Key configurada:', !!process.env.EXPO_PUBLIC_GEMINI_API_KEY);
console.error('Erro ao comunicar com a IA:', error);
```

---

## 🎨 Interface e Experiência do Usuário

### Floating Action Button (FAB)

**Especificações**:
- **Posição**: Inferior direita (fixed)
- **Tamanho**: 56x56px (normal), 64x64px (tablet)
- **Gradiente**: `['#7c3aed', '#a855f7']` (roxo)
- **Ícone**: `robot` (MaterialCommunityIcons)
- **Z-index**: 9999 (sempre visível)
- **Elevação**: 8 (sombra pronunciada)

**Código**:
```typescript
<TouchableOpacity
  style={styles.fab}
  onPress={() => setIsVisible(true)}
  activeOpacity={0.8}
>
  <LinearGradient
    colors={['#7c3aed', '#a855f7']}
    style={styles.fabGradient}
  >
    <MaterialCommunityIcons name="robot" size={28} color="#fff" />
  </LinearGradient>
</TouchableOpacity>
```

### Modal do Chat

**Especificações**:
- **Tamanho**: 90% da largura e altura da tela
- **Background**: Tema escuro (`#1a1a2e`, `#0f0f23`)
- **Animação**: `slide` (entrada suave)
- **Teclado**: KeyboardAvoidingView para iOS

**Estrutura Visual**:
```
┌───────────────────────────────────┐
│  Header (Gradiente Roxo)          │ ← Título + Botão Fechar
├───────────────────────────────────┤
│                                   │
│  ScrollView (Mensagens)           │ ← Histórico de chat
│                                   │
│  ┌─────────────────────────────┐ │
│  │ Usuário: "Olá"              │ │ ← Bolha do usuário
│  └─────────────────────────────┘ │
│                                   │
│  ┌─────────────────────────────┐ │
│  │ Assistente: "Como posso...│ │ ← Bolha da IA
│  │ ┌────────────────────┐     │ │
│  │ │ → Ir para seção    │     │ │ ← Botão de navegação
│  │ └────────────────────┘     │ │
│  └─────────────────────────────┘ │
│                                   │
├───────────────────────────────────┤
│  [  Digite sua mensagem...  ] [→]│ ← Input + Botão Enviar
└───────────────────────────────────┘
```

### Bolhas de Mensagem

**Usuário** (Direita):
- Background: Gradiente roxo `['#7c3aed', '#a855f7']`
- Alinhamento: `flex-end`
- Cor do texto: `#ffffff`
- Border radius: 20px (topo esquerdo), 4px (topo direito)

**Assistente** (Esquerda):
- Background: `#2d2d44` (cinza escuro)
- Alinhamento: `flex-start`
- Cor do texto: `#e0e0e0`
- Border radius: 4px (topo esquerdo), 20px (topo direito)

**Código de Renderização**:
```typescript
<View
  key={message.id}
  style={[
    styles.messageBubble,
    message.isUser ? styles.userBubble : styles.aiBubble,
  ]}
>
  {message.isUser ? (
    <Text style={styles.userMessageText}>{message.text}</Text>
  ) : (
    <View style={styles.aiMessageContent}>
      <MaterialCommunityIcons
        name="robot"
        size={16}
        color="#a855f7"
        style={styles.aiIcon}
      />
      <Text style={styles.aiMessageText}>{message.text}</Text>
    </View>
  )}
  
  {/* Botão de navegação (se aplicável) */}
  {message.navigationTag && (
    <TouchableOpacity
      style={styles.navigationButton}
      onPress={() => handleNavigate(message.navigationTag!)}
    >
      {/* ... */}
    </TouchableOpacity>
  )}
</View>
```

### Campo de Entrada

**Especificações**:
- **Background**: `#2d2d44` (cinza escuro)
- **Placeholder**: "Digite sua mensagem..."
- **Cor do texto**: `#ffffff`
- **Border radius**: 25px
- **Padding**: 12-16px

**Botão de Envio**:
- Ícone: `send` (MaterialIcons)
- Cor: `#a855f7` (roxo)
- Tamanho: 28px
- Desabilitado: Quando `isLoading` ou `!inputText.trim()`

### Indicador de Carregamento

```typescript
{isLoading && (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="small" color="#a855f7" />
    <Text style={styles.loadingText}>Pensando...</Text>
  </View>
)}
```

---

## ⚙️ Configuração e Instalação

### 1. Pré-requisitos

- Node.js 16+ instalado
- Expo CLI instalado globalmente
- Conta no Google AI Studio (gratuita)

### 2. Obter API Key do Google Gemini

**Passo a Passo**:

1. Acesse: https://aistudio.google.com/app/apikey
2. Faça login com sua conta Google
3. Clique em **"Create API Key"**
4. Selecione o projeto Google Cloud (ou crie um novo)
5. Copie a chave gerada (formato: `AIzaSy...`)

### 3. Configurar Variável de Ambiente

**Criar arquivo `.env` na raiz do projeto**:
```bash
# Navegue até a raiz do projeto
cd my-app

# Crie o arquivo .env
touch .env  # macOS/Linux
# ou
New-Item .env  # Windows PowerShell
```

**Adicionar a API Key**:
```env
EXPO_PUBLIC_GEMINI_API_KEY=AIzaSyC34ncV43X7YcYJOTtNLRpQ2N-OtNBHlzQ
```

⚠️ **IMPORTANTE**:
- Não adicione aspas ao redor da chave
- Não adicione espaços antes ou depois do `=`
- Nunca comite o arquivo `.env` no Git

### 4. Adicionar `.env` ao `.gitignore`

```bash
# Abrir .gitignore e adicionar:
.env
```

### 5. Instalar Dependências

```bash
npm install @google/generative-ai
# ou
yarn add @google/generative-ai
```

### 6. Verificar Instalação

**Executar teste de API**:
```bash
node teste-final.js
```

**Saída Esperada**:
```
🤖 Testando Gemini 2.5 Flash...
✅ Modelo gemini-2.5-flash funcionou!

Resposta da IA:
[Texto com informações sobre a Fatec Cotia]
```

### 7. Iniciar o Aplicativo

```bash
npm run web
# ou
npm start
```

### 8. Testar o Chat

1. Abra o app no navegador
2. Clique no **botão roxo flutuante** (canto inferior direito)
3. Digite: "Quais cursos a Fatec oferece?"
4. Aguarde resposta da IA
5. Teste navegação clicando em "Ir para esta seção"

---

## 🧩 Arquitetura de Componentes

### Hierarquia de Componentes

```
App (_layout.tsx)
└── SafeAreaProvider
    └── Stack Navigator
        ├── GlobalChatAssistant ← Componente persistente
        │   ├── FAB Button
        │   └── Modal
        │       ├── Header
        │       │   ├── Title
        │       │   └── Close Button
        │       ├── ScrollView (Messages)
        │       │   └── Message[]
        │       │       ├── MessageBubble (User/AI)
        │       │       └── NavigationButton (conditional)
        │       ├── Loading Indicator
        │       └── Input Area
        │           ├── TextInput
        │           └── Send Button
        └── Screen Routes
            ├── index.tsx (Home)
            └── (stack)/
                ├── cultura.tsx
                ├── educacao.tsx
                ├── empregos.tsx
                ├── seguranca.tsx
                └── fatecCourses.tsx
```

### Integração no Layout Raiz

**app/_layout.tsx**:
```typescript
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GlobalChatAssistant } from './components/GlobalChatAssistant';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(stack)" options={{ headerShown: false }} />
      </Stack>
      <GlobalChatAssistant /> {/* Renderizado fora do Stack */}
    </SafeAreaProvider>
  );
}
```

**Por que fora do Stack?**
- Garante que o FAB seja visível em **todas** as telas
- Mantém o estado do chat **persistente** durante navegação
- Evita remontagem do componente ao trocar de tela

---

## 🔄 Fluxo de Dados

### Diagrama de Fluxo

```
┌─────────────────────────────────────────────────────────────┐
│                      USUÁRIO INTERAGE                       │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  1. Clica no FAB → setIsVisible(true) → Modal abre          │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  2. Digite mensagem → setInputText(valor)                   │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  3. Clica Enviar → handleSendMessage()                      │
│     ├─ Validar input (!trim ou isLoading) → return          │
│     ├─ Validar API Key → return se inválida                 │
│     ├─ Criar userMessage                                    │
│     ├─ setMessages([...prev, userMessage])                  │
│     ├─ setInputText('')                                     │
│     └─ setIsLoading(true)                                   │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  4. Fazer requisição à API Gemini                           │
│     ├─ Construir prompt com systemPrompt + histórico        │
│     ├─ model.generateContent(prompt)                        │
│     └─ Aguardar response                                    │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  5. Processar resposta da IA                                │
│     ├─ Extrair texto: response.text()                       │
│     ├─ Detectar tag: match(/\[NAV:([^\]]+)\]/)             │
│     ├─ Limpar texto: replace(/\[NAV:[^\]]+\]/g, '')        │
│     └─ Criar aiMessage com navigationTag                    │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  6. Atualizar estado                                        │
│     ├─ setMessages([...prev, aiMessage])                    │
│     └─ setIsLoading(false)                                  │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  7. Renderizar nova mensagem                                │
│     ├─ ScrollView atualiza                                  │
│     ├─ Auto-scroll para fim (useEffect)                     │
│     └─ Renderizar botão navegação (se navigationTag)        │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  8. Usuário clica em "Ir para esta seção"                  │
│     ├─ handleNavigate(route)                                │
│     ├─ router.push(route)                                   │
│     └─ setIsVisible(false) → Modal fecha                    │
└─────────────────────────────────────────────────────────────┘
```

### Tratamento de Erros no Fluxo

```
Requisição à API falha
       ↓
Entra no bloco catch(error)
       ↓
Detecta tipo de erro
       ↓
Cria errorMessage com texto apropriado
       ↓
setMessages([...prev, errorMessage])
       ↓
setIsLoading(false)
       ↓
Usuário vê mensagem de erro com instruções
```

---

## 💾 Persistência e Estado

### Estado Local (React State)

O componente utiliza **4 estados principais**:

```typescript
const [isVisible, setIsVisible] = useState(false);
const [messages, setMessages] = useState<Message[]>([...]);
const [inputText, setInputText] = useState('');
const [isLoading, setIsLoading] = useState(false);
```

### Ciclo de Vida do Estado

**Montagem (Component Mount)**:
```
App inicia
    ↓
_layout.tsx renderiza GlobalChatAssistant
    ↓
useState inicializa estados
    ↓
messages = [mensagemInicial]
    ↓
Componente fica "dormindo" (isVisible = false)
```

**Durante Navegação**:
```
Usuário navega entre telas
    ↓
Stack Navigator monta/desmonta screens
    ↓
GlobalChatAssistant NÃO é remontado (fora do Stack)
    ↓
Estado permanece intacto
    ↓
Histórico de mensagens persiste
```

**Desmontagem**:
```
Usuário fecha o app
    ↓
React Native limpa componentes
    ↓
Estado é destruído
    ↓
Próxima sessão começa com mensagemInicial
```

### Limitações Atuais

⚠️ **Sem Persistência entre Sessões**:
- Histórico **não** é salvo em AsyncStorage
- Fechar o app **apaga** todas as conversas
- Reabrir o app **reinicia** com mensagem padrão

**Possível Melhoria Futura**:
```typescript
// Salvar ao adicionar mensagem
useEffect(() => {
  AsyncStorage.setItem('chatHistory', JSON.stringify(messages));
}, [messages]);

// Carregar ao montar componente
useEffect(() => {
  const loadHistory = async () => {
    const saved = await AsyncStorage.getItem('chatHistory');
    if (saved) setMessages(JSON.parse(saved));
  };
  loadHistory();
}, []);
```

---

## 📱 Responsividade

### Breakpoints Implementados

```typescript
const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 375;   // iPhone SE, Galaxy S
const isTablet = width > 768;        // iPad, Android tablets
```

### Ajustes por Dispositivo

| Elemento | Small (<375px) | Normal (375-768px) | Tablet (>768px) |
|----------|----------------|-------------------|-----------------|
| **FAB Size** | 56x56px | 56x56px | 64x64px |
| **FAB Icon** | 24px | 28px | 32px |
| **Modal Width** | 90% | 90% | 90% |
| **Modal Height** | 90% | 90% | 90% |
| **Message Font** | 14px | 15px | 16px |
| **Input Font** | 14px | 15px | 16px |
| **Header Padding** | 16px | 20px | 24px |
| **Message Padding** | 10px | 12px | 14px |

### Código de Responsividade

```typescript
const styles = StyleSheet.create({
  fab: {
    width: isTablet ? 64 : 56,
    height: isTablet ? 64 : 56,
    // ...
  },
  
  messageBubble: {
    maxWidth: isTablet ? '60%' : '75%',
    padding: isSmallScreen ? 10 : 12,
    // ...
  },
  
  userMessageText: {
    fontSize: isSmallScreen ? 14 : 15,
    // ...
  },
  
  header: {
    paddingVertical: isSmallScreen ? 16 : isTablet ? 24 : 20,
    // ...
  },
});
```

### Orientação (Portrait vs Landscape)

O componente se adapta automaticamente:
- **Portrait**: Modal 90% largura e altura
- **Landscape**: Modal mantém 90%, mas ScrollView aumenta área visível

---

## 🔒 Segurança e Boas Práticas

### Proteção de API Key

✅ **Implementado**:
- API Key em variável de ambiente (`.env`)
- `.env` adicionado ao `.gitignore`
- Nunca exposta no código-fonte commitado

❌ **Evitar**:
```typescript
// NUNCA FAZER ISSO:
const apiKey = "AIzaSyC34ncV43X7YcYJOTtNLRpQ2N-OtNBHlzQ";
```

✅ **Correto**:
```typescript
const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
```

### Validação de Entrada

```typescript
// Previne envio de mensagens vazias
if (!inputText.trim() || isLoading) return;

// Previne múltiplas requisições simultâneas
if (isLoading) return;
```

### Rate Limiting (Cliente)

**Limites da API Gemini (Tier Gratuito)**:
- 15 requisições/minuto
- 1500 requisições/dia
- 1 milhão de tokens/mês

**Recomendação de Implementação**:
```typescript
const [requestCount, setRequestCount] = useState(0);
const [lastReset, setLastReset] = useState(Date.now());

const handleSendMessage = async () => {
  const now = Date.now();
  if (now - lastReset > 60000) {
    setRequestCount(0);
    setLastReset(now);
  }
  
  if (requestCount >= 15) {
    // Exibir mensagem de limite atingido
    return;
  }
  
  setRequestCount(prev => prev + 1);
  // ... resto da lógica
};
```

### Sanitização de Dados

**Prevenção de XSS** (Cross-Site Scripting):
- React Native automaticamente escapa texto em `<Text>`
- Não usar `dangerouslySetInnerHTML` ou similar

**Limpeza de Input**:
```typescript
const cleanedInput = inputText.trim();
```

### Tratamento de Tokens Sensíveis

**Nunca logar API Keys completas**:
```typescript
// ❌ NUNCA:
console.log('API Key:', apiKey);

// ✅ CORRETO:
console.log('API Key configurada:', !!apiKey);
console.log('API Key (primeiros 10):', apiKey?.substring(0, 10) + '...');
```

---

## 📊 Estrutura de Dados Completa

### Interface Message

```typescript
interface Message {
  id: string;              // Timestamp único (Date.now().toString())
  text: string;            // Conteúdo da mensagem
  isUser: boolean;         // true = usuário, false = IA
  timestamp: Date;         // Data/hora de criação
  navigationTag?: string;  // Rota para navegação (opcional)
}
```

**Exemplo de Mensagem do Usuário**:
```json
{
  "id": "1702407612345",
  "text": "Quais cursos a Fatec oferece?",
  "isUser": true,
  "timestamp": "2025-12-10T14:30:12.345Z"
}
```

**Exemplo de Mensagem da IA (com navegação)**:
```json
{
  "id": "1702407615678",
  "text": "A Fatec Cotia oferece 6 cursos tecnológicos. Gostaria de ver a lista completa?",
  "isUser": false,
  "timestamp": "2025-12-10T14:30:15.678Z",
  "navigationTag": "/(stack)/fatecCourses"
}
```

### Estado Completo do Componente

```typescript
{
  isVisible: false,
  messages: [
    {
      id: "0",
      text: "Olá! Sou o assistente virtual da Fatec Cotia...",
      isUser: false,
      timestamp: Date,
    },
    // ... outras mensagens
  ],
  inputText: "",
  isLoading: false,
}
```

---

## 🎯 Casos de Uso Reais

### 1. Estudante Procurando Curso

**Fluxo**:
```
Usuário: "Quero fazer um curso de tecnologia na área de dados"
    ↓
IA: "Ótima escolha! A Fatec Cotia oferece o curso de Ciência de Dados 
     no período noturno. O curso tem 2800 horas e forma profissionais 
     especializados em análise de dados, machine learning e estatística. 
     Gostaria de ver mais detalhes? [NAV:/(stack)/fatecCourses]"
    ↓
[Botão "Ir para esta seção" aparece]
    ↓
Usuário clica → Navega para tela de Cursos Fatec
```

### 2. Visitante Explorando o App

**Fluxo**:
```
Usuário: "O que esse app faz?"
    ↓
IA: "Este é o app da Fatec Cotia! Aqui você encontra informações sobre:
     • Cultura: Arte, música, cinema
     • Educação: Cursos e bibliotecas
     • Empregos: Vagas e estágios
     • Segurança: Serviços de emergência
     
     Sobre qual categoria gostaria de saber mais?"
    ↓
Usuário: "Quero ver sobre empregos"
    ↓
IA: "Na seção de Empregos você encontra vagas de trabalho, estágios, 
     oportunidades de freelance e cursos de capacitação profissional. 
     [NAV:/(stack)/empregos]"
    ↓
[Botão de navegação aparece]
```

### 3. Usuário com API Key Expirada

**Fluxo**:
```
Usuário: "Olá"
    ↓
[Requisição à API retorna 400]
    ↓
Sistema detecta error.message.includes('expired')
    ↓
Exibe mensagem:
"🔑 API Key EXPIRADA! Sua chave do Gemini precisa ser renovada.
 
 🔄 Obtenha uma nova em: https://aistudio.google.com/app/apikey
 
 📝 Atualize no arquivo .env com: EXPO_PUBLIC_GEMINI_API_KEY=sua_nova_chave"
```

---

## 🚀 Melhorias Futuras

### Curto Prazo

1. **Persistência de Histórico**
   - Salvar conversas em AsyncStorage
   - Carregar histórico ao abrir o app

2. **Indicador de Digitação**
   - Animação "..." enquanto IA processa
   - Feedback visual mais rico

3. **Rate Limiting no Cliente**
   - Contador de requisições/minuto
   - Mensagem quando atingir limite

### Médio Prazo

4. **Histórico de Conversas**
   - Lista de conversas anteriores
   - Busca em histórico
   - Exportar conversas

5. **Modo Offline**
   - Respostas em cache
   - FAQ local para perguntas comuns

6. **Personalização**
   - Temas (claro/escuro)
   - Tamanho de fonte
   - Configurar comportamento da IA

### Longo Prazo

7. **Multimodalidade**
   - Enviar imagens (Gemini Vision)
   - Enviar documentos PDF
   - Respostas com imagens

8. **Análise de Sentimento**
   - Detectar frustração do usuário
   - Adaptar tom de resposta

9. **Integração com Sistema Acadêmico**
   - Consultar notas (com autenticação)
   - Ver calendário de provas
   - Informações personalizadas por aluno

---

## 📈 Métricas e Analytics (Sugestão)

### Eventos a Serem Rastreados

```typescript
// Exemplo com Firebase Analytics
import analytics from '@react-native-firebase/analytics';

// Abertura do chat
analytics().logEvent('chat_opened', {});

// Mensagem enviada
analytics().logEvent('message_sent', {
  message_length: inputText.length,
});

// Navegação via chat
analytics().logEvent('chat_navigation', {
  destination: navigationTag,
});

// Erro de API
analytics().logEvent('api_error', {
  error_type: errorType,
});
```

### KPIs Importantes

- **Taxa de Abertura**: % de sessões que abrem o chat
- **Mensagens por Sessão**: Média de mensagens enviadas
- **Taxa de Navegação**: % de conversas que resultam em navegação
- **Taxa de Erro**: % de mensagens que retornam erro
- **Tempo de Resposta Médio**: Latência da API

---

## 🛠️ Troubleshooting

### Problema: Chat não abre ao clicar no FAB

**Solução**:
```typescript
// Verificar se isVisible está sendo atualizado
console.log('isVisible:', isVisible);

// Verificar se Modal está renderizando
console.log('Modal renderizado:', !!modalRef.current);
```

### Problema: Mensagens não aparecem

**Solução**:
```typescript
// Verificar estado de messages
console.log('Messages:', messages.length);

// Verificar se ScrollView está renderizando
console.log('ScrollView height:', scrollViewRef.current?.scrollHeight);
```

### Problema: API Key não funciona

**Solução**:
1. Verificar se `.env` está na raiz do projeto
2. Reiniciar o servidor: `npm start --reset-cache`
3. Verificar no console: `console.log('API Key:', process.env.EXPO_PUBLIC_GEMINI_API_KEY)`
4. Testar com `node teste-final.js`

### Problema: Erro 404 (Model Not Found)

**Solução**:
```typescript
// Verificar modelo correto
const model = genAI.getGenerativeModel({ 
  model: 'gemini-2.5-flash'  // Não usar gemini-1.5-flash
});
```

### Problema: Limite de requisições atingido

**Solução**:
- Aguardar 1 minuto para reset do contador
- Criar nova API Key se necessário
- Implementar debounce no botão de envio

---

## 📚 Referências

### Documentação Oficial

- [Google Generative AI SDK](https://ai.google.dev/api/rest/v1beta/models/generateContent)
- [Gemini API Pricing](https://ai.google.dev/pricing)
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Router Docs](https://docs.expo.dev/router/introduction/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Guias Relacionados

- `.env.example` - Configuração de API Key com instruções completas
- `README.md` - Documentação geral do aplicativo
- `teste-final.js` - Script de teste da API Gemini

---

## 👥 Contribuindo

### Como Melhorar o Assistente

1. **Fork** o repositório
2. **Crie uma branch** para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. **Push** para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um **Pull Request**

### Áreas de Contribuição

- 🐛 Correção de bugs
- ✨ Novas funcionalidades
- 📝 Melhorias na documentação
- 🎨 Aprimoramentos de UI/UX
- ⚡ Otimizações de performance

---

## 📄 Licença

Este projeto é um trabalho acadêmico desenvolvido para a Fatec Cotia.

---

<div align="center">
  <p><strong>Desenvolvido com ❤️ e ☕ para a Fatec Cotia</strong></p>
  <p>© 2025 Lab Mobile - Assistente Virtual Inteligente</p>
  <p>
    <a href="https://github.com/gustavo03toledo/appFatecDsmMobile">
      <img src="https://img.shields.io/github/stars/gustavo03toledo/appFatecDsmMobile?style=social" alt="GitHub Stars">
    </a>
  </p>
</div>
