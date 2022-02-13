class LoadingIndicator extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <div class="loading-container">
      <div class="loading-wrapper">
        <div class="lds-hourglass" id="loader"></div>
        <div class="loading-text"> Loading . . . </div>
      </div>
    </div>
    `;
  }
}

customElements.define("loading-indicator", LoadingIndicator);
