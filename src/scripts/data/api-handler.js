import axios from "axios";
import { ENDPOINT } from "./endpoints";

export const getAllRestaurant = async () => {
	console.log(" cek ini restaurant data");

	let responseAPI = await axios.get(ENDPOINT.DETAIL_RESTAURANT);
	console.log(responseAPI.data, "ini restaurant data");
};
export const getRestaurantDetail = (id) => {};
