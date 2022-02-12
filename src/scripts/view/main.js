import axios from "axios";
import { ENDPOINT } from "../data/endpoints";
import { navbar } from "../utils/setnavbar.js";
import "../utils/subscribe-sw.js";

const main = () => {
  let dataRestaurant = [];
  const restaurantListElement = document.querySelector("list-data");

  const fetchRestaurantData = async () => {
    try {
      let responseAPI = await axios.get(ENDPOINT.RESTAURANT_LIST);
      dataRestaurant = responseAPI.data;
      console.log(dataRestaurant);
      restaurantListElement.restaurants = dataRestaurant;
    } catch (error) {
      console.log("Offline detected, getting data from cache . . .");
      // TODO : Fetch data dari cache
    }
  };

  fetchRestaurantData();
  navbar();
};

export default main;
