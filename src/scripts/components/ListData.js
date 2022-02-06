import dataJSON from "../../DATA.json";

class ListData extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this._restaurants = dataJSON?.restaurants;
    this._render();
  }

  _render() {
    // let delay = 0;
    this._restaurants?.forEach((restaurant) => {
      // delay += 50;
      this.className = "card-list";
      this.description = restaurant?.description
        ?.split(" ")
        .slice(0, 20)
        .join(" ");

      this.innerHTML += `
      <div class="card">
        <img class="card-image" src="${
          restaurant?.pictureId
        }" alt="${`Image of ${restaurant?.name}`}">
        <div class="card-title">${restaurant?.name}</div>
        <div class="card-body">
            <div class="card-description">${`${this.description} . . .`} </div>
        </div>
        <div class="city-info">
        <div class="col">
            <i class="fa fa-map-marker icon"></i>
            <span> ${restaurant?.city}</span>
        </div>
        
        </div>
      </div>`;
    });
  }
}

customElements.define("list-data", ListData);
