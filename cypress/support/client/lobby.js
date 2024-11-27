import pages from "./pages";

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
        cy.url().should('include', urlSuffix);
        pages.welcomeMessage().should('have.text', welcomeMessage);
        pages.customerSupportMessage().should('have.text', customerSupportMessage);
    },
}