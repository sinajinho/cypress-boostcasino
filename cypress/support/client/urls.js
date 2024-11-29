export default {
    visitBoostHome(platformType) {
      if (platformType === "mobile") {
        cy.viewport("iphone-x");
        cy.visit("/");
        return;
      }
      cy.visit("/");
    },
  };