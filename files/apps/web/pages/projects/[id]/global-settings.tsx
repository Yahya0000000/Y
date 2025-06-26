import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectGlobalSettingsPanel from "../../../components/ProjectGlobalSettingsPanel";

const initialSettings = {
  language: "العربية",
  autosave: true,
  aiFeatures: true,
  externalIntegration: false,
  securityLevel: "عالي"
};

const ProjectGlobalSettingsPage = () => {
  const [settings, setSettings] = useState(initialSettings);

  const handleChange = (field: string, value: any) => {
    setSettings(s => ({ ...s, [field]: value }));
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>إعدادات المشروع العامة</h1>
        <ProjectGlobalSettingsPanel
          settings={settings}
          onChange={handleChange}
        />
      </main>
    </div>
  );
};

export default ProjectGlobalSettingsPage;