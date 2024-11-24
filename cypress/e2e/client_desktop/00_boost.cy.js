import urls from "../../support/client/urls";
import lobby from "../../support/client/lobby";
import game from "../../support/client/game";

describe('BoostCasino Desktop Test Suite', () => {
    beforeEach(() => {
        urls.visitBoostHome();
        cy.handleCookieConsent();
    });
    
    it('A (logged out) user should be able to find and open the game', () => {
        const gameName = 'Book of Dead';

        lobby.confirmUserLoggedOut();
        lobby.searchInputVisible();
        lobby.searchForInput(gameName);
        lobby.checkGameVisible();
        lobby.checkListGameName(gameName);
        lobby.clickPlayButton();
        game.checkGameLoaded();
    });
});