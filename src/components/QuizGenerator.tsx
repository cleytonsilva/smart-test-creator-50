import { useState } from "react";
import { Brain } from "lucide-react";
import QuizTheme from "./QuizTheme";

interface QuizGeneratorProps {
  onQuizGenerated: (questions: Question[]) => void;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const themes = [
  {
    id: 1,
    theme: "Cibersegurança Básica",
    icon: "shield",
    description: "Fundamentos de segurança digital e proteção de dados",
    difficulty: "Fácil",
  },
  {
    id: 2,
    theme: "Programação Web",
    icon: "code",
    description: "HTML, CSS, JavaScript e frameworks modernos",
    difficulty: "Médio",
  },
  {
    id: 3,
    theme: "Redes e Infraestrutura",
    icon: "network",
    description: "Protocolos, arquitetura e segurança de redes",
    difficulty: "Difícil",
  },
  {
    id: 4,
    theme: "Segurança Avançada",
    icon: "lock",
    description: "Criptografia, pentest e análise de vulnerabilidades",
    difficulty: "Difícil",
  },
];

const QuizGenerator = ({ onQuizGenerated }: QuizGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateQuiz = async (themeId: number) => {
    setIsGenerating(true);
    // Simulando geração de questões com IA (substitua por integração real depois)
    const mockQuestions: Question[] = [
      {
        id: 1,
        question: "Qual é a principal função de um firewall?",
        options: [
          "Acelerar a conexão com a internet",
          "Controlar o tráfego de rede e proteger contra ameaças",
          "Armazenar senhas de forma segura",
          "Criar backups automáticos",
        ],
        correctAnswer: "Controlar o tráfego de rede e proteger contra ameaças",
      },
      {
        id: 2,
        question: "O que é um ataque de phishing?",
        options: [
          "Um vírus que corrompe arquivos",
          "Uma tentativa de enganar usuários para obter dados sensíveis",
          "Um problema de hardware",
          "Uma falha de conexão",
        ],
        correctAnswer: "Uma tentativa de enganar usuários para obter dados sensíveis",
      },
    ];
    
    setTimeout(() => {
      setIsGenerating(false);
      onQuizGenerated(mockQuestions);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Brain className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-gray-800">Escolha um Tema</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {themes.map((theme) => (
          <QuizTheme
            key={theme.id}
            {...theme}
            onClick={() => !isGenerating && generateQuiz(theme.id)}
          />
        ))}
      </div>

      {isGenerating && (
        <div className="text-center text-gray-600">
          Gerando questões personalizadas...
        </div>
      )}
    </div>
  );
};

export default QuizGenerator;