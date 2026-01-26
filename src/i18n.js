import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "Home": "Home",
      "About": "About",
      "Specialities": "Specialities",
      "Hospitals": "Hospitals",
      "Doctors": "Doctors",
      "Patient Journey": "Patient Journey",
      "Services": "Services",
      "Knowledge": "Knowledge",
      "Blog": "Blog",
      "Video": "Video",
      "Gallery": "Gallery",
      "Enquiry": "Enquiry",
      "Contact Us": "Contact Us",
      "Free Consultation": "Free Consultation",
      "hero_title": "Connecting the World to <green>India’s Healthcare</green> Excellence",
      "hero_desc": "Your trusted partner for world-class, affordable medical treatment in India. We help international patients access top hospitals, leading doctors, and seamless medical journeys across India — especially North India.",
      "send_enquiry": "Send Enquiry",
      "get_free_consultation": "Get Free Consultation",
      "verified_response": "Verified Response Center",
      "full_name": "Full Name",
      "country": "Country",
      "city": "City",
      "mobile_number": "Mobile Number",
      "clinical_requirement": "Clinical requirement...",
      "submitting": "Submitting...",
      "institutional_profile": "Institutional Profile",
      "vision_integrity": "Vision & Integrity",
      "about_p1": "We operate as a bridge between international healthcare seekers and India’s premier medical institutions.",
      "about_p2": "Our operations are built on three core pillars: Clinical Transparency, Ethical Facilitation, and Uncompromising Patient Support.",
      "company_profile": "Company Profile",
      "why_india_title": "Why Choose India for Treatment?",
      "why_india_desc": "India combines world-class clinical expertise with advanced technology at a fraction of global costs.",
      "speciality_expertise": "Institutional Expertise",
      "multi_speciality": "Multi-Speciality Care",
      "patient_support": "Patient Support",
      "support_desc": "We manage clinical complexity so you focus on healing."
    }
  },
  ar: {
    translation: {
      "Home": "الرئيسية",
      "About": "من نحن",
      "Specialities": "التخصصات",
      "Hospitals": "المستشفيات",
      "Doctors": "الأطباء",
      "Patient Journey": "رحلة المريض",
      "Services": "الخدمات",
      "Knowledge": "المعرفة",
      "Blog": "المدونة",
      "Video": "فيديو",
      "Gallery": "المعرض",
      "Enquiry": "استفسار",
      "Contact Us": "اتصل بنا",
      "Free Consultation": "استشارة مجانية",
      "hero_title": "ربط العالم بـ <green>تميز الرعاية الصحية في الهند</green>",
      "hero_desc": "شريكك الموثوق للعلاج الطبي بأسعار معقولة ومستوى عالمي في الهند. نحن نساعد المرضى الدوليين في الوصول إلى أفضل المستشفيات والأطباء المتميزين ورحلات طبية سلسة عبر الهند - خاصة شمال الهند.",
      "send_enquiry": "إرسال الاستفسار",
      "get_free_consultation": "احصل على استشارة طبية مجانية",
      "verified_response": "مركز استجابة معتمد",
      "full_name": "الاسم الكامل",
      "country": "البلد",
      "city": "المدينة",
      "mobile_number": "رقم الهاتف",
      "clinical_requirement": "المتطلبات السريرية...",
      "submitting": "جاري الإرسال...",
      "institutional_profile": "الملف المؤسسي",
      "vision_integrity": "الرؤية والنزاهة",
      "about_p1": "نعمل كجسر بين الباحثين عن الرعاية الصحية الدولية والمؤسسات الطبية الرائدة في الهند.",
      "about_p2": "تعتمد عملياتنا على ثلاث ركائز أساسية: الشفافية السريرية، والتسهيل الأخلاقي، ودعم المرضى الذي لا يتزعزع.",
      "company_profile": "ملف الشركة",
      "why_india_title": "لماذا تختار الهند للعلاج؟",
      "why_india_desc": "تجمع الهند بين الخبرة السريرية العالمية والتكنولوجيا المتقدمة بجزء بسيط من التكاليف العالمية.",
      "speciality_expertise": "الخبرة المؤسسية",
      "multi_speciality": "رعاية متعددة التخصصات",
      "patient_support": "دعم المرضى",
      "support_desc": "نحن ندير التعقيد السريري حتى تركز أنت على الشفاء."
    }
  },
  fr: {
    translation: {
      "Home": "Accueil",
      "About": "À propos",
      "Specialities": "Spécialités",
      "Hospitals": "Hôpitaux",
      "Doctors": "Médecins",
      "Patient Journey": "Parcours Patient",
      "Services": "Services",
      "Knowledge": "Connaissances",
      "Blog": "Blog",
      "Video": "Vidéo",
      "Gallery": "Galerie",
      "Enquiry": "Enquête",
      "Contact Us": "Contactez-nous",
      "Free Consultation": "Consultation Gratuite",
      "hero_title": "Relier le monde à <green>l'excellence des soins de santé en Inde</green>",
      "hero_desc": "Votre partenaire de confiance pour des traitements médicaux de classe mondiale et abordables en Inde. Nous aidons les patients internationaux à accéder aux meilleurs hôpitaux, aux médecins de premier plan et à des parcours médicaux fluides à travers l'Inde — en particulier le nord de l'Inde.",
      "send_enquiry": "Envoyer l'enquête",
      "get_free_consultation": "Obtenez une consultation médicale gratuite",
      "verified_response": "Centre de réponse vérifié",
      "full_name": "Nom complet",
      "country": "Pays",
      "city": "Ville",
      "mobile_number": "Numéro de téléphone",
      "clinical_requirement": "Exigence clinique...",
      "submitting": "Envoi en cours...",
      "institutional_profile": "Profil Institutionnel",
      "vision_integrity": "Vision & Intégrité",
      "about_p1": "Nous opérons comme un pont entre les demandeurs de soins de santé internationaux et les premières institutions médicales de l'Inde.",
      "about_p2": "Nos opérations reposent sur trois piliers fondamentaux : transparence clinique, facilitation éthique et soutien sans compromis aux patients.",
      "company_profile": "Profil de l'entreprise",
      "why_india_title": "Pourquoi choisir l'Inde pour un traitement ?",
      "why_india_desc": "L'Inde combine une expertise clinique de classe mondiale avec une technologie de pointe pour une fraction des coûts mondiaux.",
      "speciality_expertise": "Expertise Institutionnelle",
      "multi_speciality": "Soins multi-spécialités",
      "patient_support": "Soutien aux patients",
      "support_desc": "Nous gérons la complexité clinique afin que vous puissiez vous concentrer sur la guérison."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

// Handle RTL for Arabic
i18n.on('languageChanged', (lng) => {
  if (lng === 'ar') {
    document.dir = 'rtl';
  } else {
    document.dir = 'ltr';
  }
});

export default i18n;
