/* eslint-disable no-undef */
Feature("Unliking Restaurant");

Before(({ I }) => {
  // Go to home page
  I.amOnPage("/");
  I.wait(1);
  I.seeElement(".button-jumbotron");
  I.click(locate(".button-jumbotron"));

  // Go to first restaurant
  I.wait(2);
  I.seeElement(".btn-lihat-detail");
  I.click(locate(".btn-lihat-detail"));

  // Klik button like
  I.seeElement("#likeButton");
  I.click(locate("#likeButton"));
});

Scenario("test remove liked resto in favorite tab", async ({ I }) => {
  I.amOnPage("/#/favorite");

  I.seeElement(".btn-lihat-detail");
  I.click(locate(".btn-lihat-detail"));

  I.wait(2);
  I.seeElement("#likeButton");
  I.click(locate("#likeButton"));

  I.amOnPage("/#/favorite");
  I.see("Tidak ada restoran yang disukai", ".primary-message");
});
