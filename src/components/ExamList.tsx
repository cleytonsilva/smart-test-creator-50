import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Trophy } from "lucide-react";

const ExamList = () => {
  const exams = [
    {
      id: 1,
      title: "Fundamentos de Cibersegurança",
      description: "Avaliação sobre conceitos básicos de segurança digital",
      theme: "Cibersegurança",
      duration: "60 minutos",
      questionCount: 10,
      difficulty: "Iniciante",
    },
    // Adicione mais provas conforme necessário
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {exams.map((exam) => (
        <Card key={exam.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {exam.title}
              <Trophy className="h-5 w-5 text-yellow-500" />
            </CardTitle>
            <CardDescription>{exam.theme}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">{exam.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {exam.duration}
              </div>
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-1" />
                {exam.questionCount} questões
              </div>
            </div>
            <Button className="w-full">
              Iniciar Prova
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ExamList;