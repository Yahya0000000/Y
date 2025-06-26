import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectAIFileInteractionsLogPanel from "../../../components/ProjectAIFileInteractionsLogPanel";

const initialLogs = [
  { id: 1, file: "src/components/PromptBox.tsx", action: "توليد", user: "ذكاء اصطناعي", date: "2025-06-25 11:01", details: "توليد مكون جديد بناءً على البرومبت." },
  { id: 2, file: "src/pages/projects/[id]/ai-settings.tsx", action: "تحرير", user: "ذكاء اصطناعي", date: "2025-06-25 11:02", details: "تعديل خصائص النموذج وتحسين واجهة الإعدادات." },
  { id: 3, file: "src/utils/aiApi.ts", action: "تعليق", user: "ذكاء اصطناعي", date: "2025-06-25 11:02", details: "إضافة تعليق يشرح طريقة استخدام الدالة." }
];

const ProjectAIFileInteractionsLogPage = () => {
  const [logs, setLogs] = useState(initialLogs);
  const [query, setQuery] = useState("");
  const [action, setAction] = useState("الكل");

  const filtered = logs.filter(
    l =>
      (action === "الكل" || l.action === action) &&
      (l.file.includes(query) || l.details.includes(query))
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>سجل تفاعلات الذكاء الاصطناعي مع الملفات</h1>
        <ProjectAIFileInteractionsLogPanel
          logs={filtered}
          query={query}
          setQuery={setQuery}
          action={action}
          setAction={setAction}
        />
      </main>
    </div>
  );
};

export default ProjectAIFileInteractionsLogPage;