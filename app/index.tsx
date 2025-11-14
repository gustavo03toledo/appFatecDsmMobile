import React, { useMemo } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Dimensions,
  StatusBar,
  Platform 
} from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  MaterialIcons, 
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5 
} from '@expo/vector-icons';
import { Footer } from './components/Footer';

const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 375;
const isTablet = width > 768;

// Calculate proper spacing - focado em mobile
const containerPadding = isSmallScreen ? 16 : 20;
const buttonSpacing = isSmallScreen ? 12 : 16; // espaçamento entre botões
const availableWidth = width - (containerPadding * 2);
// Garantir que caibam exatamente 2 botões por linha em mobile
const buttonWidth = isTablet 
  ? (availableWidth - (buttonSpacing * 2)) / 3 // 3 columns for tablet
  : Math.floor((availableWidth - buttonSpacing) / 2); // 2 columns for mobile, arredondado para baixo

interface CategoryButtonProps {
  title: string;
  icon: React.ReactNode;
  href: string;
  gradient: readonly [string, string];
  description: string;
  index: number;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ 
  title, 
  icon, 
  href, 
  gradient, 
  description,
  index
}) => {
  const buttonStyle = useMemo(() => {
    const baseStyle = styles.categoryButton;
    const isEven = index % 2 === 0;
    const style: any = {
      height: baseStyle.height,
      marginBottom: baseStyle.marginBottom,
      marginRight: isTablet ? (index % 3 !== 2 ? buttonSpacing : 0) : (isEven ? buttonSpacing : 0),
      borderRadius: baseStyle.borderRadius,
      width: buttonWidth,
      maxWidth: buttonWidth, // Garantir que não ultrapasse
    };
    
    // Only add platform-specific shadow properties if they exist
    if (Platform.OS === 'android' && baseStyle.elevation !== undefined) {
      style.elevation = baseStyle.elevation;
    }
    
    if (Platform.OS === 'ios') {
      if (baseStyle.shadowColor !== undefined) style.shadowColor = baseStyle.shadowColor;
      if (baseStyle.shadowOffset !== undefined) style.shadowOffset = baseStyle.shadowOffset;
      if (baseStyle.shadowOpacity !== undefined) style.shadowOpacity = baseStyle.shadowOpacity;
      if (baseStyle.shadowRadius !== undefined) style.shadowRadius = baseStyle.shadowRadius;
    }
    
    return style;
  }, [index]);

  return (
    <Link href={href} asChild>
      <TouchableOpacity 
        style={buttonStyle}
        activeOpacity={0.7}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <LinearGradient
          colors={gradient}
          style={styles.categoryGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.iconContainer}>
            {icon}
          </View>
          <Text style={styles.categoryTitle}>{title}</Text>
          <Text style={styles.categoryDescription}>{description}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Link>
  );
};

