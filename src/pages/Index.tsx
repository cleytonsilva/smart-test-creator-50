import { useState } from "react";
import QuizGenerator from "@/components/QuizGenerator";
import QuizQuestion from "@/components/QuizQuestion";
import QuizResult from "@/components/QuizResult";
import { Question } from "@/components/QuizGenerator";

const Index = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleQuizGenerated = (generatedQuestions: Question[]) => {
    setQuestions(generatedQuestions);
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
  };

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">
          Plataforma de Certificações em Tecnologia
        </h1>

        {!quizStarted && !quizFinished && (
          <QuizGenerator onQuizGenerated={handleQuizGenerated} />
        )}

        {quizStarted && !quizFinished && questions[currentQuestionIndex] && (
          <div className="mb-4">
            <div className="text-right mb-4 text-sm text-gray-600">
              Questão {currentQuestionIndex + 1} de {questions.length}
            </div>
            <QuizQuestion
              question={questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              isLast={currentQuestionIndex === questions.length - 1}
            />
          </div>
        )}

        {quizFinished && (
          <QuizResult
            score={score}
            totalQuestions={questions.length}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
};

export default Index;