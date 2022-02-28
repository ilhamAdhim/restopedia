/* eslint-disable quotes */
/* eslint-disable no-undef */
import LikeRestoIDB from "../src/scripts/data/resto-idb";
import * as TestFactories from "./helpers/testFactories";

const mockRestoID = "rqdv5juczeskfw1e867";

const addUnLikeButtonToDOM = async () => {
  document.body.innerHTML = `
    <div id="likeButtonWrapper"></div>
  `;
};

describe("Unliking a restaurant", () => {
  beforeEach(async () => {
    addUnLikeButtonToDOM();
    await LikeRestoIDB.updateRestaurant({ id: mockRestoID });
  });

  afterEach(async () => {
    await LikeRestoIDB.deleteRestaurant(mockRestoID);
  });

  it("should display unlike button when the resto has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({
      mockRestoID: mockRestoID,
    });

    expect(
      document.querySelector('[aria-label="Unlike this restaurant"]')
    ).toBeTruthy();
  });

  it("should display like button when the resto has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({
      mockRestoID: mockRestoID,
    });

    expect(
      document.querySelector('[aria-label="Like this restaurant"]')
    ).toBeFalsy();
  });

  it("should be able to Unlike the resto", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({
      mockRestoID: mockRestoID,
    });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    expect(await LikeRestoIDB.getAllRestaurants()).toEqual([]);
  });
});
