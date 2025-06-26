import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectBackupRestorePanel from "../../../components/ProjectBackupRestorePanel";

const initialBackups = [
  { id: 1, type: "تلقائي", user: "النظام", date: "2025-06-25 10:00", size: "15MB", status: "جاهز", desc: "نسخة تلقائية يومية" },
  { id: 2, type: "يدوي", user: "يحيى المطور", date: "2025-06-24 22:11", size: "14MB", status: "جاهز", desc: "نسخة يدوية قبل تحديثات كبرى" },
  { id: 3, type: "تلقائي", user: "النظام", date: "2025-06-23 10:00", size: "13MB", status: "تم التنزيل", desc: "نسخة تلقائية أسبوعية" }
];

const ProjectBackupRestorePage = () => {
  const [backups, setBackups] = useState(initialBackups);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("الكل");
  const [status, setStatus] = useState("الكل");

  const filtered = backups.filter(
    b =>
      (type === "الكل" || b.type === type) &&
      (status === "الكل" || b.status === status) &&
      (b.user.includes(query) || b.desc.includes(query))
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>إدارة النسخ الاحتياطية واستعادة المشروع</h1>
        <ProjectBackupRestorePanel
          backups={filtered}
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

export default ProjectBackupRestorePage;