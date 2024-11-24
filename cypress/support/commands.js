Cypress.Commands.add('handleCookieConsent', (cookieName = 'CookieConsent', cookieValue = '{stamp:%27oqW+lReU8NPCcMwBjc1H09d1CqsWFnzY+IcUs2sR0Kc5QM0/Kxd3xA==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1732441229873%2Cregion:%27ee%27}') => {
    cy.getCookie(cookieName).then((cookie) => {
        if (cookie) {
            cy.setCookie(cookieName, cookieValue);
        }
    });
});


  