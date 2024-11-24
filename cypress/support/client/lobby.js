import pages from "./pages"

export default {

    confirmUserLoggedOut() {
        pages.loginButton().contains('Log in').should('be.visible');
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


}