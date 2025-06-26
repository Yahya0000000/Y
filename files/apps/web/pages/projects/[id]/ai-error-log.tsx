import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectAIErrorLogPanel from "../../../components/ProjectAIErrorLogPanel";

const initialErrors = [
  { id: 1, type: "توليد كود", user: "سارة المصممة", date: "2025-06-25 10:58", message: "SyntaxError: Unexpected token in line 23", severity: "مرتفعة", suggestion: "تحقق من صياغة البرومبت أو قلل التعقيد." },
  { id: 2, type: "تحليل كود", user: "يحيى المطور", date: "2025-06-25 10:59", message: "Timeout: AI response exceeded limit", severity: "متوسطة", suggestion: "جرب تقليل حجم الكود أو زيادة مهلة الاستجابة." },
  { id: 3, type: "سؤال برومبت", user: "محمد القارئ", date: "2025-06-25 11:00", message: "ModelError: Unknown model id", severity: "منخفضة", suggestion: "حدد نموذج صحيح في إعدادات AI." }
];

const ProjectAIErrorLogPage = () => {
  const [errors, setErrors] = useState(initialErrors);
  const [query, setQuery] = useState("");
  const [severity, setSeverity] = useState("الكل");

  const filtered = errors.filter(
    e =>
      (severity === "الكل" || e.severity === severity) &&
      (e.type.includes(query) || e.message.includes(query) || e.user.includes(query))
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#c32b2b", marginBottom: "32px" }}>لوحة سجل أخطاء الذكاء الاصطناعي</h1>
        <ProjectAIErrorLogPanel
          errors={filtered}
          query={query}
          setQuery={setQuery}
          severity={severity}
          setSeverity={setSeverity}
        />
      </main>
    </div>
  );
};

export default ProjectAIErrorLogPage;