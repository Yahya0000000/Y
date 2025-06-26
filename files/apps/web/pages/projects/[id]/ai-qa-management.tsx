import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectAIQAManagementPanel from "../../../components/ProjectAIQAManagementPanel";

const initialTests = [
  { id: 1, scenario: "توليد صفحة تسجيل دخول", type: "توليد", status: "ناجح", date: "2025-06-25 11:03", user: "ذكاء اصطناعي" },
  { id: 2, scenario: "تحليل كود React Hook", type: "تحليل", status: "فشل", date: "2025-06-25 11:03", user: "ذكاء اصطناعي" },
  { id: 3, scenario: "تصحيح خطأ Syntax في PromptBox.tsx", type: "تصحيح", status: "جارٍ", date: "2025-06-25 11:04", user: "ذكاء اصطناعي" }
];

const ProjectAIQAManagementPage = () => {
  const [tests, setTests] = useState(initialTests);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("الكل");
  const [status, setStatus] = useState("الكل");

  const filtered = tests.filter(
    t =>
      (type === "الكل" || t.type === type) &&
      (status === "الكل" || t.status === status) &&
      (t.scenario.includes(query) || t.user.includes(query))
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>إدارة اختبارات الذكاء الاصطناعي (AI QA)</h1>
        <ProjectAIQAManagementPanel
          tests={filtered}
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

export default ProjectAIQAManagementPage;