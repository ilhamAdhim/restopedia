class ListData extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this._render();
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this._render();
  }

  _render() {
    // let delay = 0;
    this._restaurants?.forEach((restaurant) => {
      // delay += 50;
      this.className = "card-list";
      this.id = "card-list";
      const createCardItemElement = document.createElement("card-item");
      createCardItemElement.restaurant = restaurant;
      this.appendChild(createCardItemElement);
    });
  }
}

customElements.define("list-data", ListData);
