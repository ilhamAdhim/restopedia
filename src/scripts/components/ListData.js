class ListData extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    console.log("ya ini data list");
    this.innerHTML = `
          
          `;
  }
}

customElements.define("list-data", ListData);
