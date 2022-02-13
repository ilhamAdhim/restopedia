class LikeButton extends HTMLElement {
  connectedCallback() {
    this._renderNormal();
  }

  _renderLiked() {
    this.innerHTML = `
    <button class="btn-fav" aria-label="Unlike this restaurant"> 
      <i class="fa fa-heart-o icon" aria-hidden="true"></i>
    </button>
            `;
  }
  _renderNormal() {
    this.innerHTML = `
    <button class="btn-fav" aria-label="Like this restaurant"> 
      <i class="fa fa-heart icon" aria-hidden="true"></i>
    </button>
            `;
  }
}

customElements.define("jumbotron-component", LikeButton);
