import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectSmartDocsPanel from "../../../components/ProjectSmartDocsPanel";

const initialDocs = [
  { id: 1, section: "واجهة المستخدم", file: "PromptBox.tsx", lang: "عربي", type: "تلقائي", content: "مكون إدخال البرومبت الرئيسي للذكاء الاصطناعي.", date: "2025-06-25 11:12" },
  { id: 2, section: "منطق العمل", file: "aiApi.ts", lang: "إنجليزي", type: "يدوي", content: "Handles all interactions with AI engine and prompt processing.", date: "2025-06-25 11:12" },
  { id: 3, section: "AI", file: "ProjectAISettingsPanel.tsx", lang: "عربي", type: "تلقائي", content: "واجهة إعدادات الذكاء الاصطناعي للمشروع مع خيارات النماذج والحدود.", date: "2025-06-25 11:12" }
];

const ProjectSmartDocsPage = () => {
  const [docs, setDocs] = useState(initialDocs);
  const [query, setQuery] = useState("");
  const [section, setSection] = useState("الكل");
  const [lang, setLang] = useState("الكل");
  const [type, setType] = useState("الكل");

  const filtered = docs.filter(
    d =>
      (section === "الكل" || d.section === section) &&
      (lang === "الكل" || d.lang === lang) &&
      (type === "الكل" || d.type === type) &&
      (d.file.includes(query) || d.content.includes(query) || d.section.includes(query))
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>مركز توثيق المشروع الذكي</h1>
        <ProjectSmartDocsPanel
          docs={filtered}
          query={query}
          setQuery={setQuery}
          section={section}
          setSection={setSection}
          lang={lang}
          setLang={setLang}
          type={type}
          setType={setType}
        />
      </main>
    </div>
  );
};

export default ProjectSmartDocsPage;