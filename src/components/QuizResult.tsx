import { Button } from "@/components/ui/button";
import { Award, Download } from "lucide-react";
import Certificate from "./Certificate";
import Badge from "./Badge";

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const QuizResult = ({ score, totalQuestions, onRestart }: QuizResultProps) => {
  const percentage = (score / totalQuestions) * 100;
  const passed = percentage >= 70;

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
          <Award className={`w-12 h-12 ${passed ? "text-primary" : "text-gray-400"}`} />
        </div>
        <h2 className="text-3xl font-bold mb-2">
          {passed ? "Parabéns!" : "Continue Tentando!"}
        </h2>
        <p className="text-xl text-gray-600">
          Você acertou {score} de {totalQuestions} questões ({percentage.toFixed(0)}%)
        </p>
      </div>

      {passed && (
        <div className="space-y-6 mb-8">
          <Certificate score={score} totalQuestions={totalQuestions} />
          <Badge score={percentage} />
        </div>
      )}

      <div className="flex flex-col gap-4">
        {passed && (
          <Button className="w-full" variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Baixar Certificado
          </Button>
        )}
        <Button onClick={onRestart} className="w-full">
          Fazer Nova Prova
        </Button>
      </div>
    </div>
  );
};

export default QuizResult;