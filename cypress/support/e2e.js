import "./commands";
import "cypress-real-events/support";

// Uncaught exception error handling
Cypress.on("uncaught:exception", () => {
  return false;
});

// Hide fetch/XHR requests
if (Cypress.env("hideXHR")) {
  const app = window.top;
  
  if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
    const style = app.document.createElement("style");
    style.innerHTML = ".command-name-request, .command-name-xhr { display: none }";
    style.setAttribute("data-hide-command-log-request", "");
    app.document.head.appendChild(style);
  };
}