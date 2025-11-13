import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { ScreenContainer, ContentCard, FeatureItem } from '../components/SharedComponents';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { 
  MaterialIcons, 
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5 
} from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const isSmallScreen = width < 375;
const isTablet = width > 768;
const iconSize = isSmallScreen ? 28 : isTablet ? 36 : 32;

type RootStackParamList = {
  fatecCourses: undefined;
  [key: string]: undefined;
};

export default function Educacao() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const educacaoFeatures = [
    {
      icon: <MaterialCommunityIcons name="school-outline" size={iconSize} color="#FFFFFF" />,
      title: 'Cursos Fatec Cotia',
      description: 'Programas técnicos especializados',
      gradient: ['#7c3aed', '#a855f7'] as const,
      onPress: () => navigation.navigate('fatecCourses'),
    },
    {
      icon: <MaterialCommunityIcons name="school" size={iconSize} color="#FFFFFF" />,
      title: 'Ensino Fundamental',
      description: 'Educação básica de qualidade para crianças',
      gradient: ['#f093fb', '#f5576c'] as const,
      onPress: null,
    },
    {
      icon: <MaterialIcons name="school" size={iconSize} color="#FFFFFF" />,
      title: 'Ensino Médio',
      description: 'Preparação para o futuro e vestibular',
      gradient: ['#4facfe', '#00f2fe'] as const,
      onPress: null,
    },
    {
      icon: <MaterialCommunityIcons name="book-education" size={iconSize} color="#FFFFFF" />,
      title: 'Cursos Técnicos',
      description: 'Formação profissional especializada',
      gradient: ['#43e97b', '#38f9d7'] as const,
      onPress: null,
    },
    {
      icon: <FontAwesome5 name="graduation-cap" size={iconSize - 2} color="#FFFFFF" />,
      title: 'Ensino Superior',
      description: 'Graduação e pós-graduação',
      gradient: ['#fa709a', '#fee140'] as const,
      onPress: null,
    },
    {
      icon: <Ionicons name="library" size={iconSize} color="#FFFFFF" />,
      title: 'Bibliotecas',
      description: 'Espaços de estudo e pesquisa',
      gradient: ['#667eea', '#764ba2'] as const,
      onPress: null,
    },
    {
      icon: <MaterialCommunityIcons name="laptop" size={iconSize} color="#FFFFFF" />,
      title: 'EAD',
      description: 'Educação a distância e online',
      gradient: ['#f093fb', '#f5576c'] as const,
      onPress: null,
    }
  ];

  return (
    <ScreenContainer 
      title="Educação" 
      subtitle="Invista no seu futuro através da educação"
      gradient={['#8b1538', '#1a1a2e', '#0f0f23']}
      showCustomHeader={false}
    >
      <ContentCard>
        <Text style={{
          fontSize: isSmallScreen ? 13 : 15,
          color: '#FFFFFF',
          textAlign: 'center',
          lineHeight: isSmallScreen ? 18 : 22,
          fontWeight: '400'
        }}>
          A educação é a base para um futuro melhor. Explore as oportunidades educacionais 
          disponíveis e encontre o caminho certo para seus objetivos.
        </Text>
      </ContentCard>

      <View style={{ marginTop: isSmallScreen ? 14 : 18 }}>
        {educacaoFeatures.map((feature, index) => {
          if (feature.onPress) {
            return (
              <TouchableOpacity 
                key={index}
                onPress={feature.onPress}
                activeOpacity={0.7}
              >
                <FeatureItem
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  gradient={feature.gradient}
                />
              </TouchableOpacity>
            );
          }
          
          return (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
            />
          );
        })}
      </View>
    </ScreenContainer>
  );
}