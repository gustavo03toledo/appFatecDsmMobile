import { View, Text, StyleSheet, ScrollView, Pressable, Linking, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type SkillCardProps = {
    category: string;
    skills: string[];
    iconName: any;
    color: string;
};

function SkillCard({ category, skills, iconName, color }: SkillCardProps) {
    return (
        <View style={styles.skillCard}>
            <View style={[styles.skillGlow, { backgroundColor: color }]} />
            <View style={styles.skillHeader}>
                <View style={[styles.skillIcon, { backgroundColor: color }]}>
                    <Ionicons name={iconName} size={24} color="#FFF" />
                </View>
                <Text style={styles.skillCategory}>{category}</Text>
            </View>
            <View style={styles.skillsList}>
                {skills.map((skill, index) => (
                    <View key={index} style={styles.skillItem}>
                        <View style={[styles.sparkle, { backgroundColor: color }]} />
                        <Text style={styles.skillText}>{skill}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

type HobbyCardProps = {
    hobby: string;
    iconName: any;
};

function HobbyCard({ hobby, iconName }: HobbyCardProps) {
    return (
        <View style={styles.hobbyCard}>
            <View style={styles.hobbyGlow} />
            <Ionicons name={iconName} size={20} color="#ff8bb0ff" />
            <Text style={styles.hobbyText}>{hobby}</Text>
        </View>
    );
}

export default function SobreMim() {
    const openGitHub = async () => {
        try {
            await Linking.openURL('https://github.com/juliaoliveiramarttins');
        } catch (error) {
            console.error('Erro ao abrir GitHub:', error);
        }
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.headerMagic}>
                <View style={styles.star1} />
                <View style={styles.star2} />
                <View style={styles.star3} />
                <View style={styles.star4} />
            </View>

            <View style={styles.content}>
                {/* Foto de Perfil */}
                <View style={styles.profileSection}>
                    <View style={styles.photoContainer}>
                        <View style={styles.photoGlowOuter} />
                        <View style={styles.photoGlowInner} />
                        <Image
                            source={require('../assets/juliafoto.png')}
                            style={styles.profilePhoto}
                        />
                        <View style={styles.photoFrame} />
                    </View>

                    <View style={styles.wand1} />
                    <View style={styles.wand2} />
                </View>

                {/* Nome e Título */}
                <View style={styles.nameSection}>
                    <Text style={styles.greeting}>✨ Mischief Managed ✨</Text>
                    <Text style={styles.name}>Júlia Martins</Text>

                    <View style={styles.titleBadge}>
                        <Ionicons name="code-slash" size={16} color="#D4AF37" />
                        <Text style={styles.title}>Desenvolvedora Front-End</Text>
                    </View>

                    <View style={styles.ageBadge}>
                        <Text style={styles.ageText}>22 anos • FATEC</Text>
                    </View>
                </View>

                {/* Carta de Apresentação */}
                <View style={styles.letterCard}>
                    <View style={styles.letterHeader}>
                        <Ionicons name="mail-open" size={24} color="#D4AF37" />
                        <Text style={styles.letterTitle}>Minha História</Text>
                    </View>

                    <View style={styles.sealDecoration} />

                    <Text style={styles.letterText}>
                        Oi! Eu sou a Júlia Martins, tenho 22 anos e estou me formando em Desenvolvimento de
                        Software na FATEC. Atualmente, trabalho como desenvolvedora front-end — área pela qual
                        sou apaixonada e onde realmente me encontrei no mundo da tecnologia.
                    </Text>

                    <Text style={styles.letterText}>
                        Tenho grande interesse em desenvolvimento web front-end e em UI/UX, áreas que me
                        motivam a aprender, criar e evoluir constantemente.
                    </Text>
                </View>

                {/* Skills - Feitiços & Encantamentos */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="book" size={28} color="#D4AF37" />
                        <Text style={styles.sectionTitle}>Feitiços & Encantamentos</Text>
                    </View>

                    <View style={styles.sectionSubtitleContainer}>
                        <Text style={styles.sectionSubtitle}>
                            Minhas habilidades mágicas do mundo dev para representar a{' '}
                            <Text style={styles.sectionSubtitleGreen}>Sonserina 🐍</Text>
                        </Text>
                    </View>

                    <SkillCard
                        category="Front-End"
                        skills={['HTML5 & CSS3', 'SASS', 'JavaScript & TypeScript', 'React & React Native', 'Tailwind CSS']}
                        iconName="desktop"
                        color="#D32F2F"
                    />

                    <SkillCard
                        category="Back-End & Banco de Dados"
                        skills={['Node.js', 'MySQL', 'MongoDB']}
                        iconName="server"
                        color="#2E7D32"
                    />

                    <SkillCard
                        category="Design & Ferramentas"
                        skills={['Figma', 'Canva', 'Trello', 'Git & GitHub', 'Visual Studio Code']}
                        iconName="color-palette"
                        color="#1976D2"
                    />
                </View>

                {/* Botão GitHub */}
                <Pressable style={styles.githubButton} onPress={openGitHub}>
                    <Ionicons name="logo-github" size={22} color="#FFF" />
                    <Text style={styles.githubButtonText}>Visite meu GitHub</Text>
                    <Ionicons name="arrow-forward" size={18} color="#FFF" />
                </Pressable>

                {/* Interesses - Poções & Paixões */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="heart" size={28} color="#ff8bb0ff" />
                        <Text style={styles.sectionTitle}>Poções & Paixões</Text>
                    </View>

                    <Text style={styles.sectionSubtitle}>O que me encanta fora do código!</Text>

                    <View style={styles.hobbiesGrid}>
                        <HobbyCard hobby="Silêncio" iconName="leaf-outline" />
                        <HobbyCard hobby="Natureza" iconName="flower-outline" />
                        <HobbyCard hobby="Praia" iconName="sunny-outline" />
                        <HobbyCard hobby="Animais" iconName="paw-outline" />
                        <HobbyCard hobby="Harry P." iconName="flash-outline" />
                        <HobbyCard hobby="Hip Hop" iconName="musical-notes-outline" />
                        <HobbyCard hobby="Jogar" iconName="game-controller-outline" />
                        <HobbyCard hobby="Pintar" iconName="brush-outline" />
                        <HobbyCard hobby="Séries" iconName="tv-outline" />
                    </View>
                </View>

                {/* Footer Mágico */}
                <View style={styles.footerQuote}>
                    <Text style={styles.quoteText}>
                        "São as nossas escolhas, mais do que as nossas capacidades, que mostram quem realmente somos." {' '}
                        <Text style={styles.quoteAuthor}>— Albus Dumbledore ✨</Text>
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    headerMagic: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 300,
        zIndex: 0,
    },
    star1: {
        position: 'absolute',
        top: 40,
        left: 30,
        width: 3,
        height: 3,
        backgroundColor: '#D4AF37',
        borderRadius: 1.5,
        opacity: 0.6,
    },
    star2: {
        position: 'absolute',
        top: 80,
        right: 50,
        width: 2,
        height: 2,
        backgroundColor: '#FFD700',
        borderRadius: 1,
        opacity: 0.8,
    },
    star3: {
        position: 'absolute',
        top: 120,
        left: 80,
        width: 2,
        height: 2,
        backgroundColor: '#D4AF37',
        borderRadius: 1,
        opacity: 0.5,
    },
    star4: {
        position: 'absolute',
        top: 60,
        right: 100,
        width: 3,
        height: 3,
        backgroundColor: '#FFD700',
        borderRadius: 1.5,
        opacity: 0.7,
    },
    content: {
        padding: 24,
        paddingTop: 60,
        paddingBottom: 40,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 24,
        position: 'relative',
    },
    photoContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoGlowOuter: {
        position: 'absolute',
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: '#D4AF37',
        opacity: 0.15,
        zIndex: 0,
    },
    photoGlowInner: {
        position: 'absolute',
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#FFD700',
        opacity: 0.2,
        zIndex: 1,
    },
    profilePhoto: {
        width: 180,
        height: 180,
        borderRadius: 90,
        borderWidth: 4,
        borderColor: '#D4AF37',
        zIndex: 2,
    },
    photoFrame: {
        position: 'absolute',
        width: 195,
        height: 195,
        borderRadius: 97.5,
        borderWidth: 2,
        borderColor: 'rgba(212, 175, 55, 0.3)',
        borderStyle: 'dashed',
        zIndex: 3,
    },
    wand1: {
        position: 'absolute',
        top: 20,
        right: 40,
        width: 40,
        height: 2,
        backgroundColor: '#8B6F47',
        transform: [{ rotate: '25deg' }],
        opacity: 0.6,
    },
    wand2: {
        position: 'absolute',
        bottom: 30,
        left: 50,
        width: 35,
        height: 2,
        backgroundColor: '#8B6F47',
        transform: [{ rotate: '-20deg' }],
        opacity: 0.6,
    },
    nameSection: {
        alignItems: 'center',
        marginBottom: 24,
    },
    greeting: {
        fontSize: 14,
        color: '#D4AF37',
        marginBottom: 8,
        fontWeight: '600',
        letterSpacing: 2,
    },
    name: {
        fontSize: 32,
        fontWeight: '800',
        color: '#FFF',
        marginBottom: 12,
        textShadowColor: 'rgba(212, 175, 55, 0.3)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 8,
    },
    titleBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(212, 175, 55, 0.15)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        gap: 8,
        borderWidth: 1,
        borderColor: 'rgba(212, 175, 55, 0.3)',
        marginBottom: 8,
    },
    title: {
        fontSize: 15,
        color: '#D4AF37',
        fontWeight: '600',
    },
    ageBadge: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
    },
    ageText: {
        fontSize: 13,
        color: '#94A3B8',
        fontWeight: '600',
    },
    letterCard: {
        backgroundColor: 'rgba(212, 175, 55, 0.08)',
        borderRadius: 20,
        padding: 24,
        marginBottom: 32,
        borderWidth: 1,
        borderColor: 'rgba(212, 175, 55, 0.25)',
        position: 'relative',
        overflow: 'hidden',
    },
    letterHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 16,
    },
    letterTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#D4AF37',
    },
    sealDecoration: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#D32F2F',
        opacity: 0.3,
    },
    letterText: {
        fontSize: 15,
        color: '#CBD5E1',
        lineHeight: 24,
        marginBottom: 12,
    },
    section: {
        marginBottom: 32,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 8,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '800',
        color: '#FFF',
    },
    sectionSubtitleContainer: {
        marginBottom: 20,
        marginLeft: 40,
    },
    sectionSubtitle: {
        fontSize: 14,
        color: '#94A3B8',
        marginBottom: 12,
    },
    sectionSubtitleGreen: {
        color: '#0ea94fff',
        fontWeight: '700',
    },
    skillCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 18,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        position: 'relative',
        overflow: 'hidden',
    },
    skillGlow: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 4,
        height: '100%',
        opacity: 0.8,
    },
    skillHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 16,
    },
    skillIcon: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    skillCategory: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FFF',
    },
    skillsList: {
        gap: 10,
    },
    skillItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    sparkle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        opacity: 0.9,
    },
    skillText: {
        fontSize: 15,
        color: '#E2E8F0',
        flex: 1,
    },
    githubButton: {
        backgroundColor: '#24292E',
        borderRadius: 16,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 32,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    githubButtonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFF',
    },
    hobbiesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    hobbyCard: {
        backgroundColor: 'rgba(255, 183, 206, 0.12)',
        borderRadius: 16,
        paddingVertical: 14,
        paddingHorizontal: 18,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        borderWidth: 1,
        borderColor: '#ff8bb07c',
        position: 'relative',
        overflow: 'hidden',
        flexBasis: '30%',
        flexGrow: 1,
    },
    hobbyGlow: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 183, 206, 0.08)',
    },
    hobbyText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#FFF',
    },
    footerQuote: {
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 16,
        paddingHorizontal: 20,
    },
    quoteText: {
        fontSize: 15,
        fontStyle: 'italic',
        color: '#94A3B8',
        lineHeight: 22,
        textAlign: 'center',
    },
    quoteAuthor: {
        fontSize: 13,
        color: '#D4AF37',
        fontWeight: '600',
    },
});
