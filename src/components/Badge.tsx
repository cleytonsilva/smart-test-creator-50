interface BadgeProps {
  score: number;
}

const Badge = ({ score }: BadgeProps) => {
  const getBadgeColor = () => {
    if (score >= 90) return "bg-primary";
    if (score >= 80) return "bg-secondary";
    return "bg-accent";
  };

  const getBadgeTitle = () => {
    if (score >= 90) return "Especialista";
    if (score >= 80) return "Proficiente";
    return "Competente";
  };

  return (
    <div className={`${getBadgeColor()} w-24 h-24 rounded-full mx-auto flex items-center justify-center text-white`}>
      <div className="text-center">
        <div className="text-sm font-semibold">{getBadgeTitle()}</div>
        <div className="text-xs">{score.toFixed(0)}%</div>
      </div>
    </div>
  );
};

export default Badge;