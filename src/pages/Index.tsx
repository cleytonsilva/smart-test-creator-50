import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Trophy, Users, Flag, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreateExamForm from "@/components/CreateExamForm";
import ExamList from "@/components/ExamList";
import RankingTable from "@/components/RankingTable";
import CTFChallenges from "@/components/CTFChallenges";
import UserProfile from "@/components/UserProfile";

const Index = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">
            Plataforma de Certificações em Tecnologia
          </h1>
          <Button onClick={() => setShowCreateForm(true)} className="bg-yellow-400 hover:bg-yellow-500 text-black">
            <Plus className="mr-2 h-4 w-4" />
            Criar desafio
          </Button>
        </div>

        {showCreateForm ? (
          <CreateExamForm onClose={() => setShowCreateForm(false)} />
        ) : (
          <Tabs defaultValue="exams" className="space-y-6">
            <TabsList className="grid grid-cols-4 gap-4 bg-transparent">
              <TabsTrigger value="exams" className="data-[state=active]:bg-white shadow-sm">
                <Trophy className="mr-2 h-4 w-4" />
                Provas Liberadas
              </TabsTrigger>
              <TabsTrigger value="ranking" className="data-[state=active]:bg-white shadow-sm">
                <Users className="mr-2 h-4 w-4" />
                Ranking
              </TabsTrigger>
              <TabsTrigger value="ctf" className="data-[state=active]:bg-white shadow-sm">
                <Flag className="mr-2 h-4 w-4" />
                Desafios CTF
              </TabsTrigger>
              <TabsTrigger value="profile" className="data-[state=active]:bg-white shadow-sm">
                <User className="mr-2 h-4 w-4" />
                Perfil
              </TabsTrigger>
            </TabsList>

            <TabsContent value="exams" className="mt-6">
              <ExamList />
            </TabsContent>

            <TabsContent value="ranking" className="mt-6">
              <RankingTable />
            </TabsContent>

            <TabsContent value="ctf" className="mt-6">
              <CTFChallenges />
            </TabsContent>

            <TabsContent value="profile" className="mt-6">
              <UserProfile />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default Index;