import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flag, Clock, Award } from "lucide-react";

const CTFChallenges = () => {
  const challenges = [
    {
      id: 1,
      title: "Web Security Basics",
      description: "Explore vulnerabilidades web comuns e aprenda a explorá-las de forma ética",
      difficulty: "Iniciante",
      points: 100,
      estimatedTime: "2 horas",
      status: "Não iniciado",
    },
    {
      id: 2,
      title: "Network Forensics",
      description: "Analise tráfego de rede e descubra evidências de atividades maliciosas",
      difficulty: "Intermediário",
      points: 250,
      estimatedTime: "4 horas",
      status: "Em andamento",
    },
    {
      id: 3,
      title: "Reverse Engineering Challenge",
      description: "Decompile e analise binários para encontrar vulnerabilidades",
      difficulty: "Avançado",
      points: 500,
      estimatedTime: "8 horas",
      status: "Concluído",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Iniciante":
        return "bg-green-100 text-green-800";
      case "Intermediário":
        return "bg-yellow-100 text-yellow-800";
      case "Avançado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Não iniciado":
        return "bg-gray-100 text-gray-800";
      case "Em andamento":
        return "bg-blue-100 text-blue-800";
      case "Concluído":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {challenges.map((challenge) => (
        <Card key={challenge.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="flex items-center gap-2">
                  {challenge.title}
                </CardTitle>
                <CardDescription>{challenge.description}</CardDescription>
              </div>
              <Flag className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className={getDifficultyColor(challenge.difficulty)}>
                {challenge.difficulty}
              </Badge>
              <Badge variant="secondary" className={getStatusColor(challenge.status)}>
                {challenge.status}
              </Badge>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-1" />
                {challenge.points} pontos
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {challenge.estimatedTime}
              </div>
            </div>
            <Button className="w-full" disabled={challenge.status === "Concluído"}>
              {challenge.status === "Não iniciado" ? "Iniciar Desafio" : 
               challenge.status === "Em andamento" ? "Continuar" : "Concluído"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CTFChallenges;