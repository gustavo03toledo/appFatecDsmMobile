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

const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 375;
const isTablet = width > 768;

// Calculate proper spacing
const containerPadding = isSmallScreen ? 12 : 16; // Reduced for small screens
const buttonSpacing = isSmallScreen ? 14 : isTablet ? 20 : 16; // gap between buttons
const availableWidth = width - (containerPadding * 2);
// Botões ocupam toda a largura disponível (um abaixo do outro)
const buttonWidth = availableWidth;

interface CategoryButtonProps {
  title: string;
  icon: React.ReactNode;
  href: string;
  gradient: readonly [string, string];
  description: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ 
  title, 
  icon, 
  href, 
  gradient, 
  description 
}) => {
  const buttonStyle = useMemo(() => {
    const baseStyle = styles.categoryButton;
    const style: any = {
      height: baseStyle.height,
      marginBottom: baseStyle.marginBottom,
      borderRadius: baseStyle.borderRadius,
      width: Math.round(buttonWidth),
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
  }, []);

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
              <Text style={styles.appTitle}>Info FATEC Cotia.</Text>
              <Text style={styles.subtitle}>Desenvolvido para Fatecanos e futuros Fatecanos</Text>
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
                />
              ))}
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Desenvolvido com ❤️ para a comunidade
            </Text>
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
    paddingHorizontal: 0,
    minHeight: height,
  },
  header: {
    alignItems: 'center',
    marginBottom: isSmallScreen ? 28 : isTablet ? 40 : 36,
    paddingHorizontal: isSmallScreen ? 12 : 16,
    marginTop: isSmallScreen ? 8 : 12,
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
    marginBottom: isSmallScreen ? 24 : isTablet ? 36 : 32,
  },
  sectionTitle: {
    fontSize: isSmallScreen ? 20 : isTablet ? 28 : 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: isSmallScreen ? 20 : isTablet ? 28 : 24,
    textAlign: 'center',
  },
  gridContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: buttonSpacing,
  },
  categoryButton: {
    width: '100%',
    height: isSmallScreen ? 140 : isTablet ? 160 : 150,
    marginBottom: 0,
    borderRadius: isSmallScreen ? 16 : 20,
    elevation: Platform.OS === 'android' ? 5 : 0,
    shadowColor: Platform.OS === 'ios' ? '#000' : undefined,
    shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 3 } : undefined,
    shadowOpacity: Platform.OS === 'ios' ? 0.2 : undefined,
    shadowRadius: Platform.OS === 'ios' ? 6 : undefined,
  },
  categoryGradient: {
    padding: isSmallScreen ? 16 : 20,
    borderRadius: isSmallScreen ? 16 : 20,
    alignItems: 'center',
    minHeight: '100%',
    justifyContent: 'center',
  },
  iconContainer: {
    width: isSmallScreen ? 52 : isTablet ? 68 : 60,
    height: isSmallScreen ? 52 : isTablet ? 68 : 60,
    borderRadius: isSmallScreen ? 26 : isTablet ? 34 : 30,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: isSmallScreen ? 10 : 14,
  },
  categoryTitle: {
    fontSize: isSmallScreen ? 14 : isTablet ? 18 : 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: isSmallScreen ? 6 : 8,
    textAlign: 'center',
  },
  categoryDescription: {
    fontSize: isSmallScreen ? 11 : isTablet ? 12 : 11.5,
    color: 'rgba(255, 255, 255, 0.85)',
    textAlign: 'center',
    lineHeight: isSmallScreen ? 15 : 17,
    fontWeight: '400',
    paddingHorizontal: isSmallScreen ? 4 : 6,
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: isSmallScreen ? 12 : 16,
    marginTop: isSmallScreen ? 20 : isTablet ? 32 : 28,
    paddingBottom: Platform.OS === 'ios' ? 16 : 12,
  },
  footerText: {
    fontSize: isSmallScreen ? 12 : 14,
    color: '#a0a0a0',
    textAlign: 'center',
    fontWeight: '400',
  },
});