import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectAnalyticsPanel from "../../../components/ProjectAnalyticsPanel";

const analytics = {
  runs: 32,
  members: 5,
  files: 47,
  editsPerDay: 14,
  activeFiles: [
    { name: "Main.tsx", edits: 10 },
    { name: "App.jsx", edits: 8 },
    { name: "styles.css", edits: 6 }
  ],
  activeMembers: [
    { name: "يحيى المطور", edits: 12 },
    { name: "سارة المصممة", edits: 8 }
  ],
  aiErrors: 3,
  aiSuccessRate: 92
};

const ProjectAnalyticsPage = () => {
  const [data] = useState(analytics);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>إحصائيات المشروع</h1>
        <ProjectAnalyticsPanel data={data} />
      </main>
    </div>
  );
};

export default ProjectAnalyticsPage;