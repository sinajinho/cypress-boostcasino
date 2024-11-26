export default {

    loginButton() {
        return cy.get('.sc-crXcEl.cQZcGq');
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
    }
}