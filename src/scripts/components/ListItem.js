class ListItem extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    console.log("ya ini data item");
    this.innerHTML = `
            
            `;
  }
}

customElements.define("list-item", ListItem);
