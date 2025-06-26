import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectAnalyticsInsightsPanel from "../../../components/ProjectAnalyticsInsightsPanel";

const stats = {
  files: 128,
  edits: 310,
  prompts: 67,
  activeMembers: 5,
  aiSuccessRate: "92%",
  avgResponse: "2.4s"
};

const promptChart = [
  { day: "الأحد", count: 8 },
  { day: "الإثنين", count: 9 },
  { day: "الثلاثاء", count: 10 },
  { day: "الأربعاء", count: 13 },
  { day: "الخميس", count: 12 },
  { day: "الجمعة", count: 7 },
  { day: "السبت", count: 8 }
];

const topFiles = [
  { file: "PromptBox.tsx", changes: 44 },
  { file: "aiApi.ts", changes: 31 },
  { file: "ProjectSettingsPanel.tsx", changes: 26 }
];

const topMembers = [
  { user: "يحيى المطور", activity: 87 },
  { user: "سارة المصممة", activity: 70 },
  { user: "محمد القارئ", activity: 51 }
];

const promptTypes = [
  { type: "توليد كود", count: 41 },
  { type: "تحليل", count: 15 },
  { type: "تصحيح", count: 11 }
];

const ProjectAnalyticsInsightsPage = () => {
  const [period, setPeriod] = useState("الأسبوع");

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>إحصائيات وذكاء المشروع</h1>
        <ProjectAnalyticsInsightsPanel
          stats={stats}
          promptChart={promptChart}
          topFiles={topFiles}
          topMembers={topMembers}
          promptTypes={promptTypes}
          period={period}
          setPeriod={setPeriod}
        />
      </main>
    </div>
  );
};

export default ProjectAnalyticsInsightsPage;