export default function Index() {
  const categories = [
    {
      title: 'Cultura',
      icon: <MaterialIcons name="palette" size={32} color="#FFFFFF" />,
      href: '/(stack)/cultura',
      gradient: ['#667eea', '#764ba2'] as const,
      description: 'Explore arte, música e tradições'
    },
    {
      title: 'Educação',
      icon: <MaterialCommunityIcons name="school" size={32} color="#FFFFFF" />,
      href: '/(stack)/educacao',
      gradient: ['#e55d87', '#5f2c82'] as const,
      description: 'Aprenda e desenvolva habilidades'
    },
    {
      title: 'Empregos',
      icon: <FontAwesome5 name="briefcase" size={28} color="#FFFFFF" />,
      href: '/(stack)/empregos',
      gradient: ['#1976d2', '#0d47a1'] as const,
      description: 'Encontre oportunidades de trabalho'
    },
    {
      title: 'Segurança',
      icon: <Ionicons name="shield-checkmark" size={32} color="#FFFFFF" />,
      href: '/(stack)/seguranca',
      gradient: ['#388e3c', '#1b5e20'] as const,
      description: 'Proteção e bem-estar pessoal'
    }
  ];

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
          alwaysBounceVertical={false}
        >
          {/* Header Section */}
          <View style={styles.header}>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Bem-vindo ao</Text>
              <Text style={styles.appTitle}>Info FATEC</Text>
              <Text style={styles.subtitle}>Sua plataforma completa de desenvolvimento</Text>
            </View>
          </View>

          {/* Categories Grid */}
          <View style={styles.categoriesContainer}>
            <Text style={styles.sectionTitle}>Explore as Categorias</Text>
            
            <View style={styles.gridContainer}>
              {categories.map((category, index) => (
                <CategoryButton
                  key={index}
                  title={category.title}
                  icon={category.icon}
                  href={category.href}
                  gradient={category.gradient}
                  description={category.description}
                  index={index}
                />
              ))}
            </View>
          </View>

          {/* Footer */}
          <Footer />
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
    paddingHorizontal: 0,
    minHeight: height,
  },
  header: {
    alignItems: 'center',
    marginBottom: isSmallScreen ? 24 : 32,
    paddingHorizontal: isSmallScreen ? 12 : 16,
    marginTop: isSmallScreen ? 4 : 8,
  },
  welcomeContainer: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: isSmallScreen ? 14 : 17,
    color: '#a0a0a0',
    marginBottom: isSmallScreen ? 4 : 8,
    fontWeight: '400',
  },
  appTitle: {
    fontSize: isSmallScreen ? 28 : isTablet ? 44 : 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: isSmallScreen ? 8 : 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: isSmallScreen ? 12 : 16,
    color: '#b0b0b0',
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: isSmallScreen ? 18 : 24,
    paddingHorizontal: isSmallScreen ? 8 : 12,
  },
  categoriesContainer: {
    paddingHorizontal: isSmallScreen ? 12 : 16,
    marginBottom: isSmallScreen ? 20 : 28,
  },
  sectionTitle: {
    fontSize: isSmallScreen ? 20 : isTablet ? 28 : 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: isSmallScreen ? 18 : 24,
    textAlign: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  categoryButton: {
    height: isSmallScreen ? 140 : isTablet ? 180 : 160,
    marginBottom: isSmallScreen ? 12 : 16,
    borderRadius: isSmallScreen ? 14 : 18,
    elevation: Platform.OS === 'android' ? 4 : 0,
    shadowColor: Platform.OS === 'ios' ? '#000' : undefined,
    shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 2 } : undefined,
    shadowOpacity: Platform.OS === 'ios' ? 0.15 : undefined,
    shadowRadius: Platform.OS === 'ios' ? 4 : undefined,
  },
  categoryGradient: {
    padding: isSmallScreen ? 14 : 18,
    borderRadius: isSmallScreen ? 14 : 18,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    flex: 1,
  },
  iconContainer: {
    width: isSmallScreen ? 48 : isTablet ? 68 : 56,
    height: isSmallScreen ? 48 : isTablet ? 68 : 56,
    borderRadius: isSmallScreen ? 24 : isTablet ? 34 : 28,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: isSmallScreen ? 8 : 12,
  },
  categoryTitle: {
    fontSize: isSmallScreen ? 15 : isTablet ? 18 : 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: isSmallScreen ? 4 : 6,
    textAlign: 'center',
  },
  categoryDescription: {
    fontSize: isSmallScreen ? 11.5 : isTablet ? 13 : 12,
    color: 'rgba(255, 255, 255, 0.85)',
    textAlign: 'center',
    lineHeight: isSmallScreen ? 14 : 16,
    fontWeight: '400',
    paddingHorizontal: isSmallScreen ? 2 : 4,
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: isSmallScreen ? 12 : 16,
    marginTop: isSmallScreen ? 16 : 24,
    paddingBottom: Platform.OS === 'ios' ? 16 : 12,
  },
  footerText: {
    fontSize: isSmallScreen ? 12 : 14,
    color: '#a0a0a0',
    textAlign: 'center',
    fontWeight: '400',
  },
});