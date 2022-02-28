/* eslint-disable quotes */
/* eslint-disable no-undef */
import LikeRestoIDB from "../src/scripts/data/resto-idb";
import * as TestFactories from "./helpers/testFactories";

const mockRestoID = "rqdv5juczeskfw1e867";

const addLikeButtonToDOM = async () => {
  document.body.innerHTML = `
    <div id="likeButtonWrapper"></div>
  `;
};

describe("Liking a restaurant", () => {
  beforeEach(async () => await addLikeButtonToDOM());

  it("should display like button when the resto has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({
      mockRestoID: mockRestoID,
    });

    expect(
      document.querySelector('[aria-label="Like this restaurant"]')
    ).toBeTruthy();
  });

  it("should not display like button when the resto has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({
      mockRestoID: mockRestoID,
    });

    expect(
      document.querySelector('[aria-label="Unlike this restaurant"]')
    ).toBeFalsy();
  });

  it("should be able to like the resto", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({
      mockRestoID: mockRestoID,
    });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const likedResto = await LikeRestoIDB.getRestaurant(mockRestoID);
    expect(likedResto).toEqual(jasmine.objectContaining({ id: mockRestoID }));

    LikeRestoIDB.deleteRestaurant(mockRestoID);
  });
});
