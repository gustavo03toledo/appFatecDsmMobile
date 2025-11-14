import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Dimensions,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const isSmallScreen = width < 375;
const isTablet = width > 768;

// Dados dos cursos da Fatec Cotia
const coursesData = [
  {
    id: 1,
    nome: 'Ciência de Dados',
    objetivo:
      "Forma profissionais capazes de coletar, analisar, interpretar e modelar grandes volumes de dados para apoiar decisões estratégicas em organizações, aplicando métodos estatísticos e técnicas de 'machine learning'.",
    competencias: [
      'Aplicação de algoritmos para análise de dados',
      'Desenvolvimento de sistemas de suporte à decisão',
      'Visualização de dados e identificação de padrões.',
    ],
    perfil:
      'Atua em setores como tecnologia, consultoria, pesquisa, indústrias, saúde, finanças e startups.',
    cargaHoraria: '2800 horas',
    periodo: 'Noturno',
    link: 'https://fateccotia.cps.sp.gov.br/ciencia-de-dados/',
  },
  {
    id: 2,
    nome: 'Comércio Exterior',
    objetivo:
      'Forma tecnólogos para atuar em negócios internacionais, identificando mercados, gerenciando exportação e importação, elaborando contratos e atuando em logística de mercadorias.',
    competencias: [
      'Negociação internacional',
      'Gestão cambial',
      'Coordenação de operações alfandegárias e conhecimento das relações comerciais globais.',
    ],
    perfil:
      'Indústrias, bancos, agências marítimas/aéreas, despachantes aduaneiros, corretoras, órgãos públicos e consultorias.',
    cargaHoraria: '2800 horas',
    periodo: 'Matutino',
    link: 'https://fateccotia.cps.sp.gov.br/comercio-exterior/',
  },
  {
    id: 3,
    nome: 'Desenvolvimento de Software Multiplataforma',
    objetivo:
      'Graduar tecnólogos para projetar, desenvolver e entregar software para múltiplas plataformas (web, mobile, desktop, IoT), com ênfase nos padrões e necessidades do mercado.',
    competencias: [
      'Programação web e mobile',
      'Computação em nuvem',
      'Banco de dados',
      'Segurança da informação',
      'Inteligência artificial',
      'Metodologias ágeis e experiência do usuário.',
    ],
    perfil:
      'Atua em empresas de TI, consultorias, autônomo, startups, órgãos públicos e centros de pesquisa.',
    cargaHoraria: '2800 horas',
    periodo: 'Noturno',
    link: 'https://fateccotia.cps.sp.gov.br/desenvolvimento-de-software-multiplataforma/',
  },
  {
    id: 4,
    nome: 'Design de Produto com Ênfase em Processos de Produção e Industrialização',
    objetivo:
      'Capacita profissionais para pesquisa, desenvolvimento, modelagem e criação de produtos industriais físicos, com domínio de modelagem 3D, prototipagem e design voltado à otimização de processos produtivos.',
    competencias: [
      'Desenho técnico',
      'Prototipagem',
      'Materiais',
      'Ergonomia',
      'Gestão de projetos',
      'História do design e arte',
      'Modelagem tridimensional.',
    ],
    perfil:
      'Estúdios de design, indústrias, embalagens, consultorias, institutos de pesquisa, ONGs ou atuação como autônomo.',
    cargaHoraria: '2800 horas',
    periodo: 'Matutino',
    link: 'https://fateccotia.cps.sp.gov.br/design-de-produto/',
  },
  {
    id: 5,
    nome: 'Gestão da Produção Industrial',
    objetivo:
      'Especializa profissionais para gerenciar processos produtivos, logística, planejamento, controle e inovação industrial, sempre focando em qualidade, eficiência e sustentabilidade.',
    competencias: [
      'Planejamento industrial',
      'Controle de produção',
      'Gestão de equipes',
      'Logística de suprimentos e distribuição',
      'Controle de qualidade e descarte responsável.',
    ],
    perfil:
      'Atua em indústrias de todos os portes, empresas de logística, consultorias, órgãos públicos e centros de pesquisa.',
    cargaHoraria: '2800 horas',
    periodo: 'Horário flexível',
    link: 'https://fateccotia.cps.sp.gov.br/gestao-da-producao-industrial/',
  },
  {
    id: 6,
    nome: 'Gestão Empresarial',
    objetivo:
      'Desenvolver gestores generalistas com visão estratégica, inovadora e ética para processos administrativos, financeiros, logísticos, humanos e mercadológicos, prontos para atuar em organizações de todos os portes e segmentos.',
    competencias: [
      'Planejamento, análise e diagnóstico organizacional',
      'Elaboração de estratégias',
      'Inovação',
      'Empreendedorismo',
      'Comunicação institucional',
      'Gestão por processos e finanças empresariais.',
    ],
    perfil:
      'Empresas privadas, órgãos públicos, ONGs, incubadoras, startups, consultorias ou próprio negócio.',
    cargaHoraria: '2800 horas',
    periodo: 'Não especificado',
    link: 'https://fateccotia.cps.sp.gov.br/gestao-empresarial/',
  },
];

