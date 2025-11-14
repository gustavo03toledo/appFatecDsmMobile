import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Link } from 'expo-router';

export const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Desenvolvido por{' '}
        <Link href="/desenvolvedor" asChild>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.footerLink}>Gustavo Toledo</Text>
          </TouchableOpacity>
        </Link>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 24,
    paddingBottom: 16,
  },
  footerText: {
    fontSize: 14,
    color: '#a0a0a0',
    textAlign: 'center',
    fontWeight: '400',
  },
  footerLink: {
    fontSize: 14,
    color: '#667eea',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

