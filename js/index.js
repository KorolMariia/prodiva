// Header nav products
let timeoutId;
const headerProductsWrapper = document.querySelector('.header__products--wrapper');
const headerNav = document.querySelector('.header__nav');
const headerItems = document.querySelectorAll('.header__item');

headerItems.forEach(item => item.addEventListener('click', (event) => {
  event.stopPropagation();
  headerNav.style.display = 'none';
}));

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

// Header search
const headerSearchBtns = document.querySelectorAll('.header__search--btn');
const headerSearchWrappers = document.querySelectorAll('.header__search--wrapper');
const headerSearchInputs = document.querySelectorAll('.header__search--input');
let timeoutIds = [];

const showSearch = () => {
  headerSearchWrappers.forEach((wrapper) => {
    wrapper.style.display = 'flex';
    headerSearchInputs.forEach((input) => {
      input.focus();
    });
  });
};

const hideSearch = () => {
  headerSearchWrappers.forEach((wrapper, index) => {
    timeoutIds[index] = setTimeout(function () {
      wrapper.style.display = 'none';
    }, 200);
  });
};

const clearHideSearchTimeout = (index) => {
  clearTimeout(timeoutIds[index]);
};

headerSearchBtns.forEach((btn) => {
  btn.addEventListener('mouseover', showSearch);
  btn.addEventListener('mouseleave', hideSearch);
});

headerSearchWrappers.forEach((wrapper, index) => {
  wrapper.addEventListener('mouseover', () => clearHideSearchTimeout(index));
  wrapper.addEventListener('mouseleave', () => hideSearch());
});



// Header cart list
const headerCartBtn = document.querySelector('.header__cart--btn');
const headerCartList = document.querySelector('.header__cart--wrapper');

const showCartList = () => {
  headerCartList.style.display = 'block';
}

const hideCartList = () => {
  timeoutId = setTimeout(function () {
    headerCartList.style.display = 'none';
  }, 200);
}

const clearHideCartListTimeout = () => {
  clearTimeout(timeoutId);
}

headerCartBtn.addEventListener('mouseover', showCartList);
headerCartBtn.addEventListener('mouseleave', hideCartList);
headerCartList.addEventListener('mouseover', clearHideCartListTimeout);
headerCartList.addEventListener('mouseleave', hideCartList);


// Languages select
document.addEventListener("DOMContentLoaded", function () {
  const selectedLanguage = document.querySelector(".header__selected-language");
  const languageOptions = document.querySelectorAll(".header__language-option");
  const languageMenu = document.querySelector(".header__language-options");

  let menuTimer;

  selectedLanguage.setAttribute("data-lang", "ru");
  selectedLanguage.textContent = "RU";

  languageOptions.forEach(option => {
    option.addEventListener("click", function () {
      const selectedLang = this.getAttribute("data-lang");
      selectedLanguage.setAttribute("data-lang", selectedLang);
      selectedLanguage.textContent = selectedLang.toUpperCase();

      languageOptions.forEach(option => option.classList.remove('active'));
      this.classList.add('active');
      const delay = 500;
      clearTimeout(menuTimer);
      menuTimer = setTimeout(() => {
        languageMenu.style.display = "none";
      }, delay);
    });

    if (option.getAttribute("data-lang") === "ru") {
      option.classList.add('active');
    }
  });
  selectedLanguage.addEventListener("mouseover", function () {
    languageMenu.style.display = "block";
    clearTimeout(menuTimer);
  });
  selectedLanguage.addEventListener("mouseleave", function () {
    const delay = 500;
    clearTimeout(menuTimer);
    menuTimer = setTimeout(() => {
      languageMenu.style.display = "none";
    }, delay);
  });


  languageMenu.addEventListener("mouseenter", function () {
    clearTimeout(menuTimer);
  });

  languageMenu.addEventListener("mouseleave", function () {
    const delay = 500;
    clearTimeout(menuTimer);
    menuTimer = setTimeout(() => {
      languageMenu.style.display = "none";
    }, delay);
  });
});

// Header close
const headerClose = document.querySelectorAll('.header__close--img');

headerClose.forEach(item => item.addEventListener('click', () => {
  headerNav.style.display = 'none';
  headerCartList.style.display = 'none';
  headerSearchWrappers.forEach(wrapper => {
    wrapper.style.display = 'none';
  })
}))