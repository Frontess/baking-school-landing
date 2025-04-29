// document.querySelectorAll("a").forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     const targetId = link.getAttribute("href").substring(1);
//     const targetElement = document.getElementById(targetId);
//     targetElement.scrollIntoView({ behavior: "smooth" });
//   });
// });

// const scrollToTop = document.getElementById("scrollToTop");
// scrollToTop.addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });
// document.querySelectorAll("a").forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     const targetId = link.getAttribute("href").substring(1);
//     const targetElement = document.getElementById(targetId);

//     if (targetElement) {
//       // Проверка на наличие целевого элемента
//       targetElement.scrollIntoView({ behavior: "smooth" });
//     } else {
//       console.warn(`Элемент с ID "${targetId}" не найден.`); // Вывод предупреждения в консоль
//     }
//   });
// });

// const scrollToTop = document.getElementById("scrollToTop");
// if (scrollToTop) {
//   // Проверка наличия кнопки "Scroll to Top"
//   scrollToTop.addEventListener("click", () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   });
// } else {
//   console.warn(`Кнопка "Scroll to Top" не найдена.`);
// }
// document.querySelectorAll("a").forEach((link) => {
//   link.addEventListener("click", (e) => {
//     const href = link.getAttribute("href");
//     if (href.startsWith("#")) {
//       // Обрабатываем только якорные ссылки
//       e.preventDefault();
//       const targetId = href.substring(1);
//       const targetElement = document.getElementById(targetId);

//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: "smooth" });
//       } else {
//         console.warn(`Элемент с ID "${targetId}" не найден.`);
//       }
//     }
//   });
// });
// // Данные для курсов
// import { courses } from "./courses.js";

// document.addEventListener("DOMContentLoaded", () => {
//   const courseTemplateElement = document.getElementById("course-template");
//   if (!courseTemplateElement) {
//     console.error("Шаблон курса не найден");
//     return;
//   }

//   const courseTemplate = courseTemplateElement.innerHTML;
//   const compiledTemplate = Handlebars.compile(courseTemplate);
//   const courseList = document.getElementById("courseList");

//   courseList.innerHTML = compiledTemplate({ courses });

//   const scrollToTopButton = document.getElementById("scrollToTop");
//   if (scrollToTopButton) {
//     scrollToTopButton.addEventListener("click", () => {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     });
//   }
// });

// window.openPopup = function (popupId) {
//   const popup = document.getElementById(popupId);
//   if (popup) {
//     popup.style.display = "flex";
//   }
// };

// window.closePopup = function (popupId) {
//   const popup = document.getElementById(popupId);
//   if (popup) {
//     popup.style.display = "none";
//   }
// };
import { courses } from "./courses.js"; // Импорт данных курсов

document.addEventListener("DOMContentLoaded", () => {
  const courseTemplateElement = document.getElementById("course-template");
  if (!courseTemplateElement) {
    console.error("Шаблон курса не найден");
    return;
  }

  const courseTemplate = courseTemplateElement.innerHTML;
  const compiledTemplate = Handlebars.compile(courseTemplate);
  const courseList = document.getElementById("courseList");

  courseList.innerHTML = compiledTemplate({ courses });

  // Добавляем обработчики кликов для кнопок "Подробнее"
  document.querySelectorAll(".open-popup").forEach((button) => {
    button.addEventListener("click", (event) => {
      const popupId = event.target.getAttribute("data-id");
      openPopup(`popup-${popupId}`);
    });
  });

  // Добавляем обработчики кликов для закрытия модальных окон
  document.querySelectorAll(".close-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const popupId = event.target.closest(".popup").id;
      closePopup(popupId);
    });
  });

  // Кнопка "Вверх"
  const scrollToTopButton = document.getElementById("scrollToTop");
  if (scrollToTopButton) {
    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Плавная прокрутка к якорным ссылкам
  document.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
          console.warn(`Элемент с ID "${targetId}" не найден.`);
        }
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Обработчики открытия модального окна на кнопку и изображение
  document.querySelectorAll(".open-popup, .course-image").forEach((element) => {
    element.addEventListener("click", (event) => {
      const popupId = event.target
        .closest(".course-card")
        .getAttribute("data-id");
      if (popupId) {
        openPopup(`popup-${popupId}`);
      }
    });
  });

  // Обработчик закрытия окна по клику на пустое место
  document.querySelectorAll(".popup").forEach((popup) => {
    popup.addEventListener("click", (event) => {
      if (event.target === popup) {
        closePopup(popup.id);
      }
    });
  });

  // Закрытие по кнопке-крестик
  document.querySelectorAll(".close-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const popupId = event.target.closest(".popup").id;
      closePopup(popupId);
    });
  });
});

// Функции открытия/закрытия модального окна
window.openPopup = function (popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.classList.add("active");
  }
};

window.closePopup = function (popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.classList.remove("active");
  }
};
