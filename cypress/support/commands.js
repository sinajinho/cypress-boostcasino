Cypress.Commands.add('handleCookieConsent', (cookieName = 'CookieConsent') => {
    const genericValue = '{necessary:true,preferences:true,statistics:true,marketing:true,method:explicit,ver:1,region:ee}';
    cy.setCookie(cookieName, genericValue);
});


  