class JumbotronComponent extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <div class="jumbotron-wrapper">
          <div class="bg-image">
            <picture>
                <source media="(max-width: 600px)" srcset="./images/heros/hero-image_1-small.jpg" type="image/jpeg">
                <img 
                class="lazyload"
                data-src="./images/heros/hero-image_1-large.jpg" 
                alt="Jumbotron Image - Chef Serving Food"></img>
            </picture>
          </div>

          <div class="bg-text">
            <h1>Restopedia</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <a class="button-jumbotron" href="#card-list">
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
