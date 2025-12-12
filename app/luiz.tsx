import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type SocialLink = {
  id: string;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  url: string;
  color: string;
};

export default function LuizScreen() {
  const profileData = {
    name: 'Luiz Fernando',
    title: 'Software Engineer',
    profileImage: 'https://media.licdn.com/dms/image/v2/D4D03AQG0yZ1No8zo9w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684808428931?e=2147483647&v=beta&t=gE0f_ZD2SXg-3D-YcXF1CeX7wCpnn0bZTfVh9w8qyDs',
    location: 'Cotia - São Paulo, Brasil',
  };

  const socialLinks: SocialLink[] = [
    {
      id: 'github',
      name: 'GitHub',
      icon: 'logo-github',
      url: 'https://github.com/luizpimentel0',
      color: '#262014',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: 'logo-linkedin',
      url: 'https://linkedin.com/in/luizpimentel0',
      color: '#0A66C2',
    },
    {
      id: 'email',
      name: 'Email',
      icon: 'mail',
      url: 'mailto:luiz.fpimentel0@gmail.com',
      color: '#BF2633',
    },
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'React Native', 'Next.js', 'Vue', 'SCSS'] },
    { category: 'Backend', items: ['Node.js', 'PHP', 'Laravel', 'PostgreSQL'] },
    { category: 'Cloud & Observabilidade', items: ['AWS', 'CloudFlare', 'Docker', 'DataDog', 'Grafana'] },
  ];

  const handleOpenURL = async (url: string) => {
    try {
      const canOpen = await Linking.canOpenURL(url);
      if (canOpen) {
        await Linking.openURL(url);
      }
    } catch (error) {
      console.error('Erro ao abrir URL:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Profile Image */}
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: profileData.profileImage }}
            style={styles.profileImage}
          />
        </View>

        {/* Name & Title */}
        <Text style={styles.name}>{profileData.name}</Text>
        <Text style={styles.title}>{profileData.title}</Text>

        {/* Location */}
        <View style={styles.contactInfo}>
          <View style={styles.contactItem}>
            <Ionicons name="location" size={16} color="#BF2633" />
            <Text style={styles.contactText}>{profileData.location}</Text>
          </View>
        </View>

        {/* Bio */}
        <View style={styles.bioContainer}>
          <Text style={styles.bio}>
            Olá, sou o Luiz. Sou um engenheiro de software, gosto de resolver problemas focando em usabilidade e performance. Atualmente faço parte do Grupo OLX, atuando como desenvolvedor frontend.
          </Text>
          <Text style={styles.bio}>
            Tive meu primeiro contato com a área de tecnologia em 2019, a ideia de resolver problemas utilizando tecnologia me cativou, e desde então venho buscando aprender, evoluir e experimentar coisas novas. Além de tecnologia, gosto muito de ouvir e descobrir músicas novas, jogar basquete e treinar.
          </Text>
        </View>

        {/* Social Links */}
        <View style={styles.socialLinksContainer}>
          <Text style={styles.sectionTitle}>Conecte-se Comigo</Text>
          <View style={styles.socialLinks}>
            {socialLinks.map((link) => (
              <TouchableOpacity
                key={link.id}
                style={[styles.socialButton, { borderColor: link.color }]}
                onPress={() => handleOpenURL(link.url)}
              >
                <Ionicons name={link.icon} size={24} color={link.color} />
                <Text style={[styles.socialButtonText, { color: link.color }]}>{link.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Skills */}
        <View style={styles.skillsContainer}>
          <Text style={styles.sectionTitle}>Linguagens e Ferramentas</Text>
          {skills.map((skillGroup, index) => (
            <View key={index} style={styles.skillGroup}>
              <Text style={styles.skillCategory}>{skillGroup.category}</Text>
              <View style={styles.skillTags}>
                {skillGroup.items.map((skill, skillIndex) => (
                  <View key={skillIndex} style={styles.skillTag}>
                    <Text style={styles.skillTagText}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* CTA Button */}
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => handleOpenURL('https://github.com/luizpimentel0')}
        >
          <Ionicons name="open-outline" size={20} color="#FFFFFF" />
          <Text style={styles.ctaButtonText}>Visualizar Portfólio Completo</Text>
        </TouchableOpacity>

        <View style={styles.footerSpacing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  scrollContent: {
    paddingBottom: 32,
  },
  profileImageContainer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#BF2633',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#262014',
    textAlign: 'center',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#BF2633',
    textAlign: 'center',
    marginBottom: 20,
  },
  contactInfo: {
    paddingHorizontal: 20,
    marginBottom: 24,
    gap: 12,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  contactText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  bioContainer: {
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  bio: {
    fontSize: 14,
    color: '#262014',
    lineHeight: 22,
    fontWeight: '400',
    marginBottom: 16,
    textAlign: 'justify',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#262014',
    marginBottom: 16,
    letterSpacing: -0.3,
  },
  socialLinksContainer: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  socialLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  socialButton: {
    flex: 1,
    minWidth: '46%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  socialButtonText: {
    fontSize: 13,
    fontWeight: '600',
  },
  skillsContainer: {
    paddingHorizontal: 20,
    marginBottom: 28,
  },
  skillGroup: {
    marginBottom: 16,
  },
  skillCategory: {
    fontSize: 14,
    fontWeight: '700',
    color: '#262014',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    opacity: 0.7,
  },
  skillTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillTag: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: '#FFE5E7',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#BF2633',
  },
  skillTagText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#BF2633',
  },
  ctaButton: {
    marginHorizontal: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#BF2633',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    shadowColor: '#BF2633',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  footerSpacing: {
    height: 24,
  },
});
