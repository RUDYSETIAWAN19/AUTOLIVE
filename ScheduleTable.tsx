import { Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const schedules = [
  { id: 1, name: "Video_TikTok_Promo.mp4", platform: "TikTok", time: "14:00", status: "queued" },
  { id: 2, name: "Reels_Product_Launch.mp4", platform: "Instagram", time: "16:30", status: "uploading" },
  { id: 3, name: "Shorts_Tutorial_01.mp4", platform: "YouTube", time: "18:00", status: "completed" },
  { id: 4, name: "Video_Ads_Campaign.mp4", platform: "Facebook", time: "20:00", status: "failed" },
  { id: 5, name: "Clip_Highlight_Game.mp4", platform: "TikTok", time: "22:00", status: "queued" },
];

const statusConfig = {
  queued: { icon: Clock, label: "Antrian", className: "text-muted-foreground" },
  uploading: { icon: Loader2, label: "Mengupload", className: "text-primary animate-spin" },
  completed: { icon: CheckCircle2, label: "Selesai", className: "text-primary" },
  failed: { icon: AlertCircle, label: "Gagal", className: "text-destructive" },
};

const ScheduleTable = () => {
  return (
    <div className="gradient-card rounded-xl border border-border shadow-card overflow-hidden">
      <div className="p-5 border-b border-border">
        <h3 className="font-display font-semibold text-foreground">Jadwal Upload Hari Ini</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs text-muted-foreground font-medium px-5 py-3">File</th>
              <th className="text-left text-xs text-muted-foreground font-medium px-5 py-3">Platform</th>
              <th className="text-left text-xs text-muted-foreground font-medium px-5 py-3">Waktu</th>
              <th className="text-left text-xs text-muted-foreground font-medium px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((s) => {
              const cfg = statusConfig[s.status as keyof typeof statusConfig];
              const Icon = cfg.icon;
              return (
                <tr key={s.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                  <td className="px-5 py-3.5 text-sm text-foreground font-medium">{s.name}</td>
                  <td className="px-5 py-3.5">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {s.platform}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">{s.time}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon size={14} className={cfg.className} />
                      <span className={cfg.className}>{cfg.label}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleTable;
