import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking"; // importa o Linking

export default function PerfilScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil da Desenvolvedora</Text>
      </View>
      {/* Foto e nome */}
      <View style={styles.profileBox}>
        <Image
          source={require("../assets/ana.jpg")}
          style={styles.avatar}
        />
        <Text style={styles.name}>Ana Carolina Almeida</Text>
        <Text style={styles.title}>Desenvolvedora Front-end & Mobile</Text>
      </View>
      {/* Bio */}
      <View style={styles.bioBox}>
        <Text style={styles.bio}>
          Apaixonada por tecnologia e design. Desenvolvedora com foco em React,
          React Native e Expo, criando experiências digitais acessíveis e
          modernas. Atualmente cursando Desenvolvimento de Software e
          Multiplataforma na Fatec Cotia.
        </Text>
      </View>
      {/* Habilidades */}
      <Text style={styles.section}>🧠 Tecnologias</Text>
      <View style={styles.techBox}>
        {/* Front-end */}
        <Text style={styles.techCategory}>Front-end</Text>
        <View style={styles.techItem}>
          <Ionicons name="logo-html5" size={20} color="#e34f26" />
          <Text style={styles.techText}>HTML5</Text>
        </View>
        <View style={styles.techItem}>
          <Ionicons name="logo-css3" size={20} color="#2965f1" />
          <Text style={styles.techText}>CSS</Text>
        </View>
        <View style={styles.techItem}>
          <Ionicons name="logo-react" size={20} color="#61dafb" />
          <Text style={styles.techText}>React</Text>
        </View>

        {/* Mobile */}
        <Text style={styles.techCategory}>Mobile</Text>
        <View style={styles.techItem}>
          <Ionicons name="phone-portrait" size={20} color="#dd1e1eff" />
          <Text style={styles.techText}>React Native</Text>
        </View>

        {/* Back-end */}
        <Text style={styles.techCategory}>Back-end</Text>
        <View style={styles.techItem}>
          <Ionicons name="logo-python" size={20} color="#3776ab" />
          <Text style={styles.techText}>Python</Text>
        </View>
        <View style={styles.techItem}>
          <Ionicons name="logo-nodejs" size={20} color="#68a063" />
          <Text style={styles.techText}>Node.js</Text>
        </View>

        {/* Banco de Dados */}
        <Text style={styles.techCategory}>Banco de Dados</Text>
        <View style={styles.techItem}>
          <Ionicons name="server" size={20} color="#00758f" />
          <Text style={styles.techText}>MySQL</Text>
        </View>
        <View style={styles.techItem}>
          <Ionicons name="document-text" size={20} color="#4db6ac" />
          <Text style={styles.techText}>SQLite</Text>
        </View>
        <View style={styles.techItem}>
          <Ionicons name="cloud-outline" size={20} color="#47a248" />
          <Text style={styles.techText}>MongoDB</Text>
        </View>
      </View>
      {/* Contato */}
      <Text style={styles.section}>📬 Contato</Text>
      <View style={styles.contactBox}>
        {/* Email */}
        <TouchableOpacity
          style={styles.contactItem}
          onPress={() =>
            Linking.openURL("mailto:anaalmeida.contat00@gmail.com")
          }
        >
          <Ionicons name="mail" size={20} color="#dd1e1eff" />
          <Text style={styles.contactText}>anaalmeida.contat00@gmail.com</Text>
        </TouchableOpacity>

        {/* LinkedIn */}
        <TouchableOpacity
          style={styles.contactItem}
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/ana-carolina-almeida-bb776b230/"
            )
          }
        >
          <Ionicons name="logo-linkedin" size={20} color="#0077b5" />
          <Text style={styles.contactText}>
            linkedin.com/in/ana-carolina-almeida
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 100,
    backgroundColor: "#f9f9f9",
  },

  header: {
    backgroundColor: "#dd1e1eff",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },

  profileBox: {
    alignItems: "center",
    marginBottom: 25,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  title: {
    fontSize: 16,
    color: "#777",
  },

  bioBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  bio: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
    textAlign: "justify",
  },
  techBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  techCategory: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#dd1e1eff",
    marginTop: 10,
    marginBottom: 6,
  },
  techItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  techText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#555",
  },

  section: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
  },

  contactBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#555",
  },
});