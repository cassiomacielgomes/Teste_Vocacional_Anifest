import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Sword, Star, RotateCcw, ExternalLink, ArrowRight, Trophy, Zap } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { QUESTIONS, calculateResult, type Trait, type Course } from "@/lib/quiz-data";
import { getProfessionImage } from "@/lib/profession-images";
import { FloatingPetals } from "@/components/FloatingPetals";
import heroImg from "@/assets/anifest-hero.jpg";
import resultFallbackImg from "@/assets/anifest-result.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anifest — Qual curso do Senac combina com você?" },
      { name: "description", content: "Quiz interativo do Anifest: descubra qual curso do Senac combina com seu perfil otaku." },
      { property: "og:title", content: "Anifest — Quiz Senac" },
      { property: "og:description", content: "Descubra seu curso Senac no mundo dos animes." },
    ],
  }),
  component: QuizApp,
});

const SENAC_URL = "https://www.sp.senac.br";

type Stage = "start" | "quiz" | "result";

function QuizApp() {
  const [stage, setStage] = useState<Stage>("start");
  const [step, setStep] = useState(0);
  const [traits, setTraits] = useState<Trait[]>([]);
  const [animKey, setAnimKey] = useState(0);

  const reset = () => {
    setStage("start");
    setStep(0);
    setTraits([]);
    setAnimKey((k) => k + 1);
  };

  const start = () => {
    setTraits([]);
    setStep(0);
    setStage("quiz");
    setAnimKey((k) => k + 1);
  };

  const choose = (optionTraits: Trait[]) => {
    const next = [...traits, ...optionTraits];
    setTraits(next);
    if (step + 1 < QUESTIONS.length) {
      setStep(step + 1);
      setAnimKey((k) => k + 1);
    } else {
      setStage("result");
      setAnimKey((k) => k + 1);
    }
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-gradient-night">
      <FloatingPetals />
      {/* Totem vertical (9:16) — centralizado em telas wide */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1080px] flex-col items-center justify-center overflow-hidden p-5 sm:p-8">
        {stage === "start" && <StartScreen key={`s-${animKey}`} onStart={start} />}
        {stage === "quiz" && (
          <QuizScreen
            key={`q-${animKey}`}
            step={step}
            total={QUESTIONS.length}
            onChoose={choose}
          />
        )}
        {stage === "result" && (
          <ResultScreen key={`r-${animKey}`} course={calculateResult(traits)} onReset={reset} />
        )}
      </div>
    </main>
  );
}

function StartScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between gap-4 py-2 text-center">
      {/* Badge topo */}
      <div className="inline-flex items-center gap-2 rounded-full border-2 border-accent/70 bg-card/70 px-5 py-2 backdrop-blur">
        <Sparkles className="h-5 w-5 text-accent animate-sparkle" />
        <span className="font-display text-base tracking-[0.3em] text-accent">ANIFEST · SENAC</span>
        <Sparkles className="h-5 w-5 text-accent animate-sparkle" />
      </div>

      {/* Hero image */}
      <div className="relative flex flex-1 items-center justify-center py-2">
        <div className="absolute inset-0 animate-pulse-glow rounded-[3rem] bg-gradient-magic opacity-50 blur-3xl" />
        <div className="relative overflow-hidden rounded-[2rem] border-4 border-accent/70 shadow-glow animate-float">
          <img
            src={heroImg}
            alt="Personagens anime do Anifest"
            className="h-auto w-[min(70vw,420px)] object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
      </div>

      {/* Título */}
      <h1 className="text-stroke font-display text-[clamp(2rem,6vh,4rem)] leading-[0.95]">
        <span className="block bg-gradient-hero bg-clip-text text-transparent">QUAL CURSO</span>
        <span className="block text-foreground">DO SENAC</span>
        <span className="block text-accent">COMBINA COM VOCÊ?</span>
      </h1>

      <p className="max-w-[36ch] text-[clamp(1rem,2.2vh,1.5rem)] text-foreground/85">
        Responda 5 perguntas épicas e descubra seu <span className="font-bold text-accent">poder profissional</span> oculto.
      </p>

      {/* CTA gigante */}
      <button
        onClick={onStart}
        className="group relative inline-flex w-full max-w-[640px] items-center justify-center gap-4 rounded-[2rem] bg-accent px-10 py-8 font-display text-[clamp(1.75rem,4vh,3rem)] text-accent-foreground shadow-button transition-transform duration-200 hover:-translate-y-1 hover:bg-accent/90 active:translate-y-1 active:shadow-none animate-pulse-glow"
      >
        <Sword className="h-10 w-10" />
        INICIAR JORNADA
        <ArrowRight className="h-10 w-10 transition-transform group-hover:translate-x-2" />
      </button>

      <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2"><Star className="h-4 w-4 text-accent" /> 5 perguntas</div>
        <div className="flex items-center gap-2"><Trophy className="h-4 w-4 text-accent" /> 23 caminhos</div>
      </div>
    </div>
  );
}

