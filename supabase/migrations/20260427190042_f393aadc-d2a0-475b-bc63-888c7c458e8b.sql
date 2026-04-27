
-- Enable realtime on content tables so admin edits propagate instantly
ALTER TABLE public.site_content REPLICA IDENTITY FULL;
ALTER TABLE public.site_images REPLICA IDENTITY FULL;
ALTER TABLE public.site_reports REPLICA IDENTITY FULL;
ALTER TABLE public.board_members REPLICA IDENTITY FULL;
ALTER TABLE public.assembly_members REPLICA IDENTITY FULL;
ALTER TABLE public.goals REPLICA IDENTITY FULL;
ALTER TABLE public.core_values REPLICA IDENTITY FULL;
ALTER TABLE public.initiatives REPLICA IDENTITY FULL;

DO $$
BEGIN
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.site_content; EXCEPTION WHEN duplicate_object THEN NULL; END;
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.site_images; EXCEPTION WHEN duplicate_object THEN NULL; END;
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.site_reports; EXCEPTION WHEN duplicate_object THEN NULL; END;
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.board_members; EXCEPTION WHEN duplicate_object THEN NULL; END;
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.assembly_members; EXCEPTION WHEN duplicate_object THEN NULL; END;
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.goals; EXCEPTION WHEN duplicate_object THEN NULL; END;
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.core_values; EXCEPTION WHEN duplicate_object THEN NULL; END;
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.initiatives; EXCEPTION WHEN duplicate_object THEN NULL; END;
END $$;

-- Add unique constraint so we can upsert by (section, key) safely
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'site_content_section_key_unique'
  ) THEN
    -- Remove duplicates first if any
    DELETE FROM public.site_content a USING public.site_content b
      WHERE a.ctid < b.ctid AND a.section = b.section AND a.key = b.key;
    ALTER TABLE public.site_content
      ADD CONSTRAINT site_content_section_key_unique UNIQUE (section, key);
  END IF;
END $$;

