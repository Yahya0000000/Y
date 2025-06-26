import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectAIUsageLogPanel from "../../../components/ProjectAIUsageLogPanel";

const initialAIUsage = [
  { id: 1, promptType: "توليد كود", user: "يحيى المطور", result: "نجاح", duration: "6.2s", date: "2025-06-25 10:48", error: "" },
  { id: 2, promptType: "تحليل كود", user: "سارة المصممة", result: "خطأ", duration: "2.8s", date: "2025-06-25 10:49", error: "SyntaxError" },
  { id: 3, promptType: "سؤال برومبت", user: "محمد القارئ", result: "نجاح", duration: "3.1s", date: "2025-06-25 10:50", error: "" }
];

const ProjectAIUsageLogPage = () => {
  const [usage, setUsage] = useState(initialAIUsage);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>سجل استخدام الذكاء الاصطناعي</h1>
        <ProjectAIUsageLogPanel usage={usage} />
      </main>
    </div>
  );
};

export default ProjectAIUsageLogPage;