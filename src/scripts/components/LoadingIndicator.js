class LoadingIndicator {
  constructor() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <div class="loader-wrapper">
      <div class="spinner">
      Ini loading
      </div>
    </div>
    `;
  }
}

customElements.define("loading-indicator", LoadingIndicator);
