import APIHandler from "../../src/scripts/data/api-handler";
import LikeButtonInitiator from "../../src/scripts/utils/set-like-button";

const createLikeButtonPresenterWithResto = async ({ mockRestoID }) => {
  const dataRestaurant = await APIHandler.getRestaurantDetail(mockRestoID);

  await LikeButtonInitiator.init({
    likeButtonWrapper: document.querySelector("#likeButtonWrapper"),
    data: dataRestaurant,
  });
};

export { createLikeButtonPresenterWithResto };
