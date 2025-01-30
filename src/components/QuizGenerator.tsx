import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain } from "lucide-react";

interface QuizGeneratorProps {
  onQuizGenerated: (questions: Question[]) => void;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const QuizGenerator = ({ onQuizGenerated }: QuizGeneratorProps) => {
  const [topic, setTopic] = useState("");
  const [numQuestions, setNumQuestions] = useState("5");
  const [difficulty, setDifficulty] = useState("medium");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateQuiz = async () => {
    setIsGenerating(true);
    // Simulando geração de questões com IA (substitua por integração real depois)
    const mockQuestions: Question[] = [
      {
        id: 1,
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        correctAnswer: "Brasília",
      },
      {
        id: 2,
        question: "Quem pintou a Mona Lisa?",
        options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci",
      },
    ];
    
    setTimeout(() => {
      setIsGenerating(false);
      onQuizGenerated(mockQuestions);
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Brain className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-gray-800">Gerador de Prova</h2>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="topic">Tópico</Label>
          <Input
            id="topic"
            placeholder="Ex: História do Brasil"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="difficulty">Dificuldade</Label>
          <Select value={difficulty} onValueChange={setDifficulty}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione a dificuldade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="easy">Fácil</SelectItem>
              <SelectItem value="medium">Médio</SelectItem>
              <SelectItem value="hard">Difícil</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="questions">Número de Questões</Label>
          <Select value={numQuestions} onValueChange={setNumQuestions}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o número de questões" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 questões</SelectItem>
              <SelectItem value="10">10 questões</SelectItem>
              <SelectItem value="15">15 questões</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          className="w-full"
          onClick={generateQuiz}
          disabled={!topic || isGenerating}
        >
          {isGenerating ? "Gerando..." : "Gerar Prova"}
        </Button>
      </div>
    </div>
  );
};

export default QuizGenerator;