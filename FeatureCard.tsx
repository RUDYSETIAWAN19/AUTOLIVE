import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  status: "active" | "idle" | "scheduled";
  onClick: () => void;
}

const statusStyles = {
  active: "bg-primary/15 text-primary",
  idle: "bg-muted text-muted-foreground",
  scheduled: "bg-accent/15 text-accent",
};

const statusLabels = {
  active: "Aktif",
  idle: "Idle",
  scheduled: "Terjadwal",
};

const FeatureCard = ({ icon: Icon, title, description, status, onClick }: FeatureCardProps) => {
  return (
    <button
      onClick={onClick}
      className="gradient-card rounded-xl border border-border p-6 shadow-card hover:shadow-glow hover:border-primary/30 transition-all duration-300 text-left group w-full"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:gradient-primary transition-all duration-300">
          <Icon size={22} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[status]}`}>
          {statusLabels[status]}
        </span>
      </div>
      <h3 className="font-display font-semibold text-foreground text-lg mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </button>
  );
};

export default FeatureCard;
