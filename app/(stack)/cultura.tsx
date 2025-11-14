import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScreenContainer, ContentCard, FeatureItem } from '../components/SharedComponents';
import { 
  MaterialIcons, 
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5 
} from '@expo/vector-icons';

export default function Cultura() {
  const culturaFeatures = [
    {
      icon: <MaterialIcons name="palette" size={32} color="#FFFFFF" />,
      title: 'Arte Visual',
      description: 'Explore pinturas, esculturas e arte contemporânea',
      gradient: ['#667eea', '#764ba2']
    },
    {
      icon: <MaterialCommunityIcons name="music" size={32} color="#FFFFFF" />,
      title: 'Música',
      description: 'Descubra diferentes gêneros e artistas locais',
      gradient: ['#f093fb', '#f5576c']
    },
    {
      icon: <MaterialIcons name="theater-comedy" size={32} color="#FFFFFF" />,
      title: 'Teatro',
      description: 'Peças, shows e eventos culturais ao vivo',
      gradient: ['#4facfe', '#00a2aaff']
    },
    {
      icon: <FontAwesome5 name="book-open" size={28} color="#FFFFFF" />,
      title: 'Literatura',
      description: 'Livros, poesia e eventos literários',
      gradient: ['#43e97b', '#068069ff']
    },
    {
      icon: <Ionicons name="camera" size={32} color="#FFFFFF" />,
      title: 'Fotografia',
      description: 'Exposições e workshops de fotografia',
      gradient: ['#fa709a', '#fee140']
    },
    {
      icon: <MaterialCommunityIcons name="dance" size={32} color="#FFFFFF" />,
      title: 'Dança',
      description: 'Aulas, apresentações e festivais de dança',
      gradient: ['#667eea', '#764ba2']
    },
    {
      icon: <MaterialIcons name="movie" size={32} color="#FFFFFF" />,
      title: 'Cinema',
      description: 'Festivais, mostras e sessões especiais',
      gradient: ['#f093fb', '#f5576c']
    },
    {
      icon: <MaterialCommunityIcons name="museum" size={32} color="#FFFFFF" />,
      title: 'Museus',
      description: 'Exposições permanentes e temporárias',
      gradient: ['#4facfe', '#00f2fe']
    },
    {
      icon: <FontAwesome5 name="hand-sparkles" size={28} color="#FFFFFF" />,
      title: 'Artesanato',
      description: 'Tradições artesanais e feiras locais',
      gradient: ['#43e97b', '#38f9d7']
    },
    {
      icon: <MaterialCommunityIcons name="food" size={32} color="#FFFFFF" />,
      title: 'Gastronomia',
      description: 'Culinária tradicional e eventos gastronômicos',
      gradient: ['#fa709a', '#fee140']
    },
    {
      icon: <Ionicons name="calendar" size={32} color="#FFFFFF" />,
      title: 'Festivais',
      description: 'Festivais culturais e celebrações',
      gradient: ['#667eea', '#764ba2']
    },
    {
      icon: <MaterialIcons name="history" size={32} color="#FFFFFF" />,
      title: 'Patrimônio',
      description: 'Patrimônio histórico e cultural',
      gradient: ['#f093fb', '#f5576c']
    }
  ];

  return (
    <ScreenContainer 
      title="Cultura" 
      subtitle="Explore o rico universo cultural da nossa comunidade"
      gradient={['#2d1b69', '#1a1a2e', '#0f0f23']}
      showCustomHeader={false}
    >
      <ContentCard>
        <Text style={styles.introText}>
          Descubra eventos, artistas e tradições que fazem parte da nossa identidade cultural. 
          Uma jornada através das artes, música, literatura e muito mais.
        </Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <MaterialCommunityIcons name="calendar-star" size={24} color="#FFFFFF" />
            <Text style={styles.statText}>Eventos</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialIcons name="people" size={24} color="#FFFFFF" />
            <Text style={styles.statText}>Artistas</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="location" size={24} color="#FFFFFF" />
            <Text style={styles.statText}>Locais</Text>
          </View>
        </View>
      </ContentCard>

      <View style={styles.featuresContainer}>
        {culturaFeatures.map((feature, index) => (
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

const styles = StyleSheet.create({
  introText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '300',
    marginBottom: 20
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)'
  },
  statItem: {
    alignItems: 'center',
    flex: 1
  },
  statText: {
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 8,
    fontWeight: '500'
  },
  featuresContainer: {
    marginTop: 20
  }
});