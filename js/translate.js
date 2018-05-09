class Translate {
  constructor(languages) {
    this.languages = languages;
  }

  to(lang) {
    var language_url = this.languages[lang];
    var request = new XMLHttpRequest();
    request.onload = () => {
      var data = JSON.parse(request.responseText);
      this.apply(data);
    };
    request.open('GET', language_url);
    request.send();
  }

  apply(data) {
    Object.keys(data).forEach((key) => {
      var elements = document.querySelectorAll('[data-translate=' + key + ']');
      elements.forEach((element) => {
        this.render(element, data[key]);
      });
    });
  }

  render(element, content) {
    if (element.getAttribute('data-translate-original') === null) {
      element.setAttribute('data-translate-original', element.innerHTML);
    }
    element.innerHTML = content;
  }

  clear() {
    document.querySelectorAll('[data-translate-original]').forEach((element) => {
      element.innerHTML = element.getAttribute('data-translate-original');
      element.removeAttribute('data-translate-original');
    });
  }
}
