import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { day: "Sen", uploads: 12, downloads: 8 },
  { day: "Sel", uploads: 18, downloads: 14 },
  { day: "Rab", uploads: 9, downloads: 6 },
  { day: "Kam", uploads: 22, downloads: 17 },
  { day: "Jum", uploads: 15, downloads: 11 },
  { day: "Sab", uploads: 28, downloads: 20 },
  { day: "Min", uploads: 7, downloads: 5 },
];

const ActivityChart = () => {
  return (
    <div className="gradient-card rounded-xl border border-border shadow-card p-5">
      <h3 className="font-display font-semibold text-foreground mb-4">Aktivitas Minggu Ini</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 14% 18%)" vertical={false} />
          <XAxis dataKey="day" tick={{ fill: "hsl(215 12% 52%)", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "hsl(215 12% 52%)", fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              background: "hsl(220 18% 10%)",
              border: "1px solid hsl(220 14% 18%)",
              borderRadius: "8px",
              color: "hsl(210 20% 92%)",
              fontSize: 13,
            }}
          />
          <Bar dataKey="uploads" fill="hsl(160 84% 44%)" radius={[4, 4, 0, 0]} name="Upload" />
          <Bar dataKey="downloads" fill="hsl(280 70% 58%)" radius={[4, 4, 0, 0]} name="Download" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
