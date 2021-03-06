class NavBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <nav>
          <div class="nav-logo">
          <img data-src="./images/logo-restopedia.png" class="lazyload" alt="logo-restopedia">
          </div>
          <button class="nav-hamburger" id="hamburger" href="#" aria-label="menu">
            <i class="fa fa-bars"></i>
        </button>
            <ul class="nav-menu" id="nav-menu">
                <li class="nav-item">
                    <a href="#/home" class="nav-link nav-link-grow-up">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#/favorite" class="nav-link nav-link-grow-up">Favorite</a>
                </li>
                <li class="nav-item">
                    <a href="https://github.com/ilhamAdhim" class="nav-link nav-link-grow-up" target="_blank" rel="noreferrer">About</a>
                </li>
            </ul>
            <ul class="sidenav" id="drawer">
              <li class="nav-item">
                  <a href="#/home" class="nav-link nav-link-grow-up">Home</a>
              </li>
              <li class="nav-item">
                  <a href="#/favorite" class="nav-link nav-link-grow-up">Favorite</a>
              </li>
              <li class="nav-item">
                  <a href="https://github.com/ilhamAdhim" class="nav-link nav-link-grow-up" target="_blank" rel="noreferrer">About</a>
              </li>
            </ul> 
          </nav>
        `;
  }
}

customElements.define("nav-bar", NavBar);
