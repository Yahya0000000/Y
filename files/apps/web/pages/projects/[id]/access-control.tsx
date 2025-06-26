import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectAccessControlPanel from "../../../components/ProjectAccessControlPanel";

const initialMembers = [
  { id: 1, name: "يحيى المطور", role: "مسؤول", permissions: { read: true, write: true, delete: true, export: true, import: true, ai: true, templates: true, monitor: true } },
  { id: 2, name: "سارة المصممة", role: "محرر", permissions: { read: true, write: true, delete: false, export: false, import: true, ai: true, templates: true, monitor: false } },
  { id: 3, name: "محمد القارئ", role: "مشاهدة فقط", permissions: { read: true, write: false, delete: false, export: false, import: false, ai: false, templates: false, monitor: false } }
];

const ProjectAccessControlPage = () => {
  const [members, setMembers] = useState(initialMembers);

  const handlePermissionChange = (memberId: number, perm: string, value: boolean) => {
    setMembers(members =>
      members.map(m =>
        m.id === memberId
          ? { ...m, permissions: { ...m.permissions, [perm]: value } }
          : m
      )
    );
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>إدارة صلاحيات الوصول</h1>
        <ProjectAccessControlPanel
          members={members}
          onPermissionChange={handlePermissionChange}
        />
      </main>
    </div>
  );
};

export default ProjectAccessControlPage;