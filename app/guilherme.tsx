import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Linking,
} from "react-native";

type LinkButtonProps = {
  icon: string;
  label: string;
  url: string;
};

function LinkButton({ icon, label, url }: LinkButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.linkButton,
        pressed && styles.linkButtonPressed,
      ]}
      onPress={() => Linking.openURL(url)}
    >
      <Text style={styles.linkIcon}>{icon}</Text>
      <View style={styles.linkContent}>
        <Text style={styles.linkLabel}>{label}</Text>
        <Text style={styles.linkUrl}>{url}</Text>
      </View>
      <Text style={styles.linkArrow}>›</Text>
    </Pressable>
  );
}

type ExperienceCardProps = {
  title: string;
  company: string;
  period: string;
  description: string;
  techs: string;
};

function ExperienceCard({
  title,
  company,
  period,
  description,
  techs,
}: ExperienceCardProps) {
  return (
    <View style={styles.experienceCard}>
      <Text style={styles.experienceTitle}>{title}</Text>
      <Text style={styles.experienceCompany}>{company}</Text>
      <Text style={styles.experiencePeriod}>{period}</Text>
      <Text style={styles.experienceDescription}>{description}</Text>
      <Text style={styles.experienceTechs}>💻 {techs}</Text>
    </View>
  );
}

