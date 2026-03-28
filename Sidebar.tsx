import { Filter, Download, Scissors, Upload, BarChart3, LayoutDashboard, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Filter, label: "Filter Video", active: false },
  { icon: Download, label: "Download", active: false },
  { icon: Scissors, label: "Edit Video", active: false },
  { icon: Upload, label: "Auto Upload", active: false },
  { icon: BarChart3, label: "Laporan", active: false },
];

interface SidebarProps {
  activeItem: string;
  onItemClick: (label: string) => void;
}

const Sidebar = ({ activeItem, onItemClick }: SidebarProps) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border flex flex-col z-50">
      <div className="p-6 border-b border-border">
        <h1 className="font-display text-xl font-bold tracking-tight">
          <span className="text-gradient">AutoLive</span>
          <span className="text-muted-foreground font-medium text-sm block mt-0.5">Automation</span>
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = activeItem === item.label;
          return (
            <button
              key={item.label}
              onClick={() => onItemClick(item.label)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                isActive
                  ? "gradient-primary text-primary-foreground shadow-glow"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-all">
          <Settings size={18} />
          Pengaturan
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
