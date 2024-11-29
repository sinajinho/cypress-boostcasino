import pages from "./pages";
import { categoryTabs } from "../../fixtures/categoryData";

export default {

    confirmUserLoggedOut(platformType) {
        pages.loginButton(platformType).contains('Log in').should('be.visible');
    },

    searchInputVisible() {
        pages.searchInput().should('be.visible')
        .should('be.visible')
        .and('have.attr', 'value', '');
    },

    searchForInput(input) {
        pages.searchInput().type(input);
        pages.gamesSelectedRoute().should('exist').and('be.visible');
    },

    checkGameVisible() {
        pages.firstGameFromList().should('be.visible');
    },

    checkListGameName(gameName) {
        pages.gameNameFromList().contains(gameName);
    },

    clickPlayButton() {
        pages.gameThumbnail() 
        .realHover()
        .then(() => {
          pages.gameThumbnailPlayButton()
            .should('be.visible') 
            .and('contain.text', 'Play')
            .click();
        });
    },

    checkHeaderMessage(message) {
        pages.categoryHeaderMessage().should('have.text', message);
    },

    verifyUrlSuffix(urlSuffix) {
        cy.url().should('include', urlSuffix);
    },

    // Language
    openLanguageDropdown() {
        pages.languageDropdown().click();
        pages.languageMenu().should('be.visible');
    },

    clickOnLanguageFromDropdown(index) {
        pages.languageFromMenu(index).click();
    },

    checkLanguageFromDropdown(index, langCode) {
        pages.languageFromMenu(index).contains(langCode);
    },

    verifyLanguageChange(urlSuffix, welcomeMessage, customerSupportMessage) {
        this.verifyUrlSuffix(urlSuffix)
        pages.welcomeMessage().should('have.text', welcomeMessage);
        pages.customerSupportMessage().should('have.text', customerSupportMessage);
    },

    // Category

 openBurgerMenu(){
    pages.burgerIcon().should('exist').click({ force: true });
    pages.categoryColumn().should('be.visible');
  },
  
  openMainCategory(categoryName) {
    pages.mainCategory().contains(categoryName).should('exist').click({ force: true });
  },
  
  openSubCategory(subCategoryName, categoryUrlSuffix) {
    pages.subCategory().contains(subCategoryName).should('exist').click({ force: true });
    this.verifyUrlSuffix(categoryUrlSuffix);
  },
  
  checkCategoryTabSelected(categoryName) {
    pages.categoryTab().contains(categoryName).should('have.attr', 'aria-selected', 'true');
  },
  
  checkCategoryHeaderName(categoryName) {
    pages.categoryHeader().should('have.text', categoryName);
  },
  
  verifyMainCategories() {
    pages.mainCategory().eq(0).should('have.text', 'Home').should('be.visible');
    pages.mainCategory().eq(1).should('have.text', 'Casino').should('be.visible');
    pages.mainCategory().eq(2).should('have.text', 'Live Casino').should('be.visible');
    pages.mainCategory().eq(3).should('have.text', 'Promotions').should('be.visible');
    pages.mainCategory().eq(4).should('have.text', 'Customer Support').should('be.visible');
  },
  
  verifyCasinoSubCategories() {
    pages.subCategory().eq(0).should('have.text', 'Popular ').should('be.visible');
    pages.subCategory().eq(1).should('have.text', 'New').should('be.visible');
    pages.subCategory().eq(2).should('have.text', 'Slots').should('be.visible');
    pages.subCategory().eq(3).should('have.text', 'Jackpots').should('be.visible');
    pages.subCategory().eq(4).should('have.text', 'Buy Feature').should('be.visible');
    pages.subCategory().eq(5).should('have.text', 'Hot Slots').should('be.visible');
    pages.subCategory().eq(6).should('have.text', 'Table Games').should('be.visible');
    pages.subCategory().eq(7).should('have.text', 'Drops & Wins').should('be.visible');
    pages.subCategory().eq(8).should('have.text', 'Cash Drop').should('be.visible');
    pages.subCategory().eq(9).scrollIntoView().should('have.text', 'Arcade').should('be.visible');
    pages.subCategory().eq(10).should('have.text', 'Cluster Games').should('be.visible');
    pages.subCategory().eq(11).should('have.text', 'Latest Provider').should('be.visible');
    pages.subCategory().eq(12).should('have.text', 'Exclusives').should('be.visible');
  },
  
  verifyLiveCasinoSubCategories() {
    pages.subCategory().eq(0).should('have.text', 'Popular').should('be.visible');
    pages.subCategory().eq(1).should('have.text', 'Game Shows').should('be.visible');
    pages.subCategory().eq(2).should('have.text', 'Roulette').should('be.visible');
    pages.subCategory().eq(3).should('have.text', 'Blackjack').should('be.visible');
    pages.subCategory().eq(4).should('have.text', 'Baccarat').should('be.visible');
    pages.subCategory().eq(5).should('have.text', 'Poker').should('be.visible');
  },
  
  verifyPromotionsSubCategories() {
    pages.subCategory().eq(0).should('have.text', 'Welcome Bonus').should('be.visible');
    pages.subCategory().eq(1).should('have.text', 'Boost XP').should('be.visible');
    pages.subCategory().eq(2).should('have.text', 'Casino Promotions').should('be.visible');
    pages.subCategory().eq(3).should('have.text', 'Live Casino Promotions').should('be.visible');
    pages.subCategory().eq(4).should('have.text', 'All Promotions').should('be.visible');
  },

  verifyAllSubCategories () {
    categoryTabs.forEach((mainCategory) => {
        if (mainCategory.verifyMethod) { 
            this.openMainCategory(mainCategory.name);
            this[mainCategory.verifyMethod]();
        }
    });
  },

  checkAllCategories() {
    // Navigate to all categories from burger menu
    categoryTabs.forEach((mainCategory) => {
        mainCategory.sections.forEach((section) => {
            this.openBurgerMenu();

            if (mainCategory.name === 'Customer Support') {
                this.openMainCategory(mainCategory.name);
                this.verifyUrlSuffix(mainCategory.urlMap.main);
            } else {
            this.openMainCategory(mainCategory.name);
            this.openSubCategory(section, mainCategory.urlMap[section]);
            };
  
            if (mainCategory.name === 'Promotions') {
                this.checkCategoryHeaderName(section);
            } else if (mainCategory.name === 'Customer Support') {
                this.checkHeaderMessage(mainCategory.headerMessage.text);
            } else {
                this.checkCategoryTabSelected(section);
            };
        });
    });
  },
}