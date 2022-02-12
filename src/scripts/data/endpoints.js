import { CONFIG } from "../global/config";

export const ENDPOINT = {
	RESTAURANT_LIST: `${CONFIG.BASE_URL}/list`,
	DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};
