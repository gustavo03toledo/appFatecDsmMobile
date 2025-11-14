import React from 'react';
import { Text, View } from 'react-native';
import { ScreenContainer, ContentCard, FeatureItem } from '../components/SharedComponents';
import { 
  MaterialIcons, 
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5 
} from '@expo/vector-icons';

export default function Seguranca() {
  const segurancaFeatures = [
    {
      icon: <Ionicons name="shield-checkmark" size={32} color="#FFFFFF" />,
      title: 'Segurança Pública',
      description: 'Proteção e vigilância comunitária',
      gradient: ['#667eea', '#764ba2']
    },
    {
      icon: <MaterialCommunityIcons name="police-badge" size={32} color="#FFFFFF" />,
      title: 'Polícia',
      description: 'Contatos e serviços policiais',
      gradient: ['#f093fb', '#f5576c']
    },
    {
      icon: <MaterialIcons name="local-hospital" size={32} color="#FFFFFF" />,
      title: 'Emergências Médicas',
      description: 'SAMU e serviços de saúde de emergência',
      gradient: ['#fa709a', '#fee140']
    },
    {
      icon: <FontAwesome5 name="fire-extinguisher" size={28} color="#FFFFFF" />,
      title: 'Bombeiros',
      description: 'Serviços de emergência e resgate',
      gradient: ['#43e97b', '#38f9d7']
    },
    {
      icon: <MaterialCommunityIcons name="security" size={32} color="#FFFFFF" />,
      title: 'Segurança Digital',
      description: 'Proteção online e privacidade',
      gradient: ['#667eea', '#764ba2']
    },
    {
      icon: <Ionicons name="people" size={32} color="#FFFFFF" />,
      title: 'Segurança Comunitária',
      description: 'Programas de vizinhança segura',
      gradient: ['#f093fb', '#f5576c']
    }
  ];

  return (
    <ScreenContainer 
      title="Segurança" 
      subtitle="Proteção e bem-estar da comunidade"
      gradient={['#1b5e20', '#1a1a2e', '#0f0f23']}
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
          Sua segurança é nossa prioridade. Acesse informações sobre serviços de emergência, 
          programas de segurança e recursos de proteção disponíveis.
        </Text>
      </ContentCard>

      <View style={{ marginTop: 20 }}>
        {segurancaFeatures.map((feature, index) => (
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