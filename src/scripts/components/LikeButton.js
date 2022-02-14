class LikeButton extends HTMLElement {
  connectedCallback() {
    this._renderNormal();
  }

  set likeStatus(statusLiked) {
    if (statusLiked) this._renderLiked();
    else this._renderNormal();
  }

  _renderLiked() {
    console.log("ini Liked");
    this.innerHTML = `
      <button class="btn-fav" id="likeButton" aria-label="Unlike this restaurant"> 
        <i class="fa fa-heart-o icon" aria-hidden="true"></i>
      </button>
            `;
  }

  _renderNormal() {
    console.log("ini ormal");
    this.innerHTML = `
      <button class="btn-fav" id="likeButton" aria-label="Like this restaurant"> 
        <i class="fa fa-heart icon" aria-hidden="true"></i>
      </button>
            `;
  }
}

customElements.define("like-button", LikeButton);
