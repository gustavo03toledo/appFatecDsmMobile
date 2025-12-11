import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
  Platform,
  StatusBar
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  MaterialIcons, 
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons
} from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 375;
const isTablet = width > 768;

// URL da foto de perfil do GitHub
const fotoPerfil = { uri: 'https://avatars.githubusercontent.com/u/124840515?v=4' };

export default function Desenvolvedor() {
  const handleLinkPress = (url: string) => {
    Linking.openURL(url).catch(err => console.error('Erro ao abrir link:', err));
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <LinearGradient
        colors={['#0f0f23', '#1a1a2e', '#16213e']}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" backgroundColor="#0f0f23" />
        
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          bounces={true}
        >
          {/* Seção Sobre */}
          <View style={styles.sobre}>
            <View style={styles.sobreFoto}>
              <Image 
                source={fotoPerfil} 
                style={styles.fotoPerfil}
                resizeMode="cover"
              />
            </View>
            <View style={styles.sobreDescricao}>
              <Text style={[styles.sobreTitulo, styles.textGradient]}>
                Gustavo Toledo
              </Text>
              <Text style={styles.sobreTexto}>
                Transformando desafios em soluções através da tecnologia. 
                Desenvolvedor apaixonado por criar experiências digitais que fazem a diferença.
              </Text>
            </View>
          </View>

          {/* Seção O que eu faço */}
          <View style={styles.oQueFaco}>
            <Text style={[styles.sectionTitulo, styles.textGradient]}>
              O que eu faço
            </Text>
            <View style={styles.oQueFacoLista}>
              <View style={styles.listaItem}>
                <MaterialIcons name="code" size={24} color="#667eea" />
                <Text style={styles.listaTexto}>Desenvolvimento de aplicações mobile e web</Text>
              </View>
              <View style={styles.listaItem}>
                <MaterialCommunityIcons name="web" size={24} color="#667eea" />
                <Text style={styles.listaTexto}>Criação de interfaces modernas e responsivas</Text>
              </View>
              <View style={styles.listaItem}>
                <FontAwesome5 name="mobile-alt" size={24} color="#667eea" />
                <Text style={styles.listaTexto}>Desenvolvimento de apps React Native</Text>
              </View>
              <View style={styles.listaItem}>
                <MaterialIcons name="architecture" size={24} color="#667eea" />
                <Text style={styles.listaTexto}>Arquitetura de software e boas práticas</Text>
              </View>
            </View>
          </View>

          {/* Seção Formação */}
          <View style={styles.formacao}>
            <Text style={[styles.sectionTitulo, styles.textGradient]}>
              Formação
            </Text>
            <Text style={styles.formacaoTexto}>
              Graduando em Desenvolvimento de Software Multiplataforma (DSM) pela FATEC, 
              com foco em tecnologias modernas e desenvolvimento de soluções inovadoras.
            </Text>
          </View>

          {/* Seção Timeline - Placeholder */}
          <View style={styles.timelineContainer}>
            <Text style={[styles.sectionTitulo, styles.textGradient]}>
              Experiência
            </Text>
            <Text style={styles.timelinePlaceholder}>
              Timeline de experiências profissionais
            </Text>
          </View>

          {/* Seção Stack - Placeholder */}
          <View style={styles.stackContainer}>
            <Text style={[styles.sectionTitulo, styles.textGradient]}>
              Tecnologias
            </Text>
            <View style={styles.stackGrid}>
              <View style={styles.stackItem}>
                <MaterialIcons name="code" size={32} color="#FFFFFF" />
                <Text style={styles.stackText}>React Native</Text>
              </View>
              <View style={styles.stackItem}>
                <MaterialCommunityIcons name="react" size={32} color="#FFFFFF" />
                <Text style={styles.stackText}>React</Text>
              </View>
              <View style={styles.stackItem}>
                <MaterialIcons name="javascript" size={32} color="#FFFFFF" />
                <Text style={styles.stackText}>JavaScript</Text>
              </View>
              <View style={styles.stackItem}>
                <MaterialIcons name="type-specimen" size={32} color="#FFFFFF" />
                <Text style={styles.stackText}>TypeScript</Text>
              </View>
            </View>
          </View>

          {/* Seção Call to Action */}
          <View style={styles.callToAction}>
            <Text style={[styles.sectionTitulo, styles.textGradient]}>
              Vamos construir algo incrível juntos
            </Text>
            <TouchableOpacity
              style={styles.callToActionBotao}
              onPress={() => handleLinkPress('mailto:gustavo.toledo@example.com')}
              activeOpacity={0.7}
            >
              <Text style={styles.callToActionTexto}>Entre em Contato</Text>
            </TouchableOpacity>
          </View>

          {/* Nova Seção Conecte-se */}
          <View style={styles.conecteSe}>
            <Text style={[styles.sectionTitulo, styles.textGradient]}>
              Conecte-se Comigo
            </Text>
            <Text style={styles.sobreTexto}>
              Vamos nos conectar! Sinta-se à vontade para explorar meus projetos e 
              entrar em contato através das redes sociais.
            </Text>
            <View style={styles.desenvolvedorLinks}>
              <TouchableOpacity
                style={styles.callToActionBotao}
                onPress={() => handleLinkPress('https://github.com/gustavo03toledo')}
                activeOpacity={0.7}
              >
                <FontAwesome5 name="github" size={20} color="#FFFFFF" style={styles.botaoIcon} />
                <Text style={styles.callToActionTexto}>GitHub</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.callToActionBotao}
                onPress={() => handleLinkPress('https://www.linkedin.com/in/gustavo-toledo-4b3018259')}
                activeOpacity={0.7}
              >
                <FontAwesome5 name="linkedin" size={20} color="#FFFFFF" style={styles.botaoIcon} />
                <Text style={styles.callToActionTexto}>LinkedIn</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f0f23',
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingTop: Platform.OS === 'ios' ? 12 : 16,
    paddingBottom: Platform.OS === 'ios' ? 24 : 28,
    paddingHorizontal: isSmallScreen ? 12 : 16,
    minHeight: height,
  },
  sobre: {
    marginBottom: isSmallScreen ? 24 : 32,
    alignItems: 'center',
  },
  sobreFoto: {
    marginBottom: isSmallScreen ? 16 : 20,
  },
  fotoPerfil: {
    width: isSmallScreen ? 120 : isTablet ? 180 : 150,
    height: isSmallScreen ? 120 : isTablet ? 180 : 150,
    borderRadius: isSmallScreen ? 60 : isTablet ? 90 : 75,
    borderWidth: 3,
    borderColor: '#667eea',
  },
  sobreDescricao: {
    alignItems: 'center',
    paddingHorizontal: isSmallScreen ? 8 : 12,
  },
  sobreTitulo: {
    fontSize: isSmallScreen ? 24 : isTablet ? 36 : 30,
    fontWeight: 'bold',
    marginBottom: isSmallScreen ? 12 : 16,
    textAlign: 'center',
  },
  textGradient: {
    color: '#667eea',
  },
  sobreTexto: {
    fontSize: isSmallScreen ? 14 : 16,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: isSmallScreen ? 20 : 24,
    fontWeight: '300',
  },
  sectionTitulo: {
    fontSize: isSmallScreen ? 20 : isTablet ? 28 : 24,
    fontWeight: 'bold',
    marginBottom: isSmallScreen ? 16 : 20,
    textAlign: 'center',
  },
  oQueFaco: {
    marginBottom: isSmallScreen ? 24 : 32,
  },
  oQueFacoLista: {
    gap: isSmallScreen ? 12 : 16,
  },
  listaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    padding: isSmallScreen ? 14 : 16,
    borderRadius: isSmallScreen ? 12 : 16,
    marginBottom: isSmallScreen ? 8 : 12,
  },
  listaTexto: {
    fontSize: isSmallScreen ? 14 : 16,
    color: '#FFFFFF',
    marginLeft: 12,
    flex: 1,
    lineHeight: isSmallScreen ? 20 : 24,
  },
  formacao: {
    marginBottom: isSmallScreen ? 24 : 32,
  },
  formacaoTexto: {
    fontSize: isSmallScreen ? 14 : 16,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: isSmallScreen ? 20 : 24,
    fontWeight: '300',
    paddingHorizontal: isSmallScreen ? 8 : 12,
  },
  timelineContainer: {
    marginBottom: isSmallScreen ? 24 : 32,
  },
  timelinePlaceholder: {
    fontSize: isSmallScreen ? 14 : 16,
    color: '#a0a0a0',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  stackContainer: {
    marginBottom: isSmallScreen ? 24 : 32,
  },
  stackGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: isSmallScreen ? 12 : 16,
  },
  stackItem: {
    alignItems: 'center',
    backgroundColor: 'rgba(102, 126, 234, 0.15)',
    padding: isSmallScreen ? 16 : 20,
    borderRadius: isSmallScreen ? 12 : 16,
    width: (width - (isSmallScreen ? 48 : 64)) / 2 - 8,
    marginBottom: isSmallScreen ? 8 : 12,
  },
  stackText: {
    fontSize: isSmallScreen ? 12 : 14,
    color: '#FFFFFF',
    marginTop: 8,
    fontWeight: '500',
  },
  callToAction: {
    marginBottom: isSmallScreen ? 24 : 32,
    alignItems: 'center',
  },
  callToActionBotao: {
    backgroundColor: '#667eea',
    paddingVertical: isSmallScreen ? 14 : 16,
    paddingHorizontal: isSmallScreen ? 32 : 40,
    borderRadius: isSmallScreen ? 12 : 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: isSmallScreen ? 12 : 16,
    elevation: Platform.OS === 'android' ? 5 : 0,
    shadowColor: Platform.OS === 'ios' ? '#667eea' : undefined,
    shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 3 } : undefined,
    shadowOpacity: Platform.OS === 'ios' ? 0.3 : undefined,
    shadowRadius: Platform.OS === 'ios' ? 6 : undefined,
  },
  callToActionTexto: {
    fontSize: isSmallScreen ? 14 : 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  botaoIcon: {
    marginRight: 8,
  },
  conecteSe: {
    marginBottom: isSmallScreen ? 24 : 32,
    alignItems: 'center',
  },
  desenvolvedorLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: isSmallScreen ? 12 : 16,
    marginTop: isSmallScreen ? 16 : 20,
    width: '100%',
  },
});

