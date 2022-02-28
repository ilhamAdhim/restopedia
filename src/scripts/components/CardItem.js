import { CONFIG } from "../global/config";

class CardItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this._render();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this._render();
  }

  _render() {
    this.className = "card";
    let description = this._restaurant?.description
      ?.split(" ")
      .slice(0, 20)
      .join(" ");

    this.innerHTML = `
      <img class="card-image" src="${`
          ${CONFIG.BASE_URL}/images/medium/${this._restaurant.pictureId}`}" alt="${`Image of ${this._restaurant?.name}`}">
      <div class="card-title">${this._restaurant?.name}</div>
      <div class="card-body">
          <div class="card-description">${`${description} . . .`} </div>
      </div>
      <div class="city-info">
          <div class="col">
             <div class="resto-location">
                <i class="fa fa-map-marker icon"></i>
                <span> ${this._restaurant?.city}</span>
             </div>
          </div>
          <div class="col">
              <a href="${`/#/detail/${this._restaurant?.id}`}" class="btn-lihat-detail"> 
              <span> Lihat Detail </span> 
              </a>
          </div>
      </div>`;
  }
}

customElements.define("card-item", CardItem);
