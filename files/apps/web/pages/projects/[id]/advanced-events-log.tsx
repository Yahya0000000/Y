import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectAdvancedEventsLogPanel from "../../../components/ProjectAdvancedEventsLogPanel";

const initialEvents = [
  { id: 1, type: "تغيير إعدادات النظام", user: "يحيى المطور", date: "2025-06-25 10:52", details: "تعديل بيئة البرمجة إلى Node.js 20" },
  { id: 2, type: "تشغيل الذكاء الاصطناعي", user: "سارة المصممة", date: "2025-06-25 10:53", details: "بدء جلسة توليد تلقائي للكود" },
  { id: 3, type: "تحديث قالب", user: "محمد القارئ", date: "2025-06-25 10:54", details: "تعديل قالب لعبة 2D وحفظ نسخة جديدة" }
];

const ProjectAdvancedEventsLogPage = () => {
  const [events, setEvents] = useState(initialEvents);
  const [query, setQuery] = useState("");

  const filtered = events.filter(
    e => e.type.includes(query) || e.user.includes(query) || e.details.includes(query)
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>سجل الأحداث المتقدمة</h1>
        <ProjectAdvancedEventsLogPanel
          events={filtered}
          query={query}
          setQuery={setQuery}
        />
      </main>
    </div>
  );
};

export default ProjectAdvancedEventsLogPage;