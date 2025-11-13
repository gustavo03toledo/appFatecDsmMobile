import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Dimensions,
  StatusBar,
  Platform 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 375;
const isTablet = width > 768;

interface ScreenContainerProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  gradient?: readonly [string, string, ...string[]];
  showCustomHeader?: boolean;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({ 
  children, 
  title, 
  subtitle,
  gradient = ['#0f0f23', '#1a1a2e', '#16213e'] as const,
  showCustomHeader = true
}) => {
  return (
    <LinearGradient
      colors={gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor="#0f0f23" />
      
      <ScrollView 
        contentContainerStyle={[
          styles.scrollContainer,
          !showCustomHeader && { paddingTop: 10 }
        ]}
        showsVerticalScrollIndicator={false}
        bounces={true}
        alwaysBounceVertical={false}
      >
        {/* Header Section */}
        {showCustomHeader && (
          <View style={styles.header}>
            <View style={styles.welcomeContainer}>
              <Text style={styles.title}>{title}</Text>
              {subtitle && (
                <Text style={styles.subtitle}>{subtitle}</Text>
              )}
            </View>
          </View>
        )}

        {/* Content */}
        <View style={styles.content}>
          {children}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

interface ContentCardProps {
  children: React.ReactNode;
  gradient?: readonly [string, string, ...string[]];
}

export const ContentCard: React.FC<ContentCardProps> = ({ 
  children, 
  gradient = ['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.2)'] as const
}) => {
  return (
    <LinearGradient
      colors={gradient}
      style={styles.card}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient?: readonly [string, string, ...string[]];
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ 
  icon, 
  title, 
  description,
  gradient = ['rgba(255, 255, 255, 0.18)', 'rgba(255, 255, 255, 0.08)'] as const
}) => {
  return (
    <LinearGradient
      colors={gradient}
      style={styles.featureItem}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.featureIconContainer}>
        {icon}
      </View>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </LinearGradient>
  );
};

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
    paddingTop: Platform.OS === 'ios' ? 10 : 14,
    paddingBottom: Platform.OS === 'ios' ? 20 : 24,
    paddingHorizontal: 16,
    minHeight: height,
  },
  header: {
    alignItems: 'center',
    marginBottom: isSmallScreen ? 20 : 28,
    paddingVertical: isSmallScreen ? 10 : 14,
  },
  welcomeContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: isSmallScreen ? 24 : isTablet ? 36 : 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: isSmallScreen ? 6 : 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: isSmallScreen ? 12 : 14,
    color: '#b0b0b0',
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: isSmallScreen ? 17 : 20,
    paddingHorizontal: 10,
  },
  content: {
    paddingHorizontal: 0,
    flex: 1,
  },
  card: {
    borderRadius: isSmallScreen ? 12 : 16,
    padding: isSmallScreen ? 16 : 20,
    marginBottom: isSmallScreen ? 14 : 18,
    elevation: Platform.OS === 'android' ? 3 : 0,
    shadowColor: Platform.OS === 'ios' ? '#000' : undefined,
    shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 1 } : undefined,
    shadowOpacity: Platform.OS === 'ios' ? 0.12 : undefined,
    shadowRadius: Platform.OS === 'ios' ? 3 : undefined,
  },
  featureItem: {
    borderRadius: isSmallScreen ? 12 : 16,
    padding: isSmallScreen ? 16 : 20,
    marginBottom: isSmallScreen ? 12 : 16,
    alignItems: 'center',
    elevation: Platform.OS === 'android' ? 3 : 0,
    shadowColor: Platform.OS === 'ios' ? '#000' : undefined,
    shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 1 } : undefined,
    shadowOpacity: Platform.OS === 'ios' ? 0.12 : undefined,
    shadowRadius: Platform.OS === 'ios' ? 3 : undefined,
  },
  featureIconContainer: {
    width: isSmallScreen ? 52 : isTablet ? 68 : 60,
    height: isSmallScreen ? 52 : isTablet ? 68 : 60,
    borderRadius: isSmallScreen ? 26 : isTablet ? 34 : 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: isSmallScreen ? 10 : 14,
  },
  featureTitle: {
    fontSize: isSmallScreen ? 14 : isTablet ? 17 : 15,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: isSmallScreen ? 6 : 8,
    textAlign: 'center',
    lineHeight: isSmallScreen ? 16 : 18,
  },
  featureDescription: {
    fontSize: isSmallScreen ? 11 : isTablet ? 13 : 12,
    color: 'rgba(255, 255, 255, 0.85)',
    textAlign: 'center',
    lineHeight: isSmallScreen ? 16 : 18,
    fontWeight: '400',
    paddingHorizontal: 6,
  },
});
