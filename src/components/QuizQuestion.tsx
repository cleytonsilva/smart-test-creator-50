import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Question } from "./QuizGenerator";

interface QuizQuestionProps {
  question: Question;
  onAnswer: (answer: string) => void;
  isLast: boolean;
}

const QuizQuestion = ({ question, onAnswer, isLast }: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleSubmit = () => {
    if (selectedAnswer) {
      onAnswer(selectedAnswer);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
      
      <RadioGroup
        value={selectedAnswer}
        onValueChange={setSelectedAnswer}
        className="space-y-3"
      >
        {question.options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={`option-${index}`} />
            <Label htmlFor={`option-${index}`}>{option}</Label>
          </div>
        ))}
      </RadioGroup>

      <Button
        className="mt-6 w-full"
        onClick={handleSubmit}
        disabled={!selectedAnswer}
      >
        {isLast ? "Finalizar Prova" : "Próxima Questão"}
      </Button>
    </div>
  );
};

export default QuizQuestion;