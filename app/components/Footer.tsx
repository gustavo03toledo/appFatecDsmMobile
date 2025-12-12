import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

export const Footer: React.FC = () => {
  const team = [
    { name: 'Gustavo Toledo', route: '/desenvolvedor', gradient: ['#667eea', '#764ba2'] },
    { name: 'Guilherme Lopretti', route: '/guilherme', gradient: ['#667eea', '#764ba2'] },
    { name: 'Julia Martins', route: '/julia', gradient: ['#667eea', '#764ba2'] },
    { name: 'Luiz Pimentel', route: '/luiz', gradient: ['#667eea', '#764ba2'] },
    { name: 'Ana Carolina', route: '/ana', gradient: ['#667eea', '#764ba2'] },
  ];

  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Desenvolvido por</Text>
      <View style={styles.buttonsGrid}>
        {team.map((member, index) => (
          <Link key={index} href={member.route} asChild>
            <TouchableOpacity activeOpacity={0.8} style={styles.buttonContainer}>
              <LinearGradient
                colors={member.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.button}
              >
                <MaterialIcons name="person" size={14} color="#FFFFFF" />
                <Text style={styles.buttonText}>{member.name}</Text>
                <MaterialIcons name="arrow-forward" size={12} color="#FFFFFF" />
              </LinearGradient>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 24,
    paddingBottom: 16,
    gap: 12,
  },
  footerText: {
    fontSize: 12,
    color: '#a0a0a0',
    textAlign: 'center',
    fontWeight: '400',
    marginBottom: 4,
  },
  buttonsGrid: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    width: '100%',
  },
  buttonContainer: {
    borderRadius: 18,
    elevation: 4,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 18,
  },
  buttonText: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

