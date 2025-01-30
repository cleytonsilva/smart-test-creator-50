import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy, Medal } from "lucide-react";

const RankingTable = () => {
  const rankings = [
    {
      position: 1,
      name: "João Silva",
      score: 980,
      completedExams: 15,
      completedCTFs: 8,
      badges: 12,
    },
    {
      position: 2,
      name: "Maria Santos",
      score: 850,
      completedExams: 12,
      completedCTFs: 6,
      badges: 9,
    },
    {
      position: 3,
      name: "Pedro Oliveira",
      score: 720,
      completedExams: 10,
      completedCTFs: 4,
      badges: 7,
    },
  ];

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Medal className="h-5 w-5 text-amber-600" />;
      default:
        return position;
    }
  };

  return (
    <div className="rounded-lg border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Posição</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Pontuação</TableHead>
            <TableHead>Provas Concluídas</TableHead>
            <TableHead>CTFs Concluídos</TableHead>
            <TableHead>Badges</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rankings.map((rank) => (
            <TableRow key={rank.position}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  {getPositionIcon(rank.position)}
                </div>
              </TableCell>
              <TableCell>{rank.name}</TableCell>
              <TableCell>{rank.score}</TableCell>
              <TableCell>{rank.completedExams}</TableCell>
              <TableCell>{rank.completedCTFs}</TableCell>
              <TableCell>{rank.badges}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RankingTable;