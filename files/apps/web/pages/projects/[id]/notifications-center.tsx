import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectNotificationsCenterPanel from "../../../components/ProjectNotificationsCenterPanel";

const initialNotifications = [
  { id: 1, type: "AI", message: "تم توليد كود جديد بنجاح.", date: "2025-06-25 10:55", read: false },
  { id: 2, type: "أمان", message: "محاولة دخول غير مصرح بها.", date: "2025-06-25 10:56", read: false },
  { id: 3, type: "تحديث مشروع", message: "تم إضافة عضو جديد للفريق.", date: "2025-06-25 10:57", read: true }
];

const ProjectNotificationsCenterPage = () => {
  const [notifs, setNotifs] = useState(initialNotifications);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("الكل");

  const filtered = notifs.filter(
    n =>
      (filter === "الكل" || n.type === filter) &&
      (n.message.includes(query) || n.type.includes(query))
  );

  const markRead = (id: number) => {
    setNotifs(ns => ns.map(n => n.id === id ? { ...n, read: true } : n));
  };
  const archive = (id: number) => {
    setNotifs(ns => ns.filter(n => n.id !== id));
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>مركز الإشعارات الذكية</h1>
        <ProjectNotificationsCenterPanel
          notifications={filtered}
          query={query}
          setQuery={setQuery}
          filter={filter}
          setFilter={setFilter}
          onMarkRead={markRead}
          onArchive={archive}
        />
      </main>
    </div>
  );
};

export default ProjectNotificationsCenterPage;