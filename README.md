# 📱 Lab Mobile - App Fatec DSM

> Aplicativo mobile desenvolvido com React Native e Expo, focado em fornecer informações sobre cultura, educação, empregos e segurança, com destaque para os cursos da Fatec Cotia.

[![React Native](https://img.shields.io/badge/React_Native-0.81.5-61DAFB?style=flat&logo=react)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-~54.0.20-000020?style=flat&logo=expo)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Assistente Virtual com IA](#-assistente-virtual-com-ia)
- [Arquitetura](#-arquitetura)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Telas e Conteúdos](#-telas-e-conteúdos)
- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Responsividade](#-responsividade)
- [Paleta de Cores](#-paleta-de-cores)

## 🎯 Sobre o Projeto

O **Lab Mobile** é um aplicativo desenvolvido como projeto acadêmico para a Fatec (Faculdade de Tecnologia), oferecendo uma plataforma centralizada com informações sobre:

- 🎨 **Cultura**: Arte, música, teatro, cinema e patrimônio cultural
- 📚 **Educação**: Cursos técnicos, ensino superior, bibliotecas e educação a distância
- 💼 **Empregos**: Vagas, estágios, freelance e capacitação profissional
- 🛡️ **Segurança**: Serviços de emergência, segurança pública e digital

### Destaque Especial: Cursos Fatec Cotia

O app possui uma seção dedicada aos **6 cursos tecnológicos** oferecidos pela Fatec Cotia, com informações detalhadas sobre cada programa.

## 🤖 Assistente Virtual com IA

O aplicativo conta com um **assistente virtual inteligente** integrado ao Google Gemini AI, disponível em todas as telas através de um botão flutuante (FAB). O assistente oferece:

### Funcionalidades do Chat

- 💬 **Conversação em Linguagem Natural**: Responde perguntas sobre cursos, categorias do app e informações da Fatec Cotia
- 🧭 **Navegação Inteligente**: Detecta intenções e oferece botões de acesso rápido às seções do app
- 💾 **Histórico Persistente**: Mantém o contexto da conversa durante toda a sessão
- ⚡ **Respostas Rápidas**: Utiliza o modelo Gemini 2.5 Flash otimizado para velocidade
- 🛡️ **Tratamento Robusto de Erros**: Mensagens claras para diferentes cenários (API key expirada, limite de requisições, etc.)

### Exemplos de Interação

**Consultar Cursos**:
```
Usuário: "Quais cursos a Fatec oferece no período noturno?"
Assistente: "A Fatec Cotia oferece 2 cursos no período noturno:
1. 🎓 Ciência de Dados
2. 💻 Desenvolvimento de Software Multiplataforma

Ambos têm 2800 horas. Gostaria de ver mais detalhes?"
[Botão: Ir para esta seção]
```

**Navegação Contextual**:
```
Usuário: "Quero ver informações sobre cultura"
Assistente: "A seção de Cultura oferece informações sobre arte, música, 
teatro, cinema e patrimônio cultural. Vou te direcionar para lá!"
[Botão: Ir para esta seção] → Navega automaticamente
```

### Configuração

Para utilizar o assistente, é necessário configurar uma API Key do Google Gemini:

1. Obtenha sua chave em: https://aistudio.google.com/app/apikey
2. Crie um arquivo `.env` na raiz do projeto
3. Adicione: `EXPO_PUBLIC_GEMINI_API_KEY=sua_chave_aqui`
4. Reinicie o servidor

📖 **Documentação Completa**: Consulte [CHAT_ASSISTANT_DOCS.md](./CHAT_ASSISTANT_DOCS.md) para informações detalhadas sobre arquitetura, funcionalidades, integração com a API e troubleshooting.

## 🏗️ Arquitetura

### Padrão de Navegação

O aplicativo utiliza **Expo Router** com navegação em pilha (Stack Navigator), seguindo o padrão de roteamento baseado em arquivos:

```
app/
├── index.tsx                    # Tela inicial (Home)
├── _layout.tsx                  # Layout raiz com SafeAreaProvider
└── (stack)/
    ├── _layout.tsx              # Configuração do Stack Navigator
    ├── cultura.tsx              # Tela de Cultura
    ├── educacao.tsx             # Tela de Educação
    ├── empregos.tsx             # Tela de Empregos
    ├── seguranca.tsx            # Tela de Segurança
    └── fatecCourses.tsx         # Tela de Cursos Fatec
```

### Componentes Reutilizáveis

Localizado em `app/components/`:

1. **SharedComponents.tsx**:
   - **ScreenContainer**: Container principal com gradiente de fundo e header
   - **ContentCard**: Card de conteúdo informativo com fundo semi-transparente
   - **FeatureItem**: Item de recurso com ícone, título, descrição e gradiente

2. **GlobalChatAssistant.tsx**: Assistente virtual com IA integrado ao Google Gemini
   - Componente persistente disponível em todas as telas
   - Interface de chat moderna com tema escuro
   - Sistema de navegação inteligente
   - Tratamento robusto de erros da API

### Design Pattern

- **Functional Components** com React Hooks
- **TypeScript** para type safety
- **Styled Components** usando StyleSheet do React Native
- **Responsive Design** com breakpoints para mobile, tablet e desktop
- **Memoization** com `useMemo` para otimização de performance

## 📁 Estrutura de Pastas

```
my-app/
├── app/
│   ├── (stack)/
│   │   ├── _layout.tsx              # Stack Navigator config
│   │   ├── cultura.tsx              # 12 features culturais
│   │   ├── educacao.tsx             # 7 categorias educacionais
│   │   ├── empregos.tsx             # 6 recursos de emprego
│   │   ├── seguranca.tsx            # 6 serviços de segurança
│   │   └── fatecCourses.tsx         # 6 cursos com accordion
│   ├── components/
│   │   ├── SharedComponents.tsx     # Componentes reutilizáveis
│   │   └── GlobalChatAssistant.tsx  # Assistente virtual com IA
│   ├── _layout.tsx                  # Root layout + Chat Assistant
│   └── index.tsx                    # Home screen
├── assets/                          # Imagens e recursos estáticos
├── app.json                         # Configuração do Expo
├── babel.config.js                  # Configuração Babel
├── package.json                     # Dependências
├── tsconfig.json                    # Configuração TypeScript
└── index.ts                         # Entry point
```

## 📱 Telas e Conteúdos

### 🏠 Home (index.tsx)

**Título**: "Bem-vindo ao Lab Mobile"  
**Subtítulo**: "Sua plataforma completa de desenvolvimento"

#### Botões Principais (Grid 2x2):

| Botão | Ícone | Gradiente | Descrição |
|-------|-------|-----------|-----------|
| **Cultura** | 🎨 `palette` | Roxo (#667eea → #764ba2) | "Explore arte, música e tradições" |
| **Educação** | 🎓 `school` | Rosa/Roxo (#e55d87 → #5f2c82) | "Aprenda e desenvolva habilidades" |
| **Empregos** | 💼 `briefcase` | Azul (#1976d2 → #0d47a1) | "Encontre oportunidades de trabalho" |
| **Segurança** | 🛡️ `shield-checkmark` | Verde (#388e3c → #1b5e20) | "Proteção e bem-estar pessoal" |

**Características**:
- Background com gradiente escuro (#0f0f23, #1a1a2e, #16213e)
- Layout responsivo (2 colunas mobile, 3 colunas tablet)
- Botões com altura adaptável (150-180px)
- Animações de toque com `activeOpacity={0.7}`

---

### 🎨 Cultura (cultura.tsx)

**Título**: "Cultura"  
**Subtítulo**: "Explore o rico universo cultural da nossa comunidade"

#### Card Informativo:
**Texto**: "Descubra eventos, artistas e tradições que fazem parte da nossa identidade cultural. Uma jornada através das artes, música, literatura e muito mais."

#### Estatísticas:
- 🎭 **50+** Eventos Culturais
- 🎨 **200+** Artistas Locais

#### 12 Features Culturais:

| # | Título | Descrição | Ícone |
|---|--------|-----------|-------|
| 1 | **Arte Visual** | "Explore pinturas, esculturas e arte contemporânea" | 🎨 `palette` |
| 2 | **Música** | "Descubra diferentes gêneros e artistas locais" | 🎵 `music` |
| 3 | **Teatro** | "Peças, shows e eventos culturais ao vivo" | 🎭 `theater-comedy` |
| 4 | **Literatura** | "Livros, poesia e eventos literários" | 📖 `book-open` |
| 5 | **Fotografia** | "Exposições e workshops de fotografia" | 📷 `camera` |
| 6 | **Dança** | "Aulas, apresentações e festivais de dança" | 💃 `dance` |
| 7 | **Cinema** | "Festivais, mostras e sessões especiais" | 🎬 `movie` |
| 8 | **Museus** | "Exposições permanentes e temporárias" | 🏛️ `museum` |
| 9 | **Artesanato** | "Tradições artesanais e feiras locais" | ✨ `hand-sparkles` |
| 10 | **Gastronomia** | "Culinária tradicional e eventos gastronômicos" | 🍽️ `food` |
| 11 | **Festivais** | "Festivais culturais e celebrações" | 📅 `calendar` |
| 12 | **Patrimônio** | "Patrimônio histórico e cultural" | 🏺 `history` |

**Gradiente de fundo**: #2d1b69 → #1a1a2e → #0f0f23

---

### 📚 Educação (educacao.tsx)

**Título**: "Educação"  
**Subtítulo**: "Invista no seu futuro através da educação"

#### Card Informativo:
**Texto**: "A educação é a base para um futuro melhor. Explore as oportunidades educacionais disponíveis e encontre o caminho certo para seus objetivos."

#### 7 Categorias Educacionais:

| # | Título | Descrição | Ícone | Ação |
|---|--------|-----------|-------|------|
| 1 | **Cursos Fatec Cotia** | "Programas técnicos especializados" | 🏫 `school-outline` | ➡️ Navega para `fatecCourses` |
| 2 | **Ensino Fundamental** | "Educação básica de qualidade para crianças" | 🎒 `school` | - |
| 3 | **Ensino Médio** | "Preparação para o futuro e vestibular" | 📚 `school` | - |
| 4 | **Cursos Técnicos** | "Formação profissional especializada" | 📖 `book-education` | - |
| 5 | **Ensino Superior** | "Graduação e pós-graduação" | 🎓 `graduation-cap` | - |
| 6 | **Bibliotecas** | "Espaços de estudo e pesquisa" | 📚 `library` | - |
| 7 | **EAD** | "Educação a distância e online" | 💻 `laptop` | - |

**Gradiente de fundo**: #8b1538 → #1a1a2e → #0f0f23

**Destaque**: O primeiro item é clicável e direciona para a tela de Cursos Fatec

---

### 🎓 Cursos Fatec Cotia (fatecCourses.tsx)

**Título**: (Definido no header do Stack Navigator)  
**Subtítulo**: "Conheça os cursos técnicos oferecidos pela Fatec Cotia"

#### Layout de Accordion

Cards expansíveis com tema escuro, exibindo informações detalhadas de cada curso.

#### 6 Cursos Tecnológicos:

##### 1️⃣ **Ciência de Dados**
- **Período**: Noturno
- **Carga Horária**: 2800 horas
- **Objetivo**: "Forma profissionais capazes de coletar, analisar, interpretar e modelar grandes volumes de dados para apoiar decisões estratégicas em organizações, aplicando métodos estatísticos e técnicas de 'machine learning'."
- **Competências**:
  - Aplicação de algoritmos para análise de dados
  - Desenvolvimento de sistemas de suporte à decisão
  - Visualização de dados e identificação de padrões
- **Perfil do Egresso**: "Atua em setores como tecnologia, consultoria, pesquisa, indústrias, saúde, finanças e startups."
- **Link**: [fateccotia.cps.sp.gov.br/ciencia-de-dados](https://fateccotia.cps.sp.gov.br/ciencia-de-dados/)

##### 2️⃣ **Comércio Exterior**
- **Período**: Matutino
- **Carga Horária**: 2800 horas
- **Objetivo**: "Forma tecnólogos para atuar em negócios internacionais, identificando mercados, gerenciando exportação e importação, elaborando contratos e atuando em logística de mercadorias."
- **Competências**:
  - Negociação internacional
  - Gestão cambial
  - Coordenação de operações alfandegárias e conhecimento das relações comerciais globais
- **Perfil do Egresso**: "Indústrias, bancos, agências marítimas/aéreas, despachantes aduaneiros, corretoras, órgãos públicos e consultorias."
- **Link**: [fateccotia.cps.sp.gov.br/comercio-exterior](https://fateccotia.cps.sp.gov.br/comercio-exterior/)

##### 3️⃣ **Desenvolvimento de Software Multiplataforma**
- **Período**: Noturno
- **Carga Horária**: 2800 horas
- **Objetivo**: "Graduar tecnólogos para projetar, desenvolver e entregar software para múltiplas plataformas (web, mobile, desktop, IoT), com ênfase nos padrões e necessidades do mercado."
- **Competências**:
  - Programação web e mobile
  - Computação em nuvem
  - Banco de dados
  - Segurança da informação
  - Inteligência artificial
  - Metodologias ágeis e experiência do usuário
- **Perfil do Egresso**: "Atua em empresas de TI, consultorias, autônomo, startups, órgãos públicos e centros de pesquisa."
- **Link**: [fateccotia.cps.sp.gov.br/desenvolvimento-de-software-multiplataforma](https://fateccotia.cps.sp.gov.br/desenvolvimento-de-software-multiplataforma/)

##### 4️⃣ **Design de Produto com Ênfase em Processos de Produção e Industrialização**
- **Período**: Matutino
- **Carga Horária**: 2800 horas
- **Objetivo**: "Capacita profissionais para pesquisa, desenvolvimento, modelagem e criação de produtos industriais físicos, com domínio de modelagem 3D, prototipagem e design voltado à otimização de processos produtivos."
- **Competências**:
  - Desenho técnico
  - Prototipagem
  - Materiais
  - Ergonomia
  - Gestão de projetos
  - História do design e arte
  - Modelagem tridimensional
- **Perfil do Egresso**: "Estúdios de design, indústrias, embalagens, consultorias, institutos de pesquisa, ONGs ou atuação como autônomo."
- **Link**: [fateccotia.cps.sp.gov.br/design-de-produto](https://fateccotia.cps.sp.gov.br/design-de-produto/)

##### 5️⃣ **Gestão da Produção Industrial**
- **Período**: Horário flexível
- **Carga Horária**: 2800 horas
- **Objetivo**: "Especializa profissionais para gerenciar processos produtivos, logística, planejamento, controle e inovação industrial, sempre focando em qualidade, eficiência e sustentabilidade."
- **Competências**:
  - Planejamento industrial
  - Controle de produção
  - Gestão de equipes
  - Logística de suprimentos e distribuição
  - Controle de qualidade e descarte responsável
- **Perfil do Egresso**: "Atua em indústrias de todos os portes, empresas de logística, consultorias, órgãos públicos e centros de pesquisa."
- **Link**: [fateccotia.cps.sp.gov.br/gestao-da-producao-industrial](https://fateccotia.cps.sp.gov.br/gestao-da-producao-industrial/)

##### 6️⃣ **Gestão Empresarial**
- **Período**: Não especificado
- **Carga Horária**: 2800 horas
- **Objetivo**: "Desenvolver gestores generalistas com visão estratégica, inovadora e ética para processos administrativos, financeiros, logísticos, humanos e mercadológicos, prontos para atuar em organizações de todos os portes e segmentos."
- **Competências**:
  - Planejamento, análise e diagnóstico organizacional
  - Elaboração de estratégias
  - Inovação
  - Empreendedorismo
  - Comunicação institucional
  - Gestão por processos e finanças empresariais
- **Perfil do Egresso**: "Empresas privadas, órgãos públicos, ONGs, incubadoras, startups, consultorias ou próprio negócio."
- **Link**: [fateccotia.cps.sp.gov.br/gestao-empresarial](https://fateccotia.cps.sp.gov.br/gestao-empresarial/)

#### Funcionalidades dos Cards:
- **Accordion expansível**: Apenas um curso aberto por vez
- **Ícone de estado**: 
  - 🔽 `chevron-down` quando fechado
  - ✕ `close` quando aberto
- **Botão "Saiba Mais na Fatec"**: Abre o link oficial do curso no navegador
- **Tema escuro**: Cards semi-transparentes com bordas roxas
- **Cores**:
  - Background card: `rgba(255,255,255,0.08)`
  - Header: `rgba(124,58,237,0.1)`
  - Border: `rgba(124,58,237,0.3)`
  - Texto período: `#a855f7`

**Gradiente de fundo**: #2d1b69 → #1a1a2e → #0f0f23

---

### 💼 Empregos (empregos.tsx)

**Título**: "Empregos"  
**Subtítulo**: "Conecte-se com oportunidades de trabalho"

#### Card Informativo:
**Texto**: "Encontre a oportunidade ideal para sua carreira. Explore vagas, processos seletivos e ferramentas para desenvolvimento profissional."

#### 6 Recursos de Emprego:

| # | Título | Descrição | Ícone |
|---|--------|-----------|-------|
| 1 | **Vagas Disponíveis** | "Encontre oportunidades de trabalho" | 💼 `briefcase` |
| 2 | **Recrutamento** | "Processos seletivos e entrevistas" | 👔 `account-tie` |
| 3 | **Estágios** | "Oportunidades para estudantes" | 👨‍💼 `work` |
| 4 | **Freelance** | "Trabalhos independentes e projetos" | 🤝 `handshake` |
| 5 | **Empreendedorismo** | "Suporte para novos negócios" | 🏢 `business` |
| 6 | **Capacitação** | "Cursos e treinamentos profissionais" | 🎓 `school` |

**Gradiente de fundo**: #0d47a1 → #1a1a2e → #0f0f23

---

### 🛡️ Segurança (seguranca.tsx)

**Título**: "Segurança"  
**Subtítulo**: "Proteção e bem-estar da comunidade"

#### Card Informativo:
**Texto**: "Sua segurança é nossa prioridade. Acesse informações sobre serviços de emergência, programas de segurança e recursos de proteção disponíveis."

#### 6 Serviços de Segurança:

| # | Título | Descrição | Ícone |
|---|--------|-----------|-------|
| 1 | **Segurança Pública** | "Proteção e vigilância comunitária" | 🛡️ `shield-checkmark` |
| 2 | **Polícia** | "Contatos e serviços policiais" | 👮 `police-badge` |
| 3 | **Emergências Médicas** | "SAMU e serviços de saúde de emergência" | 🏥 `local-hospital` |
| 4 | **Bombeiros** | "Serviços de emergência e resgate" | 🧯 `fire-extinguisher` |
| 5 | **Segurança Digital** | "Proteção online e privacidade" | 🔒 `security` |
| 6 | **Segurança Comunitária** | "Programas de vizinhança segura" | 👥 `people` |

**Gradiente de fundo**: #1b5e20 → #1a1a2e → #0f0f23

---

## 🛠️ Tecnologias

### Core
- **React Native** 0.81.5 - Framework mobile multiplataforma
- **React** 19.1.0 - Biblioteca JavaScript
- **TypeScript** 5.9.2 - Superset JavaScript com tipagem
- **Expo** ~54.0.20 - Plataforma de desenvolvimento

### Navegação
- **Expo Router** ^6.0.13 - Roteamento baseado em arquivos
- **React Native Screens** ^4.18.0 - Otimização de telas

### UI & Estilo
- **Expo Linear Gradient** ^14.0.1 - Gradientes lineares
- **@expo/vector-icons** ^14.0.4 - Biblioteca de ícones (MaterialIcons, MaterialCommunityIcons, Ionicons, FontAwesome5)
- **React Native Safe Area Context** ^5.6.1 - Suporte a áreas seguras

### Utilitários
- **Expo Linking** ^8.0.8 - Deep linking e abertura de URLs
- **Expo Constants** ^18.0.10 - Constantes do sistema
- **Expo Status Bar** ~3.0.8 - Controle da barra de status

### Build & Dev
- **Babel Preset Expo** ~54.0.0 - Configuração Babel
- **React Native Web** ^0.21.0 - Suporte para web

### AI & Machine Learning
- **@google/generative-ai** Latest - SDK do Google Gemini para integração com IA

## 📦 Instalação

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn
- Expo CLI (instalado globalmente)
- **API Key do Google Gemini** (para usar o assistente virtual)

### Passo a Passo

```bash
# 1. Clone o repositório
git clone https://github.com/gustavo03toledo/appFatecDsmMobile.git

# 2. Entre na pasta do projeto
cd appFatecDsmMobile

# 3. Instale as dependências
npm install
# ou
yarn install

# 4. Configure a API Key do Gemini (para usar o chat)
# Obtenha em: https://aistudio.google.com/app/apikey
# Crie um arquivo .env na raiz e adicione:
# EXPO_PUBLIC_GEMINI_API_KEY=sua_chave_aqui

# 5. Inicie o projeto
npm start
# ou
yarn start
```

### Executar em Dispositivos

```bash
# Android
npm run android

# iOS (apenas Mac)
npm run ios

# Web
npm run web
```

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Inicia o Metro Bundler do Expo |
| `npm run android` | Executa no emulador/dispositivo Android |
| `npm run ios` | Executa no simulador/dispositivo iOS |
| `npm run web` | Executa no navegador web |

## 📐 Responsividade

O aplicativo possui 3 breakpoints principais:

### Small Screen (width < 375px)
- Padding reduzido: 12px
- Fonte reduzida
- Ícones menores: 20px
- Altura de botões: 150px
- Grid: 2 colunas

### Normal Screen (375px - 768px)
- Padding: 16px
- Fonte normal
- Ícones: 24-32px
- Altura de botões: 160px
- Grid: 2 colunas

### Tablet (width > 768px)
- Padding: 16px
- Fonte aumentada
- Ícones maiores: 32-36px
- Altura de botões: 180px
- Grid: 3 colunas

## 🎨 Paleta de Cores

### Cores Principais

| Cor | Hex | Uso |
|-----|-----|-----|
| **Azul Profundo** | `#0f0f23` | Background principal |
| **Azul Escuro** | `#1a1a2e` | Background secundário |
| **Azul Médio** | `#16213e` | Background terciário |
| **Roxo Vibrante** | `#7c3aed` | Destaque principal |
| **Roxo Claro** | `#a855f7` | Destaque secundário |
| **Branco** | `#ffffff` | Texto principal |
| **Cinza Claro** | `#e0e0e0` | Texto secundário |

### Gradientes por Tela

| Tela | Gradiente |
|------|-----------|
| **Home** | `#0f0f23` → `#1a1a2e` → `#16213e` |
| **Cultura** | `#2d1b69` → `#1a1a2e` → `#0f0f23` |
| **Educação** | `#8b1538` → `#1a1a2e` → `#0f0f23` |
| **Empregos** | `#0d47a1` → `#1a1a2e` → `#0f0f23` |
| **Segurança** | `#1b5e20` → `#1a1a2e` → `#0f0f23` |
| **Fatec Courses** | `#2d1b69` → `#1a1a2e` → `#0f0f23` |

### Gradientes dos Botões/Cards

```typescript
// Roxo
['#667eea', '#764ba2']

// Rosa para Roxo
['#e55d87', '#5f2c82']

// Rosa para Amarelo
['#fa709a', '#fee140']

// Verde para Ciano
['#43e97b', '#38f9d7']

// Azul para Azul Escuro
['#1976d2', '#0d47a1']

// Verde para Verde Escuro
['#388e3c', '#1b5e20']

// Rosa para Vermelho
['#f093fb', '#f5576c']

// Azul Claro para Ciano
['#4facfe', '#00f2fe']

// Roxo para Roxo Claro (Fatec)
['#7c3aed', '#a855f7']
```

## 🗂️ Componentes Principais

### ScreenContainer
**Props**:
- `title` (string): Título da tela
- `subtitle` (string): Subtítulo da tela
- `gradient` (array): Array com 3 cores de gradiente
- `children` (ReactNode): Conteúdo da tela
- `showCustomHeader` (boolean): Mostrar/ocultar header customizado

### ContentCard
**Props**:
- `children` (ReactNode): Conteúdo do card
- `gradient` (optional array): Gradiente personalizado

### FeatureItem
**Props**:
- `icon` (ReactNode): Ícone do feature
- `title` (string): Título do feature
- `description` (string): Descrição do feature
- `gradient` (array): Gradiente de fundo [cor1, cor2]

## 📱 Estrutura de Dados - Cursos Fatec

```typescript
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
```

## 🔗 Links Úteis

### Projeto
- [Fatec Cotia - Site Oficial](https://fateccotia.cps.sp.gov.br/)
- [Repositório no GitHub](https://github.com/gustavo03toledo/appFatecDsmMobile)

### Documentação
- [📖 Documentação do Assistente Virtual](./CHAT_ASSISTANT_DOCS.md) - Guia completo sobre o chat com IA
- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Google Gemini AI Docs](https://ai.google.dev/gemini-api/docs)

### Configuração
- [Obter API Key do Gemini](https://aistudio.google.com/app/apikey)
- [Arquivo .env.example](./.env.example) - Exemplo de configuração

## 👨‍💻 Autor

**Gustavo Toledo**

- GitHub: [@gustavo03toledo](https://github.com/gustavo03toledo)
- Repositório: [appFatecDsmMobile](https://github.com/gustavo03toledo/appFatecDsmMobile)

## 📄 Licença

Este projeto é um trabalho acadêmico desenvolvido para a Fatec.

---

<div align="center">
  <p>Desenvolvido com ❤️ para a Fatec Cotia</p>
  <p>© 2025 Lab Mobile - Todos os direitos reservados</p>
</div>
