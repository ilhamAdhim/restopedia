class Hero extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        

          `;
  }
}

customElements.define("hero-element", Hero);
