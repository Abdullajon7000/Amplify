const translations = {
    en: {
      app_title: "Teachers App",
      header_title: "Teachers",
      main_subtitle: "Available teachers",
      apply: "APPLY",
      teacher_azam_info: "IELTS - 8.5 | CEFR 70",
      teacher_zuhra_info: "IELTS - 8.0 | CEFR 70",
      teacher_sardor_info: "IELTS - 8.0",
      teacher_oybek_info: "IELTS - 7.5 | CEFR 67",
      teacher_shaxzod_info: "IELTS - 7.5",
      footer_teachers: "Teachers",
      footer_speaking: "Speaking",
      footer_lessons: "Lessons",
      footer_homework: "Homework",
      footer_profile: "Profile",
  
      profile_title: "Profile",
      profile_name: "Shakhzod Orifov",
      profile_edit: "Edit profile",
      profile_balance: "Balance:",
      profile_username: "Username:",
      profile_topup: "Top up balance",
      profile_active_lessons: "Active lessons",
      profile_enter_promo: "Enter promo code",
      profile_rating: "Rating",
      profile_contact: "Contact us",
      profile_rate_app: "Rate the app",
      nav_teachers: "Teachers",
      nav_speaking: "Speaking",
      nav_lessons: "Lessons",
      nav_homework: "Homework",
      nav_profile: "Profile"
    },
    uz: {
      app_title: "O‘qituvchilar Dasturi",
      header_title: "O‘qituvchilar",
      main_subtitle: "Mavjud o‘qituvchilar",
      apply: "MUROJAAT",
      teacher_azam_info: "IELTS - 8.5 | CEFR 70",
      teacher_zuhra_info: "IELTS - 8.0 | CEFR 70",
      teacher_sardor_info: "IELTS - 8.0",
      teacher_oybek_info: "IELTS - 7.5 | CEFR 67",
      teacher_shaxzod_info: "IELTS - 7.5",
      footer_teachers: "O‘qituvchilar",
      footer_speaking: "Gaplashmoq",
      footer_lessons: "Darslar",
      footer_homework: "Uy vazifasi",
      footer_profile: "Profil",
  
      profile_title: "Profil",
      profile_name: "Shaxzod Orifov",
      profile_edit: "Profilni tahrirlash",
      profile_balance: "Balans:",
      profile_username: "Foydalanuvchi nomi:",
      profile_topup: "Balansni to‘ldirish",
      profile_active_lessons: "Faol darslar",
      profile_enter_promo: "Promokod kiritish",
      profile_rating: "Reyting",
      profile_contact: "Biz bilan bog‘lanish",
      profile_rate_app: "Ilovani baholash",
      nav_teachers: "Ustozlar",
      nav_speaking: "Speaking",
      nav_lessons: "Darslar",
      nav_homework: "Uyga vazifalar",
      nav_profile: "Profil"
    },
    ru: {
      app_title: "Приложение для Учителей",
      header_title: "Учителя",
      main_subtitle: "Доступные учителя",
      apply: "ПОДАТЬ ЗАЯВКУ",
      teacher_azam_info: "IELTS - 8.5 | CEFR 70",
      teacher_zuhra_info: "IELTS - 8.0 | CEFR 70",
      teacher_sardor_info: "IELTS - 8.0",
      teacher_oybek_info: "IELTS - 7.5 | CEFR 67",
      teacher_shaxzod_info: "IELTS - 7.5",
      footer_teachers: "Учителя",
      footer_speaking: "Говорение",
      footer_lessons: "Уроки",
      footer_homework: "Домашнее задание",
      footer_profile: "Профиль",
  
      profile_title: "Профиль",
      profile_name: "Шахзод Орифов",
      profile_edit: "Редактировать профиль",
      profile_balance: "Баланс:",
      profile_username: "Имя пользователя:",
      profile_topup: "Пополнить баланс",
      profile_active_lessons: "Активные уроки",
      profile_enter_promo: "Ввести промокод",
      profile_rating: "Рейтинг",
      profile_contact: "Связаться с нами",
      profile_rate_app: "Оценить приложение",
      nav_teachers: "Учителя",
      nav_speaking: "Разговор",
      nav_lessons: "Уроки",
      nav_homework: "Домашка",
      nav_profile: "Профиль"
    },
    kr: {
      app_title: "Ўқитувчилар Дастури",
      header_title: "Ўқитувчилар",
      main_subtitle: "Мавжуд ўқитувчилар",
      apply: "МУРОЖАТ",
      teacher_azam_info: "IELTS - 8.5 | CEFR 70",
      teacher_zuhra_info: "IELTS - 8.0 | CEFR 70",
      teacher_sardor_info: "IELTS - 8.0",
      teacher_oybek_info: "IELTS - 7.5 | CEFR 67",
      teacher_shaxzod_info: "IELTS - 7.5",
      footer_teachers: "Ўқитувчилар",
      footer_speaking: "Спикинг",
      footer_lessons: "Дарслар",
      footer_homework: "Уй вазифаси",
      footer_profile: "Профил",
  
      profile_title: "Профил",
      profile_name: "Шахзод Орифов",
      profile_edit: "Профилни таҳрирлаш",
      profile_balance: "Баланс:",
      profile_username: "Фойдаланувчи номи:",
      profile_topup: "Балансни тўлдириш",
      profile_active_lessons: "Фаол дарслар",
      profile_enter_promo: "Промокод киритиш",
      profile_rating: "Рейтинг",
      profile_contact: "Биз билан боғланиш",
      profile_rate_app: "Иловани баҳолаш",
      nav_teachers: "Ўқитувчилар",
      nav_speaking: "Гапириш",
      nav_lessons: "Дарслар",
      nav_homework: "Уй вазифалари",
      nav_profile: "Профил"
    }
  };
  
  function updateLanguage(lang) {
    localStorage.setItem("lang", lang);
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }
  
  // Til saqlangan bo‘lsa uni yuklash, yo‘q bo‘lsa inglizcha
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    updateLanguage(savedLang);
  
    // Til dropdown elementlarini boshqarish
    const toggleBtn = document.getElementById("lang-toggle");
    const dropdown = document.getElementById("lang-dropdown");
  
    if (toggleBtn && dropdown) {
      toggleBtn.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
      });
  
      // Tashqariga bosilganda dropdownni yoping
      document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target) && e.target !== toggleBtn) {
          dropdown.style.display = "none";
        }
      });
  
      // Til tanlash tugmalariga event qo‘shish
      dropdown.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
          const lang = btn.getAttribute("data-lang");
          updateLanguage(lang);
          dropdown.style.display = "none";
        });
      });
    }
  });
  