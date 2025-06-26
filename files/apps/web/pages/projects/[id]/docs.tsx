import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectDocsCenterPanel from "../../../components/ProjectDocsCenterPanel";

const docsSections = [
  { title: "بنية المشروع", content: "يحتوي المشروع على مجلد apps/web حيث توجد جميع صفحات واجهة المستخدم..."},
  { title: "إعدادات الذكاء الاصطناعي", content: "يمكنك ضبط إعدادات الذكاء الاصطناعي مثل نمط التوليد، اللغة، مستوى الدقة من خلال صفحة الإعدادات المتقدمة." },
  { title: "البرومبتات", content: "كل تفاعل مع الذكاء الاصطناعي يسمى 'برومبت' ويوثق في سجل البرومبتات مع نوع البرومبت والنتيجة." },
  { title: "الإشعارات", content: "يوجد نظام إشعارات متقدم يمكن تخصيصه لكل عضو من صفحة إعدادات الإشعارات." }
];

const ProjectDocsPage = () => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(docsSections);

  const handleSearch = () => {
    setFiltered(
      docsSections.filter(
        s => s.title.includes(query) || s.content.includes(query)
      )
    );
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>مركز التوثيق</h1>
        <ProjectDocsCenterPanel
          query={query}
          setQuery={setQuery}
          docs={filtered}
          onSearch={handleSearch}
        />
      </main>
    </div>
  );
};

export default ProjectDocsPage;