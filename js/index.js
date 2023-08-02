

// Header nav products
let timeoutId;
const headerProductsWrapper = document.querySelector('.header__products--wrapper');
const headerNav = document.querySelector('.header__list');

const showHeaderNav = () => {
  headerNav.style.display = 'block';
}

const hideHeaderNav = () => {
  timeoutId = setTimeout(function () {
    headerNav.style.display = 'none';
  }, 200);
}

const clearHideMenuTimeout = () => {
  clearTimeout(timeoutId);
}

headerProductsWrapper.addEventListener('mouseover', showHeaderNav);
headerProductsWrapper.addEventListener('mouseleave', hideHeaderNav);
headerNav.addEventListener('mouseover', clearHideMenuTimeout);
headerNav.addEventListener('mouseleave', hideHeaderNav);

// Languages select
document.addEventListener("DOMContentLoaded", function () {
  const selectedLanguage = document.querySelector(".header__selected-language");
  const languageOptions = document.querySelectorAll(".header__language-option");

  selectedLanguage.setAttribute("data-lang", "ru");
  selectedLanguage.textContent = "RU";

  languageOptions.forEach(option => {
    option.addEventListener("click", function () {
      const selectedLang = this.getAttribute("data-lang");
      selectedLanguage.setAttribute("data-lang", selectedLang);
      selectedLanguage.textContent = selectedLang.toUpperCase();

      languageOptions.forEach(option => option.classList.remove('active'));
      this.classList.add('active');
    });

    if (option.getAttribute("data-lang") === "ru") {
      option.classList.add('active');
    }
  });
});





