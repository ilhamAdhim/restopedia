class JumbotronComponent extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <div class="jumbotron-wrapper">
      <div class="bg-image">
          <img src="./images/heros/hero-image_1.jpg" alt="Jumbotron Image - Chef Serving Food">
      </div>
      <div class="bg-text">
        <h1>Restopedia</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        <a class="button_jumbotron" href="#card-list">
          <span>
            Cari Restoran          
          </span>
        </a>
      </div>
    </div>

          `;
  }
}

customElements.define("jumbotron-component", JumbotronComponent);
