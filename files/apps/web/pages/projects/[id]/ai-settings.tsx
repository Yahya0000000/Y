import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectAISettingsPanel from "../../../components/ProjectAISettingsPanel";

const initialAISettings = {
  model: "gpt-4o",
  codePolicy: "تحرير فقط",
  maxTokens: 2048,
  enableSuggestions: true,
  enableAutoLink: false,
  usageLimit: 100
};

const ProjectAISettingsPage = () => {
  const [aiSettings, setAISettings] = useState(initialAISettings);

  const handleChange = (field: string, value: any) => {
    setAISettings(s => ({ ...s, [field]: value }));
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>إعدادات الذكاء الاصطناعي للمشروع</h1>
        <ProjectAISettingsPanel
          settings={aiSettings}
          onChange={handleChange}
        />
      </main>
    </div>
  );
};

export default ProjectAISettingsPage;