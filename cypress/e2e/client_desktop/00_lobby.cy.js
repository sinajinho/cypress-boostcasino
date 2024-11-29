import urls from "../../support/client/urls";
import lobby from "../../support/client/lobby";
import game from "../../support/client/game";

describe("BoostCasino Desktop Test Suite", () => {
  beforeEach(() => {
    cy.handleCookieConsent();
    urls.visitBoostHome();
    lobby.confirmUserLoggedOut();
  });

  it("A (logged out) user should be able to find and open the game", () => {
    const gameName = "Book of Dead";

    lobby.searchInputVisible();
    lobby.searchForInput(gameName);
    lobby.checkGameVisible();
    lobby.checkListGameName(gameName);
    lobby.clickPlayButton();
    game.checkGameLoaded();
  });

  it("A (logged out) user should be able to switch language by the mean of the menu dropdown", () => {
    const languages = [
        { index: 0, langCode: 'FI', urlSuffix: '/fi', welcomeMessage: 'Tervetuloa Boost Casino', customerSupportMessage: 'Asiakaspalvelu' },
        { index: 0, langCode: 'EE', urlSuffix: '/ee', welcomeMessage: 'Tere tulemast Boost Casino lehele', customerSupportMessage: 'Klienditugi' },
        { index: 1, langCode: 'RU', urlSuffix: '/ru', welcomeMessage: 'Добро пожаловать в Boost Casino', customerSupportMessage: 'Служба поддержки' },
    ];

    languages.forEach((language) => {
      lobby.openLanguageDropdown();
      lobby.checkLanguageFromDropdown(language.index, language.langCode);
      lobby.clickOnLanguageFromDropdown(language.index);
      lobby.verifyLanguageChange(language.urlSuffix, language.welcomeMessage, language.customerSupportMessage);
    });
  });
});