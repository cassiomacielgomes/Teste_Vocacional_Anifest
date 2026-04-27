import { Sword, Shield, Heart, Sparkles, Brain, Crown, Flame, Star, Wand2, Zap, Eye, Music, Camera, Scissors, Hammer, Compass, Users, Rocket, Briefcase, Palette, Stethoscope, Pill, Footprints, HandHeart, Gem, Hand, User, Leaf, Flower2, FlaskConical, HardHat, ShieldAlert, Sofa, Map, Shirt, Ruler, ClipboardList, Truck, UserCog, Laptop, Megaphone, Drama, Aperture } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Trait =
  | "care"      // cuidado / cura
  | "beauty"    // beleza / estética
  | "courage"   // coragem / proteção
  | "creative"  // criatividade / arte
  | "logic"     // lógica / estratégia
  | "social"    // social / liderança
  | "explore"   // exploração / aventura
  | "craft";    // habilidade manual / construção

export type Course = {
  name: string;
  icon: LucideIcon;
  tagline: string;
  traits: Trait[];
  imagePath: string;
};

export const COURSES: Course[] = [
  { name: "Técnico em Enfermagem", icon: Stethoscope, tagline: "Você tem o coração de um curandeiro de party — sua magia salva vidas no campo de batalha.", traits: ["care", "courage"], imagePath: "enfermagem.webp" },
  { name: "Técnico em Farmácia", icon: Pill, tagline: "Como um alquimista, você transforma fórmulas em poções que curam o mundo.", traits: ["care", "logic"], imagePath: "farmacia.webp" },
  { name: "Podólogo", icon: Footprints, tagline: "Atento aos detalhes que ninguém vê — você é o suporte silencioso de toda jornada.", traits: ["care", "craft"], imagePath: "podologo.webp" },
  { name: "Massoterapeuta", icon: HandHeart, tagline: "Suas mãos têm o ki da cura — você restaura PV só com um toque.", traits: ["care", "beauty"], imagePath: "massoterapeuta.webp" },
  { name: "Técnico em Estética", icon: Sparkles, tagline: "Mestre da transformação — seu poder revela a beleza oculta em cada herói.", traits: ["beauty", "care"], imagePath: "estetica.webp" },
  { name: "Manicure", icon: Gem, tagline: "Precisão de samurai e olhar de artista — cada detalhe é uma obra-prima.", traits: ["beauty", "craft"], imagePath: "manicure.webp" },
  { name: "Barbeiro", icon: Scissors, tagline: "Estilo de protagonista! Você define o visual lendário de cada personagem.", traits: ["beauty", "social"], imagePath: "barbeiro.webp" },
  { name: "Depilador", icon: Leaf, tagline: "Calma de monge e técnica afiada — seu cuidado deixa todo mundo radiante.", traits: ["beauty", "care"], imagePath: "depilador.webp" },
  { name: "Cabeleireiro", icon: Flower2, tagline: "Você desenha penteados dignos de OP de anime — pura expressão criativa.", traits: ["beauty", "creative"], imagePath: "cabeleireiro.webp" },
  { name: "Maquiador", icon: Palette, tagline: "Mestre da transformação visual — cada rosto vira uma nova personagem.", traits: ["beauty", "creative"], imagePath: "maquiador.webp" },
  { name: "Bombeiro Civil", icon: Flame, tagline: "Coragem nível Hokage! Você enfrenta o caos para salvar quem precisa.", traits: ["courage", "social"], imagePath: "bombeiro.webp" },
  { name: "Técnico em Segurança do Trabalho", icon: ShieldAlert, tagline: "Tank da guilda — sua estratégia protege a equipe de qualquer perigo.", traits: ["courage", "logic"], imagePath: "seguranca.webp" },
  { name: "Técnico em Design de Interiores", icon: Sofa, tagline: "Arquiteto de mundos — você cria cenários onde toda história ganha vida.", traits: ["creative", "craft"], imagePath: "design-interiores.webp" },
  { name: "Técnico em Guia de Turismo", icon: Map, tagline: "Espírito de aventureiro — você conhece todos os caminhos do mapa.", traits: ["explore", "social"], imagePath: "turismo.webp" },
  { name: "Costureiro", icon: Shirt, tagline: "Como um forjador de armaduras lendárias, você costura uniformes de heróis.", traits: ["craft", "creative"], imagePath: "costureiro.webp" },
  { name: "Modelista", icon: Ruler, tagline: "Mente de engenheiro, alma de artista — você projeta o estilo do amanhã.", traits: ["craft", "creative"], imagePath: "modelista.webp" },
  { name: "Técnico em Administração", icon: ClipboardList, tagline: "Estrategista nato — você comanda a guilda com sabedoria de Conselheiro.", traits: ["logic", "social"], imagePath: "administracao.webp" },
  { name: "Técnico em Logística", icon: Truck, tagline: "Mestre da rota perfeita — nenhum item se perde sob seu comando.", traits: ["logic", "explore"], imagePath: "logistica.webp" },
  { name: "Técnico em Recursos Humanos", icon: UserCog, tagline: "Líder empático — você reúne os melhores aliados para cada missão.", traits: ["social", "care"], imagePath: "recursos-humanos.webp" },
  { name: "Técnico em Informática", icon: Laptop, tagline: "Você tem a precisão de um ninja digital — códigos são suas shurikens.", traits: ["logic", "craft"], imagePath: "informatica.webp" },
  { name: "Técnico em Marketing", icon: Megaphone, tagline: "Carisma de protagonista — sua voz move multidões e cria lendas.", traits: ["social", "creative"], imagePath: "marketing.webp" },
  { name: "Técnico em Teatro", icon: Drama, tagline: "Você vive mil vidas no palco — cada personagem ganha alma com você.", traits: ["creative", "social"], imagePath: "teatro.webp" },
  { name: "Fotógrafo", icon: Aperture, tagline: "Olhar de Sharingan — você captura o instante exato em que a magia acontece.", traits: ["creative", "explore"], imagePath: "fotografo.webp" },
];

