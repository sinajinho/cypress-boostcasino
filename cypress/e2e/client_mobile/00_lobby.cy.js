import urls from "../../support/client/urls";
import lobby from "../../support/client/lobby";

const platformType = "mobile";

describe("BoostCasino Mobile Test Suite", () => {
  beforeEach(() => {
    cy.handleCookieConsent();
    urls.visitBoostHome(platformType);
    lobby.confirmUserLoggedOut(platformType);
  });

  it("A (logged out) user should be able to browse BoostCasino by the mean of the hamburger menu", () => {
    lobby.openBurgerMenu();
    lobby.verifyMainCategories();
    lobby.verifyAllSubCategories();
    lobby.checkAllCategories();
  });
});