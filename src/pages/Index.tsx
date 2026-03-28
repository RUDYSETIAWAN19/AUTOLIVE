import { useState } from "react";
import { Filter, Download, Scissors, Upload, Video, FileVideo, BarChart3 } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import FeatureCard from "@/components/FeatureCard";
import ScheduleTable from "@/components/ScheduleTable";
import ActivityChart from "@/components/ActivityChart";

const Index = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />

      <main className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="font-display text-3xl font-bold text-foreground">
            Selamat Datang 👋
          </h2>
          <p className="text-muted-foreground mt-1">
            Kelola semua video otomasi Anda dari satu dashboard.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={Video} label="Total Video" value="1,284" change="+12%" positive />
          <StatCard icon={Upload} label="Upload Hari Ini" value="18" change="+5" positive />
          <StatCard icon={Download} label="Download Hari Ini" value="42" change="+23%" positive />
          <StatCard icon={FileVideo} label="Dalam Antrian" value="7" />
        </div>

        {/* Features Grid */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-4">Fitur Utama</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <FeatureCard
            icon={Filter}
            title="Filter Video"
            description="Filter dan sortir video berdasarkan durasi, resolusi, dan platform."
            status="active"
            onClick={() => setActiveItem("Filter Video")}
          />
          <FeatureCard
            icon={Download}
            title="Download Video"
            description="Unduh video dari berbagai platform secara otomatis."
            status="active"
            onClick={() => setActiveItem("Download")}
          />
          <FeatureCard
            icon={Scissors}
            title="Edit Video"
            description="Tambahkan subtitle, potong, gabungkan, dan edit video dengan mudah."
            status="idle"
            onClick={() => setActiveItem("Edit Video")}
          />
          <FeatureCard
            icon={Upload}
            title="Auto Upload"
            description="Jadwalkan upload otomatis ke TikTok, Instagram, YouTube, dan lainnya."
            status="scheduled"
            onClick={() => setActiveItem("Auto Upload")}
          />
        </div>

        {/* Chart + Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActivityChart />
          <ScheduleTable />
        </div>
      </main>
    </div>
  );
};

export default Index;
