import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectLiveMonitorPanel from "../../../components/ProjectLiveMonitorPanel";

// بيانات محاكاة تتغير كل ثانية
const generateMockData = () => ({
  cpu: (Math.random() * 100).toFixed(1),
  memory: (Math.random() * 8192).toFixed(0), // ميغابايت
  responseTime: (Math.random() * 300 + 100).toFixed(1), // ms
  liveRequests: Math.floor(Math.random() * 15),
  aiErrors: Math.floor(Math.random() * 3)
});

const ProjectLiveMonitorPage = () => {
  const [stats, setStats] = useState(generateMockData());

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(generateMockData());
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>لوحة مراقبة الأداء الحي</h1>
        <ProjectLiveMonitorPanel stats={stats} />
      </main>
    </div>
  );
};

export default ProjectLiveMonitorPage;