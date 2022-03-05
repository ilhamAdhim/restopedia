/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable no-undef */
Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
  I.see("Tidak ada restoran yang disukai", ".primary-message");
});

Scenario("test add a resto in favorite tab", async ({ I }) => {
  // Go to home page
  I.amOnPage("/");
  I.wait(1);
  I.seeElement(".button-jumbotron");
  I.click(locate(".button-jumbotron"));

  // Go to first restaurant
  I.wait(2);
  I.seeElement(".btn-lihat-detail");
  I.click(locate(".btn-lihat-detail"));

  let restoLiked = await I.grabTextFrom(".resto-primary-info div");
  // Menghapus kata 'restoran' yang ada dalam nama restoran (dalam halaman detail)
  restoLiked = restoLiked.split(" ").slice(1).join(" ");

  // Klik button like
  I.wait(2);
  I.seeElement("#likeButton");
  I.click(locate("#likeButton"));

  // Menuju ke halaman favorite
  I.amOnPage("/#/favorite");
  I.see(restoLiked, "card-item");
});
