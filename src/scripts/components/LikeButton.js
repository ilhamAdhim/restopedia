class LikeButton extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
       
            `;
  }
}

customElements.define("jumbotron-component", LikeButton);
