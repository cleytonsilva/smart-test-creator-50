import { useState } from "react";
import QuizGenerator, { Question } from "@/components/QuizGenerator";
import QuizQuestion from "@/components/QuizQuestion";
import QuizResult from "@/components/QuizResult";

const Index = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleQuizGenerated = (generatedQuestions: Question[]) => {
    setQuestions(generatedQuestions);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const score = newAnswers.reduce((acc, curr, idx) => {
        return curr === questions[idx].correctAnswer ? acc + 1 : acc;
      }, 0);
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setQuestions([]);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="container">
        {questions.length === 0 && (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Gerador de Provas com IA
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Crie provas personalizadas instantaneamente e ganhe certificados baseados no seu desempenho
              </p>
            </div>
            <QuizGenerator onQuizGenerated={handleQuizGenerated} />
          </>
        )}

        {questions.length > 0 && !showResult && (
          <QuizQuestion
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
            isLast={currentQuestion === questions.length - 1}
          />
        )}

        {showResult && (
          <QuizResult
            score={answers.reduce((acc, curr, idx) => {
              return curr === questions[idx].correctAnswer ? acc + 1 : acc;
            }, 0)}
            totalQuestions={questions.length}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
};

export default Index;