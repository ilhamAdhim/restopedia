import axios from "axios";
import { ENDPOINT } from "./endpoints";

class APIHandler {
  static async getAllRestaurant() {
    const responseAPI = await axios.get(ENDPOINT.RESTAURANT_LIST);
    return responseAPI.data.restaurants;
  }

  static async getRestaurantDetail(id) {
    const responseAPI = await axios.get(ENDPOINT.DETAIL_RESTAURANT(id));
    return responseAPI.data.restaurant;
  }
}

export default APIHandler;
