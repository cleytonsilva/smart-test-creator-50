import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Target, Book } from "lucide-react";

const UserProfile = () => {
  const userStats = {
    name: "João Silva",
    rank: "Expert em Segurança",
    totalScore: 980,
    completedExams: 15,
    completedCTFs: 8,
    badges: [
      "Mestre em Web Security",
      "Especialista em Redes",
      "Analista de Malware",
    ],
    recentActivities: [
      {
        type: "exam",
        title: "Fundamentos de Cibersegurança",
        result: "90%",
        date: "2024-03-15",
      },
      {
        type: "ctf",
        title: "Web Security Challenge",
        result: "Concluído",
        date: "2024-03-10",
      },
    ],
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{userStats.name}</h2>
              <p className="text-sm text-gray-500">{userStats.rank}</p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="text-sm text-gray-500">Pontuação Total</p>
                <p className="font-bold">{userStats.totalScore}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Book className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Provas Concluídas</p>
                <p className="font-bold">{userStats.completedExams}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-gray-500">CTFs Concluídos</p>
                <p className="font-bold">{userStats.completedCTFs}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Badges Conquistadas</h3>
            <div className="flex flex-wrap gap-2">
              {userStats.badges.map((badge) => (
                <Badge key={badge} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-4">Atividades Recentes</h3>
            <div className="space-y-4">
              {userStats.recentActivities.map((activity) => (
                <div
                  key={`${activity.title}-${activity.date}`}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    {activity.type === "exam" ? (
                      <Book className="h-5 w-5 text-blue-500" />
                    ) : (
                      <Target className="h-5 w-5 text-green-500" />
                    )}
                    <div>
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(activity.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary">{activity.result}</Badge>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;