import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import SmartHelpCenterPanel from "../../components/SmartHelpCenterPanel";

const faq = [
  { q: "كيف أستعيد نسخة سابقة من المشروع؟", a: "توجه إلى صفحة 'استعادة نسخة سابقة' من الشريط الجانبي، واختر الإصدار المطلوب ثم اضغط استعادة." },
  { q: "كيف أضيف عضو جديد للفريق؟", a: "من صفحة 'إدارة الفريق' يمكنك إضافة عضو عبر البريد الإلكتروني وتحديد صلاحياته." },
  { q: "هل يمكن ربط المشروع بـ GitHub؟", a: "نعم، من صفحة إعدادات المشروع اختر 'تصدير إلى GitHub' أو 'استيراد من GitHub'." },
  { q: "ما الفرق بين محرر الكود ومحرر التصميم؟", a: "محرر الكود لكتابة الشيفرة البرمجية والتكامل مع الذكاء الاصطناعي، أما محرر التصميم فهو لرسم الواجهات أو المستويات." }
];

const SmartHelpCenterPage = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);

  const handleSearch = () => {
    // محاكاة إجابة AI أو البحث في الأسئلة الشائعة
    const found = faq.find(f => query && f.q.includes(query));
    setAnswer(found ? found.a : "لم يتم العثور على إجابة مباشرة. يمكنك إرسال تذكرة دعم ليتم الرد عليك لاحقًا.");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>مركز المساعدة الذكي</h1>
        <SmartHelpCenterPanel
          query={query}
          setQuery={setQuery}
          answer={answer}
          onSearch={handleSearch}
        />
      </main>
    </div>
  );
};

export default SmartHelpCenterPage;