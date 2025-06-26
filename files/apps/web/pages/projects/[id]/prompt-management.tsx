import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectPromptManagementPanel from "../../../components/ProjectPromptManagementPanel";

const initialPrompts = [
  { id: 1, title: "توليد صفحة تسجيل", type: "توليد كود", content: "برجاء توليد صفحة تسجيل دخول كاملة بلغة React.", favorite: true, date: "2025-06-25 11:05" },
  { id: 2, title: "تحليل أداء الكود", type: "تحليل", content: "حلل أداء الدالة التالية واقترح تحسينات.", favorite: false, date: "2025-06-25 11:06" },
  { id: 3, title: "تصحيح خطأ في PromptBox", type: "تصحيح", content: "هناك خطأ في الكود التالي، اعرض لي حله.", favorite: true, date: "2025-06-25 11:06" }
];

const ProjectPromptManagementPage = () => {
  const [prompts, setPrompts] = useState(initialPrompts);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("الكل");

  const filtered = prompts.filter(
    p =>
      (type === "الكل" || p.type === type) &&
      (p.title.includes(query) || p.content.includes(query))
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>إدارة البرومبتات</h1>
        <ProjectPromptManagementPanel
          prompts={filtered}
          query={query}
          setQuery={setQuery}
          type={type}
          setType={setType}
        />
      </main>
    </div>
  );
};

export default ProjectPromptManagementPage;