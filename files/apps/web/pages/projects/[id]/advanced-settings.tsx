import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectAdvancedSettingsPanel from "../../../components/ProjectAdvancedSettingsPanel";

const initialSettings = {
  name: "اسم المشروع التجريبي",
  description: "هذا مشروع تجريبي للذكاء الاصطناعي.",
  type: "webapp",
  autoAI: true,
  protected: false
};

const ProjectAdvancedSettingsPage = () => {
  const [settings, setSettings] = useState(initialSettings);

  const handleChange = (field: string, value: any) => {
    setSettings(s => ({ ...s, [field]: value }));
  };

  const handleSave = () => {
    alert("تم حفظ الإعدادات المتقدمة (محاكاة فقط)");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>الإعدادات المتقدمة للمشروع</h1>
        <ProjectAdvancedSettingsPanel
          settings={settings}
          onChange={handleChange}
          onSave={handleSave}
        />
      </main>
    </div>
  );
};

export default ProjectAdvancedSettingsPage;