interface CourseItem {
  id: number;
  nome: string;
  objetivo: string;
  competencias: string[];
  perfil: string;
  cargaHoraria: string;
  periodo: string;
  link: string;
}

interface CourseCardProps {
  item: CourseItem;
  isExpanded: boolean;
  onPress: () => void;
}

// Componente para cada card de curso (acordeão)
const CourseCard: React.FC<CourseCardProps> = ({ item, isExpanded, onPress }) => {
  const handleOpenLink = () => {
    Linking.openURL(item.link).catch((err) =>
      console.error('Erro ao abrir link:', err)
    );
  };

  return (
    <View style={styles.card}>
      {/* Cabeçalho clicável */}
      <TouchableOpacity
        style={styles.cardHeader}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.headerContent}>
          <Text style={styles.title}>{item.nome}</Text>
          <Text style={styles.period}>{item.periodo}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {item.objetivo}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          {isExpanded ? (
            <MaterialCommunityIcons name="close" size={isSmallScreen ? 20 : 24} color="#7c3aed" />
          ) : (
            <MaterialCommunityIcons name="chevron-down" size={isSmallScreen ? 20 : 24} color="#7c3aed" />
          )}
        </View>
      </TouchableOpacity>

      {/* Conteúdo expandido */}
      {isExpanded && (
        <View style={styles.cardBody}>
          {/* Competências */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Competências:</Text>
            {item.competencias.map((competencia, index) => (
              <Text key={index} style={styles.listItem}>
                • {competencia}
              </Text>
            ))}
          </View>

          {/* Perfil do Egresso */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Perfil do Egresso:</Text>
            <Text style={styles.sectionContent}>{item.perfil}</Text>
          </View>

          {/* Carga Horária */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Carga Horária:</Text>
            <Text style={styles.sectionContent}>{item.cargaHoraria}</Text>
          </View>

          {/* Botão Saiba Mais */}
          <TouchableOpacity
            style={styles.learnMoreButton}
            onPress={handleOpenLink}
            activeOpacity={0.85}
          >
            <Text style={styles.learnMoreButtonText}>Saiba Mais na Fatec</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

// Componente principal da tela
export default function FatecCoursesScreen() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggle = (courseId: number) => {
    setExpandedId(expandedId === courseId ? null : courseId);
  };

  return (
    <LinearGradient
      colors={['#2d1b69', '#1a1a2e', '#0f0f23']}
      style={styles.container}
    >
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.headerSubtitle}>
            Conheça os cursos técnicos oferecidos pela Fatec Cotia
          </Text>
        </View>

        <View style={styles.coursesContainer}>
          {coursesData.map((course) => (
            <CourseCard
              key={course.id}
              item={course}
              isExpanded={expandedId === course.id}
              onPress={() => handleToggle(course.id)}
            />
          ))}
        </View>

        <View style={styles.footer} />
      </ScrollView>
    </LinearGradient>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f23',
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingTop: Platform.OS === 'ios' ? 12 : 16,
    paddingBottom: Platform.OS === 'ios' ? 24 : 30,
    paddingHorizontal: isSmallScreen ? 12 : 16,
  },

  // Header da tela
  header: {
    marginBottom: isSmallScreen ? 20 : 28,
    paddingVertical: isSmallScreen ? 12 : 16,
  },

  headerSubtitle: {
    fontSize: isSmallScreen ? 14 : isTablet ? 18 : 16,
    color: '#e0e0e0',
    fontWeight: '500',
    lineHeight: isSmallScreen ? 20 : 24,
    textAlign: 'center',
  },

  // Container dos cursos
  coursesContainer: {
    marginBottom: isSmallScreen ? 12 : 16,
  },

  // Card com tema escuro
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: isSmallScreen ? 14 : 18,
    marginBottom: isSmallScreen ? 14 : 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(124, 58, 237, 0.3)',
    elevation: Platform.OS === 'android' ? 3 : 0,
    shadowColor: Platform.OS === 'ios' ? '#7c3aed' : undefined,
    shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 2 } : undefined,
    shadowOpacity: Platform.OS === 'ios' ? 0.15 : undefined,
    shadowRadius: Platform.OS === 'ios' ? 4 : undefined,
  },

  // Cabeçalho do Card (área clicável) - tema escuro
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: isSmallScreen ? 14 : 18,
    paddingVertical: isSmallScreen ? 14 : 16,
    backgroundColor: 'rgba(124, 58, 237, 0.1)',
    minHeight: isSmallScreen ? 90 : 100,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(124, 58, 237, 0.2)',
  },

  headerContent: {
    flex: 1,
    marginRight: isSmallScreen ? 10 : 14,
  },

  title: {
    fontSize: isSmallScreen ? 14 : isTablet ? 18 : 16,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: isSmallScreen ? 4 : 6,
    lineHeight: isSmallScreen ? 18 : 20,
  },

  period: {
    fontSize: isSmallScreen ? 11 : isTablet ? 13 : 12,
    color: '#a855f7',
    fontWeight: '600',
    marginBottom: isSmallScreen ? 6 : 8,
  },

  description: {
    fontSize: isSmallScreen ? 11 : isTablet ? 13 : 12,
    color: '#b0b0b0',
    lineHeight: isSmallScreen ? 15 : 18,
    fontWeight: '400',
  },

  iconContainer: {
    marginLeft: 8,
  },

  // Corpo expandido do Card - tema escuro
  cardBody: {
    paddingHorizontal: isSmallScreen ? 14 : 18,
    paddingVertical: isSmallScreen ? 14 : 16,
    backgroundColor: 'rgba(30, 27, 80, 0.5)',
  },

  // Seção dentro do corpo expandido
  section: {
    marginBottom: isSmallScreen ? 14 : 18,
  },

  sectionTitle: {
    fontSize: isSmallScreen ? 12 : isTablet ? 14 : 13,
    fontWeight: '700',
    color: '#a855f7',
    marginBottom: isSmallScreen ? 8 : 10,
  },

  sectionContent: {
    fontSize: isSmallScreen ? 11 : isTablet ? 13 : 12,
    color: '#d0d0d0',
    lineHeight: isSmallScreen ? 17 : 20,
    fontWeight: '400',
  },

  // Lista de competências
  listItem: {
    fontSize: isSmallScreen ? 11 : isTablet ? 13 : 12,
    color: '#c0c0c0',
    marginBottom: isSmallScreen ? 6 : 8,
    lineHeight: isSmallScreen ? 16 : 18,
    fontWeight: '400',
    paddingLeft: 4,
  },

  // Botão Saiba Mais
  learnMoreButton: {
    backgroundColor: '#7c3aed',
    paddingVertical: isSmallScreen ? 11 : 13,
    paddingHorizontal: 16,
    borderRadius: isSmallScreen ? 10 : 12,
    marginTop: isSmallScreen ? 12 : 14,
    alignItems: 'center',
    elevation: Platform.OS === 'android' ? 3 : 0,
    shadowColor: Platform.OS === 'ios' ? '#7c3aed' : undefined,
    shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 2 } : undefined,
    shadowOpacity: Platform.OS === 'ios' ? 0.3 : undefined,
    shadowRadius: Platform.OS === 'ios' ? 4 : undefined,
  },

  learnMoreButtonText: {
    color: '#fff',
    fontSize: isSmallScreen ? 12 : isTablet ? 14 : 13,
    fontWeight: '600',
  },

  // Footer para espaçamento
  footer: {
    height: isSmallScreen ? 16 : 20,
  },
});
