var translate = new Translate({
  en: 'lang/en.json',
}, () => {
  new Toast('Página traduzida!', 2);
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

new Toast('Bem vindo!');
