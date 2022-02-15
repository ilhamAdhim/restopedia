import { CONFIG } from "../global/config";

class DetailResto extends HTMLElement {
  constructor() {
    super();
  }

  set restaurant(restaurant) {
    this._detailRestaurant = restaurant;
    this._render();
  }

  _render() {
    this.innerHTML = `
    <div class="layout-detail">
        <div class="col detail-resto-card">
          <div class="resto-primary-info">
              <div> Restauran ${this._detailRestaurant?.name} </div>
              <div id="rating-count"> </div>
          </div>

          <img class="card-image" 
            src="${`${CONFIG.BASE_URL}/images/medium/${this._detailRestaurant?.pictureId}`}" 
            alt="${`Image of ${this._detailRestaurant?.name}`}">
          <div class="resto-overview"> Overview </div>
          <p class="resto-description"> 
            ${this._detailRestaurant?.description}
          </p>
          <div class="resto-location-detail">
            <i class="fa fa-map-marker icon"></i>
              <div> 
                ${this._detailRestaurant?.city},
                ${this._detailRestaurant?.address}
              </div>
          </div>
        </div>
        <div class="col detail-resto-card">
          <div class="menu-makanan">
            <h3> Daftar Makanan </h3>
            <div id="daftar-makanan"></div>
          </div>
          <hr>
          <div class="menu-minuman">
            <h3> Daftar Minuman </h3>
            <div id="daftar-minuman">
            </div>
          </div>
          <hr>
          <h3> Review Pengguna </h3>
          <div id="review-pengguna"></div>
        </div>
    </div>
    `;
    this._renderMenu();
    this._renderRating();
    this._renderReview();
  }

  _renderRating() {
    const ratingComponent = document.querySelector("#rating-count");
    for (let index = 0; index < this._detailRestaurant?.rating; index++) {
      // eslint-disable-next-line quotes
      ratingComponent.innerHTML += `<i class="fa fa-star"></i>`;
    }
  }

  _renderMenu() {
    const foodComponent = document.querySelector("#daftar-makanan");
    const drinkComponent = document.querySelector("#daftar-minuman");

    this._detailRestaurant?.menus?.foods.map((item) => {
      foodComponent.innerHTML += `
          <div class="card-menu">
            <div class="card-menu-header">
              <div class="reviewer"> ${item.name} </div>
            </div>
          </div>
        `;
    });

    this._detailRestaurant?.menus?.drinks.map((item) => {
      drinkComponent.innerHTML += `
          <div class="card-menu">
            <div class="card-menu-header">
              <div class="reviewer"> ${item.name} </div>
            </div>
          </div>
        `;
    });
  }

  _renderReview() {
    const reviewComponent = document.querySelector("#review-pengguna");
    let topReviews = [];

    if (this._detailRestaurant?.customerReviews?.length > 3)
      topReviews = this._detailRestaurant?.customerReviews?.slice(0, 3);
    else topReviews = this._detailRestaurant?.customerReviews;

    topReviews.map((item) => {
      reviewComponent.innerHTML += `
          <div class="card-review">
            <div class="card-review-header">
              <div class="reviewer"> ${item.name} </div>
              <div class="review-date"> ${item.date} </div>
            </div>
            <blockquote>
            ${item.review}
            </blockquote>
          </div>
        `;
    });
  }
}

customElements.define("detail-resto", DetailResto);
