const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "en";

const elements = document.querySelectorAll("[data-es]");

// Idioma inicial: inglés
document.documentElement.lang = "en";

elements.forEach(element => {
    element.textContent = element.getAttribute("data-en");
});

languageBtn.textContent = "ES";

// Cambio de idioma
languageBtn.addEventListener("click", () => {

    if (currentLanguage === "en") {
        currentLanguage = "es";
        languageBtn.textContent = "EN";
    } else {
        currentLanguage = "en";
        languageBtn.textContent = "ES";
    }

    document.documentElement.lang = currentLanguage;

    elements.forEach(element => {
        element.textContent =
            element.getAttribute(`data-${currentLanguage}`);
    });
});