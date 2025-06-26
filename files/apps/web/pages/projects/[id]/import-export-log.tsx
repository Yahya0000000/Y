import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectImportExportLogPanel from "../../../components/ProjectImportExportLogPanel";

const initialLog = [
  { id: 1, type: "استيراد من GitHub", user: "يحيى المطور", date: "2025-06-25 11:08", status: "ناجح", desc: "استيراد مشروع من github.com/Yahya0000000/ai-platform" },
  { id: 2, type: "تصدير كملف ZIP", user: "سارة المصممة", date: "2025-06-25 11:09", status: "ناجح", desc: "تصدير جميع ملفات المشروع كملف مضغوط" },
  { id: 3, type: "استيراد من قالب", user: "محمد القارئ", date: "2025-06-25 11:09", status: "فشل", desc: "استيراد مشروع من قالب لعبة 2D" }
];

const ProjectImportExportLogPage = () => {
  const [logs, setLogs] = useState(initialLog);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("الكل");
  const [status, setStatus] = useState("الكل");

  const filtered = logs.filter(
    l =>
      (type === "الكل" || l.type === type) &&
      (status === "الكل" || l.status === status) &&
      (l.user.includes(query) || l.desc.includes(query))
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>سجل استيراد وتصدير المشاريع</h1>
        <ProjectImportExportLogPanel
          logs={filtered}
          query={query}
          setQuery={setQuery}
          type={type}
          setType={setType}
          status={status}
          setStatus={setStatus}
        />
      </main>
    </div>
  );
};

export default ProjectImportExportLogPage;