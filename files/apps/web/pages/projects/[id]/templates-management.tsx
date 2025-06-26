import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectTemplatesManagementPanel from "../../../components/ProjectTemplatesManagementPanel";

const initialTemplates = [
  { id: 1, name: "واجهة تسجيل دخول React", category: "واجهة", type: "ملف", user: "يحيى المطور", date: "2025-06-25 11:15", desc: "قالب صفحة تسجيل دخول بواجهة React" },
  { id: 2, name: "مشروع موقع تعريفي", category: "مشروع", type: "مشروع", user: "سارة المصممة", date: "2025-06-25 11:15", desc: "قالب مشروع موقع شخصي متكامل" },
  { id: 3, name: "برومبت توليد صفحة", category: "برومبت", type: "برومبت", user: "ذكاء اصطناعي", date: "2025-06-25 11:15", desc: "Prompt جاهز لتوليد صفحة جديدة" }
];

const ProjectTemplatesManagementPage = () => {
  const [templates, setTemplates] = useState(initialTemplates);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("الكل");
  const [type, setType] = useState("الكل");

  const filtered = templates.filter(
    t =>
      (category === "الكل" || t.category === category) &&
      (type === "الكل" || t.type === type) &&
      (t.name.includes(query) || t.desc.includes(query) || t.user.includes(query))
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>مركز إدارة القوالب</h1>
        <ProjectTemplatesManagementPanel
          templates={filtered}
          query={query}
          setQuery={setQuery}
          category={category}
          setCategory={setCategory}
          type={type}
          setType={setType}
        />
      </main>
    </div>
  );
};

export default ProjectTemplatesManagementPage;