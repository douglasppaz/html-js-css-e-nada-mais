var translate = new Translate({
  en: 'lang/en.json',
});

document.querySelectorAll('[data-translate-to]').forEach((element) => {
  element.addEventListener('click', () => {
    var language = element.getAttribute('data-translate-to');
    translate.to(language);
  });
});

document.querySelectorAll('[data-translate-clear]').forEach((element) => {
  element.addEventListener('click', () => {
    translate.clear();
  });
});