function QuizScreen({
  step,
  total,
  onChoose,
}: {
  step: number;
  total: number;
  onChoose: (traits: Trait[]) => void;
}) {
  const q = QUESTIONS[step];
  const progress = ((step + 1) / total) * 100;

  return (
    <div className="flex h-full w-full flex-col gap-5">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between font-display text-xl tracking-wider">
          <span className="flex items-center gap-2 text-accent">
            <Zap className="h-6 w-6" />
            FASE {step + 1} / {total}
          </span>
          <span className="text-accent">{Math.round(progress)}%</span>
        </div>
        <div className="h-4 overflow-hidden rounded-full border-2 border-primary/50 bg-card/60">
          <div
            className="h-full rounded-full bg-accent transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Pergunta */}
      <div className="animate-slide-up rounded-3xl border-4 border-accent/50 bg-card/80 p-6 text-center shadow-card backdrop-blur md:p-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1 font-display text-sm tracking-widest text-accent">
          <Sparkles className="h-4 w-4" /> PERGUNTA
        </div>
        <h2 className="font-display text-[clamp(1.75rem,4.5vh,3.25rem)] leading-tight text-foreground">
          {q.prompt}
        </h2>
      </div>

      {/* Opções empilhadas verticalmente — botões enormes para touch */}
      <div className="flex flex-1 flex-col justify-center gap-4">
        {q.options.map((opt, i) => {
          const Icon = opt.icon;
          return (
            <button
              key={opt.label}
              onClick={() => onChoose(opt.traits)}
              className="group animate-slide-in-bounce relative flex min-h-[14vh] w-full items-center gap-5 overflow-hidden rounded-3xl border-4 border-border bg-card/75 p-5 text-left backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:bg-card hover:shadow-glow active:translate-y-0"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-magic opacity-0 transition-opacity group-hover:opacity-30" />
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-button transition-transform group-hover:scale-110 group-hover:rotate-6">
                <Icon className="h-10 w-10" />
              </div>
              <span className="font-display text-[clamp(1.25rem,3vh,2rem)] leading-tight tracking-wide text-foreground">
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ResultScreen({ course, onReset }: { course: Course; onReset: () => void }) {
  const Icon = course.icon;
  const professionImg = getProfessionImage(course.imagePath);
  const imgSrc = professionImg ?? resultFallbackImg;
  return (
    <div className="flex h-full w-full flex-col items-center gap-3 py-1">
      {/* Badge topo */}
      <div className="inline-flex items-center gap-2 rounded-full border-2 border-accent/70 bg-card/70 px-5 py-2 backdrop-blur">
        <Trophy className="h-5 w-5 text-accent animate-sparkle" />
        <span className="font-display text-sm tracking-[0.3em] text-accent">SEU PODER FOI REVELADO</span>
      </div>

      {/* Ilustração — proporção fixa, central */}
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-magic opacity-60 blur-3xl" />
        <div className="animate-power-up relative overflow-hidden rounded-[2rem] border-4 border-accent/70 shadow-glow">
          <div className="relative aspect-[4/3] w-[min(55vw,640px)] bg-card/60">
            <img
              src={imgSrc}
              alt={`Ilustração — ${course.name}`}
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = resultFallbackImg;
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
        </div>
        <Sparkles className="absolute -top-3 -right-2 h-10 w-10 text-accent animate-sparkle" />
        <Star className="absolute bottom-4 -left-3 h-8 w-8 text-accent animate-sparkle" style={{ animationDelay: "0.6s" }} />
      </div>

      {/* Nome do curso */}
      <div className="flex w-full max-w-[640px] flex-col items-center">
        <div className="flex items-center gap-4 w-full">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-button">
            <Icon className="h-9 w-9" />
          </div>
          <div className="text-left flex-1">
            <p className="font-display text-sm uppercase tracking-widest text-accent">Seu caminho é</p>
            <h1 className="text-stroke font-display text-[clamp(1.75rem,4.5vh,3.5rem)] leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">{course.name}</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <p className="w-full max-w-[640px] rounded-2xl border-2 border-accent/40 bg-card/75 p-4 text-center text-[clamp(1rem,2.4vh,1.5rem)] leading-relaxed text-foreground/90 shadow-card backdrop-blur">
        “{course.tagline}”
      </p>

      {/* QR + CTA */}
      <div className="flex w-full max-w-[640px] items-center gap-6 rounded-2xl border-2 border-accent/50 bg-card/80 p-5 shadow-card">
        <div className="rounded-xl bg-white p-3 shadow-lg">
          <QRCodeSVG value={SENAC_URL} size={140} level="H" />
        </div>
        <div className="text-left">
          <p className="font-display text-xl font-bold tracking-wide text-accent">ESCANEIE AQUI</p>
          <p className="text-base text-muted-foreground leading-tight">
            Descubra mais sobre o seu curso e garanta sua vaga no Senac!
          </p>
        </div>
      </div>

      {/* 
      <a
        href={SENAC_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full max-w-[640px] items-center justify-center gap-3 rounded-2xl bg-accent px-6 py-5 font-display text-[clamp(1.1rem,2.6vh,1.6rem)] text-accent-foreground shadow-button transition-transform hover:-translate-y-1 hover:bg-accent/90 active:translate-y-0"
      >
        <ExternalLink className="h-6 w-6" />
        SAIBA MAIS SOBRE OS CURSOS
      </a>
      */}

      {/* Botão Nova Jornada — gigante para touch */}
      <button
        onClick={onReset}
        className="inline-flex w-full max-w-[640px] items-center justify-center gap-3 rounded-2xl border-4 border-accent/80 bg-primary px-6 py-7 font-display text-[clamp(1.4rem,3.2vh,2rem)] tracking-wider text-primary-foreground shadow-button transition-transform hover:-translate-y-1 hover:bg-primary/90 active:translate-y-0"
      >
        <RotateCcw className="h-8 w-8" />
        NOVA JORNADA
      </button>
    </div>
  );
}
