class NavBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <nav>
          <div class="nav-logo">
          <img src="./images/logo-restopedia.png">
          </div>
          <button class="nav-hamburger" id="hamburger" href="#" aria-label="menu">
            <i class="fas fa-bars"></i>
        </button>
            <ul class="nav-menu" id="nav-menu">
                <li class="nav-item">
                    <a href="#/" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#/favorite" class="nav-link">Favorite</a>
                </li>
                <li class="nav-item">
                    <a href="https://github.com/ilhamAdhim" class="nav-link" target="_blank" rel="noreferrer">About</a>
                </li>
            </ul>
            <ul class="sidenav" id="drawer">
              <li class="nav-item">
                  <a href="/" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                  <a href="#" class="nav-link">Favorite</a>
              </li>
              <li class="nav-item">
                  <a href="https://github.com/ilhamAdhim" class="nav-link" target="_blank" rel="noreferrer">About</a>
              </li>
            </ul> 
          </nav>
        `;
  }
}

customElements.define("nav-bar", NavBar);
