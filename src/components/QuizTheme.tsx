import { Card } from "@/components/ui/card";
import { Shield, Code, Network, Lock } from "lucide-react";

interface QuizThemeProps {
  theme: string;
  icon: string;
  description: string;
  difficulty: string;
  onClick: () => void;
}

const QuizTheme = ({ theme, icon, description, difficulty, onClick }: QuizThemeProps) => {
  const getIcon = () => {
    switch (icon) {
      case "shield":
        return <Shield className="w-6 h-6" />;
      case "code":
        return <Code className="w-6 h-6" />;
      case "network":
        return <Network className="w-6 h-6" />;
      case "lock":
        return <Lock className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  const getDifficultyColor = () => {
    switch (difficulty.toLowerCase()) {
      case "fácil":
        return "text-green-500";
      case "médio":
        return "text-yellow-500";
      case "difícil":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <Card
      className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="p-3 bg-primary/10 rounded-lg text-primary">
          {getIcon()}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">{theme}</h3>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <span className={`text-xs font-medium ${getDifficultyColor()}`}>
            {difficulty}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default QuizTheme;