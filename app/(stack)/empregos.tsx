import React from 'react';
import { Text, View } from 'react-native';
import { ScreenContainer, ContentCard, FeatureItem } from '../components/SharedComponents';
import { 
  MaterialIcons, 
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5 
} from '@expo/vector-icons';

export default function Empregos() {
  const empregoFeatures = [
    {
      icon: <FontAwesome5 name="briefcase" size={28} color="#FFFFFF" />,
      title: 'Vagas Disponíveis',
      description: 'Encontre oportunidades de trabalho',
      gradient: ['#667eea', '#764ba2']
    },
    {
      icon: <MaterialCommunityIcons name="account-tie" size={32} color="#FFFFFF" />,
      title: 'Recrutamento',
      description: 'Processos seletivos e entrevistas',
      gradient: ['#f093fb', '#f5576c']
    },
    {
      icon: <MaterialIcons name="work" size={32} color="#FFFFFF" />,
      title: 'Estágios',
      description: 'Oportunidades para estudantes',
      gradient: ['#fa709a', '#fee140']
    },
    {
      icon: <MaterialCommunityIcons name="handshake" size={32} color="#FFFFFF" />,
      title: 'Freelance',
      description: 'Trabalhos independentes e projetos',
      gradient: ['#43e97b', '#38f9d7']
    },
    {
      icon: <Ionicons name="business" size={32} color="#FFFFFF" />,
      title: 'Empreendedorismo',
      description: 'Suporte para novos negócios',
      gradient: ['#667eea', '#764ba2']
    },
    {
      icon: <MaterialCommunityIcons name="school" size={32} color="#FFFFFF" />,
      title: 'Capacitação',
      description: 'Cursos e treinamentos profissionais',
      gradient: ['#f093fb', '#f5576c']
    }
  ];

  return (
    <ScreenContainer 
      title="Empregos" 
      subtitle="Conecte-se com oportunidades de trabalho"
      gradient={['#0d47a1', '#1a1a2e', '#0f0f23']}
      showCustomHeader={false}
    >
      <ContentCard>
        <Text style={{
          fontSize: 16,
          color: '#FFFFFF',
          textAlign: 'center',
          lineHeight: 24,
          fontWeight: '300'
        }}>
          Encontre a oportunidade ideal para sua carreira. Explore vagas, 
          processos seletivos e ferramentas para desenvolvimento profissional.
        </Text>
      </ContentCard>

      <View style={{ marginTop: 20 }}>
        {empregoFeatures.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            gradient={feature.gradient}
          />
        ))}
      </View>
    </ScreenContainer>
  );
}