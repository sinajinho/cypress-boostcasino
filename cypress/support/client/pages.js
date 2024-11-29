export default {

    loginButton(platformType) {
        if (platformType === 'mobile') {
            return cy.get('.sc-jqUVSM')
        } else {
            return cy.get('.sc-crXcEl.cQZcGq');
        };
    },

    welcomeMessage() {
        return cy.get('.sc-hHLeRK.kztSfJ');
    },

    customerSupportMessage() {
        return cy.get('.sc-gFGZVQ').eq(4);
    },

    categoryHeaderMessage() {
        return cy.get('.sc-hHLeRK.fWWojK');
    },

    filterSearch() {
        return cy.get('[data-cy="filter_search"]');
    },

    searchInput() {
        return this.filterSearch().find('[placeholder="Search"]');
    },

    gamesSelectedRoute() {
        return cy.get('.gtm-games-selected-route');
    },

    gamesList() {
        return cy.get('.sc-idiyUo');
    },

    firstGameFromList() {
        return this.gamesList().find('.sc-dIouRR').first();
    },

    gameNameFromList() {
        return this.firstGameFromList().find('.sc-jIAOiI');
    },

    gameThumbnail () {
        return this.firstGameFromList().find('.sc-dwLEzm');
    },

    gameThumbnailPlayButton () {
        return this.gameThumbnail().find('.sc-jqUVSM');
    },

    gameIframe() {
        return cy.get('#ax-game-iframe');
    },

    categoryHeader() {
        return cy.get('.sc-lmHNfd.gNsA-Dz');
    },

    categoryTab() {
        return cy.get('.MuiButtonBase-root');
    },

    // Language
    languageDropdown() {
        return cy.get('[data-cy="navDropdown-language"]');
    },

    activeLanguage() {
        return this.languageDropdown().find('.active-item');
    },

    languageMenu() {
        return this.languageDropdown().find('[data-af="nav"]');
    },

    languageFromMenu(index) {
        return this.languageMenu().find('.sc-cKajLJ').eq(index);
    },

    // Hamburger menu

    burgerIcon() {
        return cy.get('.sc-hNKHps');
    },

    categoryColumn() {
        return cy.get('.sc-tsFYE.hFCUsE');
    },

    mainCategory() {
        return cy.get('.sc-crXcEl.jatWcX');
    },

    subCategory() {
        return cy.get('.sc-crXcEl.clWtKC');
    },
}