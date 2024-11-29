import pages from "./pages";
import { categoryTabs } from "../../fixtures/categoryData";

export default {
  confirmUserLoggedOut(platformType) {
    pages.loginButton(platformType).contains("Log in").should("be.visible");
  },

  searchInputVisible() {
    pages.searchInput()
      .should("be.visible")
      .should("be.visible")
      .and("have.attr", "value", "");
  },

  searchForInput(input) {
    pages.searchInput().type(input);
    pages.gamesSelectedRoute().should("exist").and("be.visible");
  },

  checkGameVisible() {
    pages.firstGameFromList().should("be.visible");
  },

  checkListGameName(gameName) {
    pages.gameNameFromList().contains(gameName);
  },

  clickPlayButton() {
    pages.gameThumbnail()
      .realHover()
      .then(() => {
        pages.gameThumbnailPlayButton()
          .should("be.visible")
          .and("contain.text", "Play")
          .click();
      });
  },

  checkHeaderMessage(message) {
    pages.categoryHeaderMessage().should("have.text", message).and("be.visible");
  },

  verifyUrlSuffix(urlSuffix) {
    cy.url().should("include", urlSuffix);
  },

  openLanguageDropdown() {
    pages.languageDropdown().click();
    pages.languageMenu().should("be.visible");
  },

  clickOnLanguageFromDropdown(index) {
    pages.languageFromMenu(index).click();
  },

  checkLanguageFromDropdown(index, langCode) {
    pages.languageFromMenu(index).contains(langCode).and("be.visible");
  },

  verifyLanguageChange(urlSuffix, welcomeMessage, customerSupportMessage) {
    this.verifyUrlSuffix(urlSuffix);
    pages.welcomeMessage().should("have.text", welcomeMessage).and("be.visible");
    pages.customerSupportMessage()
      .should("have.text", customerSupportMessage)
      .and("be.visible");
  },

  openBurgerMenu() {
    pages.burgerIcon().should("exist").click({ force: true });
    pages.categoryColumn().should("be.visible");
  },

  openMainCategory(categoryName) {
    pages.mainCategory()
      .contains(categoryName)
      .should("exist")
      .click({ force: true });
  },

  openSubCategory(subCategoryName, categoryUrlSuffix) {
    pages.subCategory()
      .contains(subCategoryName)
      .should("exist")
      .click({ force: true });
    this.verifyUrlSuffix(categoryUrlSuffix);
  },

  checkCategoryTabSelected(categoryName) {
    pages.categoryTab()
      .contains(categoryName)
      .should("have.attr", "aria-selected", "true");
  },

  checkCategoryHeaderName(categoryName) {
    pages.categoryHeader().should("have.text", categoryName).and("be.visible");
  },

  verifyMainCategories() {
    pages.mainCategory().eq(0).should("have.text", "Home").and("be.visible");
    pages.mainCategory().eq(1).should("have.text", "Casino").and("be.visible");
    pages.mainCategory().eq(2).should("have.text", "Live Casino").and("be.visible");
    pages.mainCategory().eq(3).should("have.text", "Promotions").and("be.visible");
    pages.mainCategory().eq(4).should("have.text", "Customer Support").and("be.visible");
  },

  verifyCasinoSubCategories() {
    pages.subCategory().eq(0).should("have.text", "Popular ").and("be.visible");
    pages.subCategory().eq(1).should("have.text", "New").and("be.visible");
    pages.subCategory().eq(2).should("have.text", "Slots").and("be.visible");
    pages.subCategory().eq(3).should("have.text", "Jackpots").and("be.visible");
    pages.subCategory().eq(4).should("have.text", "Buy Feature").and("be.visible");
    pages.subCategory().eq(5).should("have.text", "Hot Slots").and("be.visible");
    pages.subCategory().eq(6).should("have.text", "Table Games").and("be.visible");
    pages.subCategory().eq(7).should("have.text", "Drops & Wins").and("be.visible");
    pages.subCategory().eq(8).should("have.text", "Cash Drop").and("be.visible");
    pages.subCategory().eq(9).scrollIntoView().should("have.text", "Arcade").and("be.visible");
    pages.subCategory().eq(10).should("have.text", "Cluster Games").and("be.visible");
    pages.subCategory().eq(11).should("have.text", "Latest Provider").and("be.visible");
    pages.subCategory().eq(12).should("have.text", "Exclusives").and("be.visible");
  },

  verifyLiveCasinoSubCategories() {
    pages.subCategory().eq(0).should("have.text", "Popular").and("be.visible");
    pages.subCategory().eq(1).should("have.text", "Game Shows").and("be.visible");
    pages.subCategory().eq(2).should("have.text", "Roulette").and("be.visible");
    pages.subCategory().eq(3).should("have.text", "Blackjack").and("be.visible");
    pages.subCategory().eq(4).should("have.text", "Baccarat").and("be.visible");
    pages.subCategory().eq(5).should("have.text", "Poker").and("be.visible");
  },

  verifyPromotionsSubCategories() {
    pages.subCategory().eq(0).should("have.text", "Welcome Bonus").and("be.visible");
    pages.subCategory().eq(1).should("have.text", "Boost XP").and("be.visible");
    pages.subCategory().eq(2).should("have.text", "Casino Promotions").and("be.visible");
    pages.subCategory().eq(3).should("have.text", "Live Casino Promotions").and("be.visible");
    pages.subCategory().eq(4).should("have.text", "All Promotions").and("be.visible");
  },

  verifyAllSubCategories() {
    categoryTabs.forEach((mainCategory) => {
      if (mainCategory.verifyMethod) {
        this.openMainCategory(mainCategory.name);
        this[mainCategory.verifyMethod]();
      }
    });
  },

  checkAllCategories() {
    categoryTabs.forEach((mainCategory) => {
      mainCategory.sections.forEach((section) => {
        this.openBurgerMenu();

        if (mainCategory.name === "Customer Support") {
          this.openMainCategory(mainCategory.name);
          this.verifyUrlSuffix(mainCategory.urlMap.main);
        } else {
          this.openMainCategory(mainCategory.name);
          this.openSubCategory(section, mainCategory.urlMap[section]);
        }

        if (mainCategory.name === "Promotions") {
          this.checkCategoryHeaderName(section);
        } else if (mainCategory.name === "Customer Support") {
          this.checkHeaderMessage(mainCategory.headerMessage.text);
        } else {
          this.checkCategoryTabSelected(section);
        }
      });
    });
  },
};