export default function Desenvolvedor() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header com foto e nome */}
        <View style={styles.header}>
          <Image
            source={require("../assets/guilherme.jpeg")}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Guilherme Lopreti Silva</Text>
          <Text style={styles.role}>Desenvolvedor Full Stack</Text>
        </View>

        {/* Sobre */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📋 Sobre</Text>
          <Text style={styles.aboutText}>
            Fascinado por tecnologia desde a infância, encontrei na programação
            a oportunidade de transformar curiosidade em soluções práticas.
            Iniciei minha jornada na Kenzie Academy Brasil e atualmente curso
            Desenvolvimento de Software Multiplataforma na FATEC Cotia.
          </Text>
          <Text style={styles.aboutText}>
            Atuo como desenvolvedor full stack, com sólida experiência em
            desenvolvimento web e conhecimento complementar em mobile.
          </Text>
        </View>

        {/* Links */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🔗 Links</Text>
          <LinkButton
            icon="📧"
            label="Email"
            url="mailto:guilherme.llopreti@gmail.com"
          />
          <LinkButton
            icon="💼"
            label="LinkedIn"
            url="https://www.linkedin.com/in/guilherme-lopreti-silva/"
          />
          <LinkButton
            icon="🌐"
            label="Portfólio"
            url="https://guilhermelopreti.vercel.app/"
          />
          <LinkButton
            icon="💻"
            label="GitHub"
            url="https://github.com/guilopreti"
          />
        </View>

        {/* Experiência Profissional */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💼 Experiência</Text>

          <ExperienceCard
            title="Desenvolvedor Junior"
            company="Declare Cripto"
            period="Atual"
            description="Desenvolvimento front-end e back-end, com foco em JavaScript, React, HTML, CSS e Python."
            techs="JavaScript, React, HTML, CSS, Python"
          />

          <ExperienceCard
            title="Technology Consulting Intern"
            company="PwC Brasil"
            period="Maio 2024 - Outubro 2025"
            description="Desenvolvimento front-end e manutenção de soluções em Guidewire utilizando Gosu. Colaboração em equipes ágeis (Scrum) com versionamento via Git e Bitbucket."
            techs="HTML, CSS, JavaScript, Git, Bitbucket, Guidewire, Gosu"
          />

          <ExperienceCard
            title="Desenvolvedor Full-Stack"
            company="PontuaX"
            period="Dezembro 2022 - Abril 2023"
            description="Desenvolvimento de arquitetura de serviços, páginas administrativas com React Admin, funcionalidades mobile e correção de bugs."
            techs="TypeScript, React, React Admin, NodeJS, HapiJS, TypeORM, PostgreSQL, React Native"
          />

          <ExperienceCard
            title="Monitor de Ensino"
            company="Kenzie Academy Brasil"
            period="Fevereiro - Junho 2022"
            description="Assistência aos alunos, correção de entregas, suporte em dúvidas sobre programação Front-End e aplicação de testes técnicos."
            techs="JavaScript, React, HTML, CSS, Jest, Git"
          />
        </View>

        {/* Formação */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎓 Formação</Text>
          <View style={styles.educationCard}>
            <Text style={styles.educationTitle}>
              Desenvolvimento de Software Multiplataforma
            </Text>
            <Text style={styles.educationInstitution}>
              FATEC Cotia | 2023 - 2026 (Cursando)
            </Text>
          </View>
          <View style={styles.educationCard}>
            <Text style={styles.educationTitle}>
              Desenvolvimento Web Full-Stack
            </Text>
            <Text style={styles.educationInstitution}>
              Kenzie Academy Brasil | 2021 - 2022
            </Text>
          </View>
          <View style={styles.educationCard}>
            <Text style={styles.educationTitle}>Gestão Empresarial</Text>
            <Text style={styles.educationInstitution}>
              FATEC Cotia | 2018 - 2020
            </Text>
          </View>
        </View>

        {/* Certificações */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🏆 Certificações</Text>
          <View style={styles.certificationCard}>
            <Text style={styles.certificationTitle}>TOEIC - Inglês</Text>
            <Text style={styles.certificationScore}>
              Pontuação: 955 (Nível C1)
            </Text>
            <Text style={styles.certificationDetails}>
              Listening: 495 | Reading: 460
            </Text>
          </View>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🛠️ Tecnologias</Text>
          <View style={styles.skillsContainer}>
            <View style={styles.skillBadge}>
              <Text style={styles.skillText}>JavaScript</Text>
            </View>
            <View style={styles.skillBadge}>
              <Text style={styles.skillText}>TypeScript</Text>
            </View>
            <View style={styles.skillBadge}>
              <Text style={styles.skillText}>React</Text>
            </View>
            <View style={styles.skillBadge}>
              <Text style={styles.skillText}>React Native</Text>
            </View>
            <View style={styles.skillBadge}>
              <Text style={styles.skillText}>NodeJS</Text>
            </View>
            <View style={styles.skillBadge}>
              <Text style={styles.skillText}>Python</Text>
            </View>
            <View style={styles.skillBadge}>
              <Text style={styles.skillText}>Django</Text>
            </View>
            <View style={styles.skillBadge}>
              <Text style={styles.skillText}>Java</Text>
            </View>
            <View style={styles.skillBadge}>
              <Text style={styles.skillText}>PostgreSQL</Text>
            </View>
            <View style={styles.skillBadge}>
              <Text style={styles.skillText}>MongoDB</Text>
            </View>
            <View style={styles.skillBadge}>
              <Text style={styles.skillText}>Docker</Text>
            </View>
            <View style={styles.skillBadge}>
              <Text style={styles.skillText}>Git</Text>
            </View>
          </View>
        </View>

        {/* Interesses */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>✨ Interesses Pessoais</Text>
          <Text style={styles.interestsText}>
            Eclético por natureza, aprecio música, jogos, animes, filmes e
            séries. Gosto de frequentar shows, manter uma rotina de academia,
            viajar e, acima de tudo, passar tempo de qualidade com família e
            amigos.
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Desenvolvido como parte do projeto Info Fatec Cotia
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: "#E31E24",
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    marginBottom: 16,
  },
  name: {
    fontSize: 26,
    fontWeight: "800",
    color: "#FFFFFF",
    textAlign: "center",
    letterSpacing: -0.5,
  },
  role: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    marginTop: 4,
    fontWeight: "500",
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  aboutText: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
    marginBottom: 12,
  },
  linkButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  linkButtonPressed: {
    opacity: 0.7,
    backgroundColor: "#F5F5F5",
  },
  linkIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  linkContent: {
    flex: 1,
  },
  linkLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  linkUrl: {
    fontSize: 13,
    color: "#666",
  },
  linkArrow: {
    fontSize: 24,
    color: "#999",
    fontWeight: "bold",
  },
  experienceCard: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  experienceTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  experienceCompany: {
    fontSize: 15,
    fontWeight: "600",
    color: "#E31E24",
    marginBottom: 4,
  },
  experiencePeriod: {
    fontSize: 13,
    color: "#666",
    marginBottom: 12,
    fontStyle: "italic",
  },
  experienceDescription: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
    marginBottom: 12,
  },
  experienceTechs: {
    fontSize: 13,
    color: "#666",
    fontWeight: "500",
  },
  educationCard: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  educationTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  educationInstitution: {
    fontSize: 14,
    color: "#666",
  },
  certificationCard: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  certificationTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 6,
  },
  certificationScore: {
    fontSize: 15,
    fontWeight: "600",
    color: "#E31E24",
    marginBottom: 4,
  },
  certificationDetails: {
    fontSize: 13,
    color: "#666",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillBadge: {
    backgroundColor: "#E31E24",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  skillText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  interestsText: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
  },
  footer: {
    alignItems: "center",
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  footerText: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
    lineHeight: 18,
  },
});
