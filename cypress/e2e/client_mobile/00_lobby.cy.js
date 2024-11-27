import urls from "../../support/client/urls";
import lobby from "../../support/client/lobby";

const platformType = 'mobile';

describe('BoostCasino Mobile Test Suite', () => {
    beforeEach(() => {
        cy.handleCookieConsent();
        urls.visitBoostHome(platformType);
        // cy.handleCookieConsent();
        lobby.confirmUserLoggedOut(platformType);
    });
    
    it('', () => {
    });
});