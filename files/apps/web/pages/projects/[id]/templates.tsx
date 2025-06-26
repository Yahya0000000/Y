import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectTemplatesPanel from "../../../components/ProjectTemplatesPanel";

const initialTemplates = [
  { id: 1, name: "قالب لعبة 2D", type: "مشروع", description: "مشروع لعبة ثنائية الأبعاد مع إعدادات حركة جاهزة.", updated: "2025-06-24" },
  { id: 2, name: "قالب ملف AI", type: "ذكاء اصطناعي", description: "إعدادات متقدمة لبرومبتات البرمجة.", updated: "2025-06-25" },
  { id: 3, name: "قالب صفحة تسجيل دخول", type: "ملف", description: "نموذج صفحة تسجيل دخول مع معالجة أخطاء.", updated: "2025-06-20" }
];

const ProjectTemplatesPage = () => {
  const [templates, setTemplates] = useState(initialTemplates);
  const [query, setQuery] = useState("");

  const filtered = templates.filter(t =>
    t.name.includes(query) || t.type.includes(query) || t.description.includes(query)
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>إدارة القوالب</h1>
        <ProjectTemplatesPanel
          templates={filtered}
          query={query}
          setQuery={setQuery}
        />
      </main>
    </div>
  );
};

export default ProjectTemplatesPage;