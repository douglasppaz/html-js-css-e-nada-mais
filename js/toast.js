class Toast {
  constructor(text, seconds) {
    this.text = text;
    this.seconds = (seconds || 3) + 1;

    this.createElement();
    
    setTimeout(() => {
      this.hide();
    }, this.seconds * 1000);
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.innerHTML = this.text;
    this.element.classList.add('toast');
    document.body.appendChild(this.element);
  }

  hide() {
    this.element.classList.add('toast-out');
    setTimeout(() => {
      this.element.remove();
    }, 1000);
  }
}
