import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
}

const StatCard = ({ icon: Icon, label, value, change, positive }: StatCardProps) => {
  return (
    <div className="gradient-card rounded-xl border border-border p-5 shadow-card hover:shadow-glow transition-shadow duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
          <Icon size={18} className="text-primary-foreground" />
        </div>
        {change && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${positive ? 'bg-primary/15 text-primary' : 'bg-destructive/15 text-destructive'}`}>
            {change}
          </span>
        )}
      </div>
      <p className="text-2xl font-display font-bold text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
};

export default StatCard;
