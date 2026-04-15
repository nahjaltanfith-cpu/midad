import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

type Lang = "ar" | "en";

interface I18nContextType {
  lang: Lang;
  dir: "rtl" | "ltr";
  toggleLang: () => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");
  const [hydrated, setHydrated] = useState(false);

  // Sync from localStorage after hydration to avoid mismatch
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang;
    if (saved && saved !== lang) setLang(saved);
    setHydrated(true);
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "ar" ? "en" : "ar";
      localStorage.setItem("lang", next);
      return next;
    });
  }, []);

  const dir = lang === "ar" ? "rtl" : "ltr";

  const t = useCallback(
    (key: string): string => {
      const parts = key.split(".");
      let val: unknown = translations[lang];
      for (const p of parts) {
        if (val && typeof val === "object") {
          val = (val as Record<string, unknown>)[p];
        } else {
          return key;
        }
      }
      return typeof val === "string" ? val : key;
    },
    [lang],
  );

  return <I18nContext.Provider value={{ lang, dir, toggleLang, t }}>{children}</I18nContext.Provider>;
}

const translations: Record<Lang, Record<string, unknown>> = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن الجمعية",
      governance: "الحوكمة",
      reports: "التقارير",
      beneficiaries: "المستفيدون",
      contact: "تواصل معنا",
      joinUs: "انضم إلينا",
      langToggle: "EN",
    },
    hero: {
      badge: "نحو جيل ممكّن يقود المستقبل",
      title1: "مداد لتمكين",
      title2: "الشباب",
      desc: "نسعى لبناء قدرات الشباب وتعزيز دورهم في التنمية المجتمعية من خلال برامج ومبادرات نوعية تصنع التغيير الإيجابي",
      cta1: "اكتشف المزيد",
      cta2: "من نحن",
    },
    vision: {
      visionLabel: "الرؤية",
      visionTitle: "شباب ممكّن يقود التنمية",
      visionDesc: "أن نكون المنظمة الرائدة في تمكين الشباب وبناء قدراتهم ليكونوا قادة التغيير الإيجابي في مجتمعاتهم.",
      missionLabel: "الرسالة",
      missionTitle: "نبني جيلاً واعياً وقادراً",
      missionDesc: "تقديم برامج ومبادرات نوعية تسهم في استثمار طاقات الشباب وتعزيز قدراتهم على الاعتماد على الذات والمشاركة الفاعلة في بناء المجتمع.",
      valuesTag: "✦ ما يميزنا",
      valuesTitle: "قيمنا",
      v1Title: "الإبداع",
      v1Desc: "نؤمن بأن الشباب هم محرك الإبداع والتجديد في المجتمع",
      v2Title: "الشراكة",
      v2Desc: "نبني شراكات فاعلة مع مختلف القطاعات لتحقيق أثر مستدام",
      v3Title: "التميز",
      v3Desc: "نسعى لتقديم برامج نوعية ذات جودة عالية ومعايير متقدمة",
      v4Title: "المسؤولية",
      v4Desc: "نتحمل مسؤوليتنا تجاه المجتمع ونعمل بشفافية ومصداقية",
    },
    about: {
      badge: "تعرف علينا",
      title: "عن الجمعية",
      subtitle: "جمعية أهلية مقرها أبها بمنطقة عسير، تحت إشراف وزارة الموارد البشرية والتنمية الاجتماعية",
      classTag1: "التصنيف: المجموعة الرابعة - الخدمات الاجتماعية",
      classTag2: "منظمات تقدم خدمات إنسانية واجتماعية",
      goalsTag: "✦ أهدافنا",
      goalsTitle: "الأهداف الاستراتيجية",
      g1Title: "استثمار أوقات الشباب",
      g1Desc: "المساهمة في تقديم البرامج والمبادرات لاستثمار أوقات الشباب بشكل إيجابي",
      g2Title: "الاعتماد على الذات",
      g2Desc: "تعزيز القدرات الشبابية على الاعتماد على الذات والتنمية الشخصية",
      g3Title: "بناء المجتمع",
      g3Desc: "تفعيل دور الشباب في بناء وتنمية المجتمع",
      g4Title: "الاستشارات المهنية",
      g4Desc: "تقديم الاستشارات الشخصية والمهنية والسلوكية والاجتماعية للشباب",
      g5Title: "البرامج التعليمية",
      g5Desc: "تقديم البرامج والمبادرات لاستثمار أوقات الشباب بشكل إيجابي",
      boardTag: "القيادة",
      boardTitle: "مجلس الإدارة",
      boardChair: "رئيس مجلس الإدارة",
      boardVice: "نائب رئيس مجلس الإدارة",
      boardMember: "عضو",
      assemblyTag: "الأعضاء المؤسسون",
      assemblyTitle: "أعضاء الجمعية العمومية",
    },
    governance: {
      badge: "الشفافية والمصداقية",
      title: "الحوكمة",
      docTitle: "اللائحة الأساسية",
      docDesc: "يمكنك الاطلاع على اللائحة الأساسية للجمعية وتصفحها مباشرة من داخل الصفحة.",
      download: "تحميل اللائحة الأساسية",
      openNew: "فتح الملف في نافذة جديدة ↗",
    },
    reports: {
      badge: "الوثائق الرسمية",
      title: "التقارير",
      docTitle: "قرار التسجيل",
      docDesc: "يمكنك تصفح قرار التسجيل كاملاً من داخل الصفحة مع إمكانية التحميل أو الفتح في نافذة مستقلة.",
      download: "تحميل قرار التسجيل",
      openNew: "فتح الملف في نافذة جديدة ↗",
      number: "رقم",
      license: "ترخيص",
      date: "تاريخ",
    },
    beneficiaries: {
      badge: "أثرنا المجتمعي",
      title: "المستفيدون والمشاريع",
      initTag: "✦ ما نقدمه",
      initTitle: "مبادراتنا",
      i1Title: "برامج بناء القدرات",
      i1Desc: "دورات تدريبية متخصصة في القيادة والتواصل وإدارة المشاريع",
      i2Title: "الإرشاد المهني",
      i2Desc: "جلسات استشارية فردية وجماعية لتوجيه الشباب مهنياً",
      i3Title: "المبادرات التطوعية",
      i3Desc: "فرص تطوعية لتعزيز روح المسؤولية المجتمعية لدى الشباب",
      i4Title: "ريادة الأعمال",
      i4Desc: "دعم وتحفيز المشاريع الشبابية الناشئة وتنمية مهارات ريادة الأعمال",
    },
    contact: {
      badge: "نحب نسمع منك",
      title: "تواصل معنا",
      formTitle: "أرسل لنا رسالة",
      nameLabel: "الاسم الكامل",
      emailLabel: "البريد الإلكتروني",
      messageLabel: "رسالتك",
      send: "إرسال الرسالة",
      hqLabel: "المقر",
      hqValue: "أبها، منطقة عسير",
      licenseLabel: "الترخيص",
      joinTitle: "انضم إلى مداد",
      joinDesc: "كن جزءاً من رحلة تمكين الشباب وبناء المستقبل",
      joinBtn: "طلب عضوية",
    },
    footer: {
      orgName: "مداد لتمكين الشباب",
      orgDesc: "جمعية أهلية تحت إشراف وزارة الموارد البشرية والتنمية الاجتماعية",
      followUs: "تابعنا على",
      regInfo: "معلومات التسجيل",
      licenseNum: "رقم الترخيص",
      decree: "قرار",
      location: "أبها، منطقة عسير",
      rights: "مداد لتمكين الشباب. جميع الحقوق محفوظة",
    },
    notFound: {
      title: "الصفحة غير موجودة",
      desc: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
      back: "العودة للرئيسية",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      governance: "Governance",
      reports: "Reports",
      beneficiaries: "Beneficiaries",
      contact: "Contact",
      joinUs: "Join Us",
      langToggle: "عربي",
    },
    hero: {
      badge: "Towards an Empowered Generation Leading the Future",
      title1: "Midad for Youth",
      title2: "Empowerment",
      desc: "We strive to build youth capacities and enhance their role in community development through quality programs and initiatives that create positive change",
      cta1: "Discover More",
      cta2: "About Us",
    },
    vision: {
      visionLabel: "Vision",
      visionTitle: "Empowered Youth Leading Development",
      visionDesc: "To be the leading organization in youth empowerment and capacity building, enabling them to become leaders of positive change in their communities.",
      missionLabel: "Mission",
      missionTitle: "Building an Aware and Capable Generation",
      missionDesc: "Delivering quality programs and initiatives that invest in youth potential, enhance their self-reliance, and enable active participation in community building.",
      valuesTag: "✦ What Sets Us Apart",
      valuesTitle: "Our Values",
      v1Title: "Innovation",
      v1Desc: "We believe youth are the engine of creativity and innovation in society",
      v2Title: "Partnership",
      v2Desc: "We build effective partnerships across sectors for sustainable impact",
      v3Title: "Excellence",
      v3Desc: "We strive to deliver quality programs with advanced standards",
      v4Title: "Responsibility",
      v4Desc: "We take responsibility towards the community with transparency and integrity",
    },
    about: {
      badge: "Get to Know Us",
      title: "About the Organization",
      subtitle: "A civil society organization headquartered in Abha, Asir Region, under the supervision of the Ministry of Human Resources and Social Development",
      classTag1: "Classification: Group 4 - Social Services",
      classTag2: "Organizations providing humanitarian and social services",
      goalsTag: "✦ Our Goals",
      goalsTitle: "Strategic Objectives",
      g1Title: "Youth Time Investment",
      g1Desc: "Contributing to programs and initiatives for positive investment of youth time",
      g2Title: "Self-Reliance",
      g2Desc: "Enhancing youth capabilities for self-reliance and personal development",
      g3Title: "Community Building",
      g3Desc: "Activating the role of youth in building and developing the community",
      g4Title: "Professional Consulting",
      g4Desc: "Providing personal, professional, behavioral, and social consulting for youth",
      g5Title: "Educational Programs",
      g5Desc: "Delivering programs and initiatives for positive investment of youth time",
      boardTag: "Leadership",
      boardTitle: "Board of Directors",
      boardChair: "Chairman of the Board",
      boardVice: "Vice Chairman",
      boardMember: "Member",
      assemblyTag: "Founding Members",
      assemblyTitle: "General Assembly Members",
    },
    governance: {
      badge: "Transparency & Integrity",
      title: "Governance",
      docTitle: "Bylaws",
      docDesc: "You can view and browse the organization's bylaws directly on this page.",
      download: "Download Bylaws",
      openNew: "Open in new window ↗",
    },
    reports: {
      badge: "Official Documents",
      title: "Reports",
      docTitle: "Registration Decree",
      docDesc: "You can browse the full registration decree on this page with download and external view options.",
      download: "Download Registration Decree",
      openNew: "Open in new window ↗",
      number: "No.",
      license: "License",
      date: "Date",
    },
    beneficiaries: {
      badge: "Our Community Impact",
      title: "Beneficiaries & Projects",
      initTag: "✦ What We Offer",
      initTitle: "Our Initiatives",
      i1Title: "Capacity Building Programs",
      i1Desc: "Specialized training courses in leadership, communication, and project management",
      i2Title: "Career Guidance",
      i2Desc: "Individual and group consulting sessions for youth career guidance",
      i3Title: "Volunteer Initiatives",
      i3Desc: "Volunteer opportunities to foster community responsibility among youth",
      i4Title: "Entrepreneurship",
      i4Desc: "Supporting and motivating youth startups and developing entrepreneurial skills",
    },
    contact: {
      badge: "We'd Love to Hear from You",
      title: "Contact Us",
      formTitle: "Send Us a Message",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      messageLabel: "Your Message",
      send: "Send Message",
      hqLabel: "Headquarters",
      hqValue: "Abha, Asir Region",
      licenseLabel: "License",
      joinTitle: "Join Midad",
      joinDesc: "Be part of the journey to empower youth and build the future",
      joinBtn: "Request Membership",
    },
    footer: {
      orgName: "Midad for Youth Empowerment",
      orgDesc: "A civil society organization under the supervision of the Ministry of Human Resources and Social Development",
      followUs: "Follow Us",
      regInfo: "Registration Info",
      licenseNum: "License No.",
      decree: "Decree",
      location: "Abha, Asir Region",
      rights: "Midad for Youth Empowerment. All rights reserved",
    },
    notFound: {
      title: "Page Not Found",
      desc: "The page you're looking for doesn't exist or has been moved.",
      back: "Back to Home",
    },
  },
};