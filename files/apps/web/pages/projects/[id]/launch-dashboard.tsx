import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectLaunchDashboardPanel from "../../../components/ProjectLaunchDashboardPanel";

const projectStatus = {
  filesReady: true,
  aiReady: false,
  lastActivity: "2025-06-25 10:44",
  securityAlerts: 1,
  unresolvedIssues: 2
};

const ProjectLaunchDashboardPage = () => {
  const [status, setStatus] = useState(projectStatus);

  const handleAction = (action: string) => {
    alert(`تم تنفيذ الإجراء: ${action} (محاكاة فقط)`);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>لوحة الإطلاق</h1>
        <ProjectLaunchDashboardPanel
          status={status}
          onAction={handleAction}
        />
      </main>
    </div>
  );
};

export default ProjectLaunchDashboardPage;