-- Insert / update full content set keyed by (section, key)
INSERT INTO public.site_content (section, key, value_ar, value_en) VALUES
  -- nav
  ('nav','home','الرئيسية','Home'),
  ('nav','about','عن الجمعية','About'),
  ('nav','governance','الحوكمة','Governance'),
  ('nav','reports','التقارير','Reports'),
  ('nav','beneficiaries','المستفيدون','Beneficiaries'),
  ('nav','contact','تواصل معنا','Contact'),
  ('nav','joinUs','انضم إلينا','Join Us'),
  ('nav','langToggle','EN','عربي'),

  -- hero
  ('hero','badge','نحو جيل ممكّن يقود المستقبل','Towards an Empowered Generation Leading the Future'),
  ('hero','title1','مداد لتمكين','Midad for Youth'),
  ('hero','title2','الشباب','Empowerment'),
  ('hero','desc','نسعى لبناء قدرات الشباب وتعزيز دورهم في التنمية المجتمعية من خلال برامج ومبادرات نوعية تصنع التغيير الإيجابي','We strive to build youth capacities and enhance their role in community development through quality programs and initiatives that create positive change'),
  ('hero','cta1','اكتشف المزيد','Discover More'),
  ('hero','cta2','من نحن','About Us'),

  -- vision
  ('vision','visionLabel','الرؤية','Vision'),
  ('vision','visionTitle','شباب ممكّن يقود التنمية','Empowered Youth Leading Development'),
  ('vision','visionDesc','أن نكون المنظمة الرائدة في تمكين الشباب وبناء قدراتهم ليكونوا قادة التغيير الإيجابي في مجتمعاتهم.','To be the leading organization in youth empowerment and capacity building, enabling them to become leaders of positive change in their communities.'),
  ('vision','missionLabel','الرسالة','Mission'),
  ('vision','missionTitle','نبني جيلاً واعياً وقادراً','Building an Aware and Capable Generation'),
  ('vision','missionDesc','تقديم برامج ومبادرات نوعية تسهم في استثمار طاقات الشباب وتعزيز قدراتهم على الاعتماد على الذات والمشاركة الفاعلة في بناء المجتمع.','Delivering quality programs and initiatives that invest in youth potential, enhance their self-reliance, and enable active participation in community building.'),
  ('vision','valuesTag','✦ ما يميزنا','✦ What Sets Us Apart'),
  ('vision','valuesTitle','قيمنا','Our Values'),
  ('vision','v1Title','الإبداع','Innovation'),
  ('vision','v1Desc','نؤمن بأن الشباب هم محرك الإبداع والتجديد في المجتمع','We believe youth are the engine of creativity and innovation in society'),
  ('vision','v2Title','الشراكة','Partnership'),
  ('vision','v2Desc','نبني شراكات فاعلة مع مختلف القطاعات لتحقيق أثر مستدام','We build effective partnerships across sectors for sustainable impact'),
  ('vision','v3Title','التميز','Excellence'),
  ('vision','v3Desc','نسعى لتقديم برامج نوعية ذات جودة عالية ومعايير متقدمة','We strive to deliver quality programs with advanced standards'),
  ('vision','v4Title','المسؤولية','Responsibility'),
  ('vision','v4Desc','نتحمل مسؤوليتنا تجاه المجتمع ونعمل بشفافية ومصداقية','We take responsibility towards the community with transparency and integrity'),

  -- about
  ('about','badge','تعرف علينا','Get to Know Us'),
  ('about','title','عن الجمعية','About the Organization'),
  ('about','subtitle','جمعية أهلية مقرها أبها بمنطقة عسير، تحت إشراف وزارة الموارد البشرية والتنمية الاجتماعية','A civil society organization headquartered in Abha, Asir Region, under the supervision of the Ministry of Human Resources and Social Development'),
  ('about','classTag1','التصنيف: المجموعة الرابعة - الخدمات الاجتماعية','Classification: Group 4 - Social Services'),
  ('about','classTag2','منظمات تقدم خدمات إنسانية واجتماعية','Organizations providing humanitarian and social services'),
  ('about','goalsTag','✦ أهدافنا','✦ Our Goals'),
  ('about','goalsTitle','الأهداف الاستراتيجية','Strategic Objectives'),
  ('about','g1Title','استثمار أوقات الشباب','Youth Time Investment'),
  ('about','g1Desc','المساهمة في تقديم البرامج والمبادرات لاستثمار أوقات الشباب بشكل إيجابي','Contributing to programs and initiatives for positive investment of youth time'),
  ('about','g2Title','الاعتماد على الذات','Self-Reliance'),
  ('about','g2Desc','تعزيز القدرات الشبابية على الاعتماد على الذات والتنمية الشخصية','Enhancing youth capabilities for self-reliance and personal development'),
  ('about','g3Title','بناء المجتمع','Community Building'),
  ('about','g3Desc','تفعيل دور الشباب في بناء وتنمية المجتمع','Activating the role of youth in building and developing the community'),
  ('about','g4Title','الاستشارات المهنية','Professional Consulting'),
  ('about','g4Desc','تقديم الاستشارات الشخصية والمهنية والسلوكية والاجتماعية للشباب','Providing personal, professional, behavioral, and social consulting for youth'),
  ('about','g5Title','البرامج التعليمية','Educational Programs'),
  ('about','g5Desc','تقديم البرامج والمبادرات لاستثمار أوقات الشباب بشكل إيجابي','Delivering programs and initiatives for positive investment of youth time'),
  ('about','boardTag','القيادة','Leadership'),
  ('about','boardTitle','مجلس الإدارة','Board of Directors'),
  ('about','boardChair','رئيس مجلس الإدارة','Chairman of the Board'),
  ('about','boardVice','نائب رئيس مجلس الإدارة','Vice Chairman'),
  ('about','boardMember','عضو','Member'),
  ('about','assemblyTag','الأعضاء المؤسسون','Founding Members'),
  ('about','assemblyTitle','أعضاء الجمعية العمومية','General Assembly Members'),

  -- governance
  ('governance','badge','الشفافية والمصداقية','Transparency & Integrity'),
  ('governance','title','الحوكمة','Governance'),
  ('governance','docTitle','اللائحة الأساسية','Bylaws'),
  ('governance','docDesc','يمكنك الاطلاع على اللائحة الأساسية للجمعية وتصفحها مباشرة من داخل الصفحة.','You can view and browse the organization''s bylaws directly on this page.'),
  ('governance','download','تحميل اللائحة الأساسية','Download Bylaws'),
  ('governance','openNew','فتح الملف في نافذة جديدة ↗','Open in new window ↗'),
  ('governance','pdfUrl','/docs/bylaws.pdf','/docs/bylaws.pdf'),

  -- reports
  ('reports','badge','الوثائق الرسمية','Official Documents'),
  ('reports','title','التقارير','Reports'),
  ('reports','docTitle','قرار التسجيل','Registration Decree'),
  ('reports','docDesc','يمكنك تصفح قرار التسجيل كاملاً من داخل الصفحة مع إمكانية التحميل أو الفتح في نافذة مستقلة.','You can browse the full registration decree on this page with download and external view options.'),
  ('reports','download','تحميل قرار التسجيل','Download Registration Decree'),
  ('reports','openNew','فتح الملف في نافذة جديدة ↗','Open in new window ↗'),
  ('reports','number','رقم','No.'),
  ('reports','license','ترخيص','License'),
  ('reports','date','تاريخ','Date'),
  ('reports','numberValue','ED047745','ED047745'),
  ('reports','licenseValue','1000862200','1000862200'),
  ('reports','dateValue','1447/09/24 هـ','1447/09/24 H'),
  ('reports','pdfUrl','/docs/registration-decree.pdf','/docs/registration-decree.pdf'),

  -- beneficiaries
  ('beneficiaries','badge','أثرنا المجتمعي','Our Community Impact'),
  ('beneficiaries','title','المستفيدون والمشاريع','Beneficiaries & Projects'),
  ('beneficiaries','initTag','✦ ما نقدمه','✦ What We Offer'),
  ('beneficiaries','initTitle','مبادراتنا','Our Initiatives'),
  ('beneficiaries','i1Title','برامج بناء القدرات','Capacity Building Programs'),
  ('beneficiaries','i1Desc','دورات تدريبية متخصصة في القيادة والتواصل وإدارة المشاريع','Specialized training courses in leadership, communication, and project management'),
  ('beneficiaries','i2Title','الإرشاد المهني','Career Guidance'),
  ('beneficiaries','i2Desc','جلسات استشارية فردية وجماعية لتوجيه الشباب مهنياً','Individual and group consulting sessions for youth career guidance'),
  ('beneficiaries','i3Title','المبادرات التطوعية','Volunteer Initiatives'),
  ('beneficiaries','i3Desc','فرص تطوعية لتعزيز روح المسؤولية المجتمعية لدى الشباب','Volunteer opportunities to foster community responsibility among youth'),
  ('beneficiaries','i4Title','ريادة الأعمال','Entrepreneurship'),
  ('beneficiaries','i4Desc','دعم وتحفيز المشاريع الشبابية الناشئة وتنمية مهارات ريادة الأعمال','Supporting and motivating youth startups and developing entrepreneurial skills'),

  -- contact
  ('contact','badge','نحب نسمع منك','We''d Love to Hear from You'),
  ('contact','title','تواصل معنا','Contact Us'),
  ('contact','formTitle','أرسل لنا رسالة','Send Us a Message'),
  ('contact','nameLabel','الاسم الكامل','Full Name'),
  ('contact','emailLabel','البريد الإلكتروني','Email Address'),
  ('contact','messageLabel','رسالتك','Your Message'),
  ('contact','send','إرسال الرسالة','Send Message'),
  ('contact','hqLabel','المقر','Headquarters'),
  ('contact','hqValue','أبها، منطقة عسير','Abha, Asir Region'),
  ('contact','licenseLabel','الترخيص','License'),
  ('contact','licenseValue','1000862200','1000862200'),
  ('contact','phone','','' ),
  ('contact','email','',''),
  ('contact','linkedinUrl','#','#'),
  ('contact','twitterUrl','#','#'),
  ('contact','joinTitle','انضم إلى مداد','Join Midad'),
  ('contact','joinDesc','كن جزءاً من رحلة تمكين الشباب وبناء المستقبل','Be part of the journey to empower youth and build the future'),
  ('contact','joinBtn','طلب عضوية','Request Membership'),

  -- footer
  ('footer','orgName','مداد لتمكين الشباب','Midad for Youth Empowerment'),
  ('footer','orgDesc','جمعية أهلية تحت إشراف وزارة الموارد البشرية والتنمية الاجتماعية','A civil society organization under the supervision of the Ministry of Human Resources and Social Development'),
  ('footer','followUs','تابعنا على','Follow Us'),
  ('footer','regInfo','معلومات التسجيل','Registration Info'),
  ('footer','licenseNum','رقم الترخيص','License No.'),
  ('footer','decree','قرار','Decree'),
  ('footer','location','أبها، منطقة عسير','Abha, Asir Region'),
  ('footer','rights','مداد لتمكين الشباب. جميع الحقوق محفوظة','Midad for Youth Empowerment. All rights reserved')
ON CONFLICT (section, key) DO NOTHING;