export type Option = {
  label: string;
  icon: LucideIcon;
  traits: Trait[];
};

export type Question = {
  id: number;
  prompt: string;
  options: Option[];
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    prompt: "Em uma guilda lendária, qual seria sua função?",
    options: [
      { label: "Healer — protejo a vida da party", icon: Heart, traits: ["care", "social"] },
      { label: "Tank — fico na linha de frente", icon: Shield, traits: ["courage", "logic"] },
      { label: "Mago — domino a estratégia arcana", icon: Wand2, traits: ["logic", "creative"] },
      { label: "Bardo — inspiro com arte e voz", icon: Music, traits: ["creative", "social"] },
    ],
  },
  {
    id: 2,
    prompt: "Como você resolveria um conflito num arco de torneio?",
    options: [
      { label: "Cuidando dos feridos antes de tudo", icon: Stethoscope, traits: ["care", "social"] },
      { label: "Analisando o oponente com lógica fria", icon: Brain, traits: ["logic", "craft"] },
      { label: "Inspirando todos com um discurso", icon: Crown, traits: ["social", "creative"] },
      { label: "Atacando primeiro com pura coragem", icon: Sword, traits: ["courage", "explore"] },
    ],
  },
  {
    id: 3,
    prompt: "Que poder você desbloquearia num arco de treinamento?",
    options: [
      { label: "Mãos curadoras — toque que restaura", icon: HandHeart, traits: ["care", "beauty"] },
      { label: "Visão precisa — olho que tudo vê", icon: Eye, traits: ["logic", "creative"] },
      { label: "Forja arcana — criar armas e itens", icon: Hammer, traits: ["craft", "creative"] },
      { label: "Aura magnética — liderar multidões", icon: Megaphone, traits: ["social", "courage"] },
    ],
  },
  {
    id: 4,
    prompt: "Seu cenário de OP favorito é…",
    options: [
      { label: "Cidade futurista cheia de neon", icon: Rocket, traits: ["logic", "craft"] },
      { label: "Vila tradicional com cerejeiras", icon: Flower2, traits: ["beauty", "care"] },
      { label: "Mundo aberto pra explorar", icon: Compass, traits: ["explore", "courage"] },
      { label: "Palco brilhante de festival", icon: Star, traits: ["creative", "social"] },
    ],
  },
  {
    id: 5,
    prompt: "Qual item lendário ficaria no seu inventário?",
    options: [
      { label: "Pincel mágico que pinta realidades", icon: Palette, traits: ["creative", "beauty"] },
      { label: "Pergaminho de estratégias supremas", icon: Briefcase, traits: ["logic", "social"] },
      { label: "Câmera que captura almas", icon: Camera, traits: ["creative", "explore"] },
      { label: "Bracelete que multiplica força", icon: Zap, traits: ["courage", "craft"] },
    ],
  },
];

export function calculateResult(selectedTraits: Trait[]): Course {
  const counts = selectedTraits.reduce<Record<string, number>>((acc, t) => {
    acc[t] = (acc[t] ?? 0) + 1;
    return acc;
  }, {});

  let best = COURSES[0];
  let bestScore = -1;

  for (const course of COURSES) {
    const score = course.traits.reduce((s, t) => s + (counts[t] ?? 0), 0)
      + course.name.length * 0.001;
    if (score > bestScore) {
      bestScore = score;
      best = course;
    }
  }
  return best;
}

export const _icons = { User, Hand, FlaskConical, HardHat };
