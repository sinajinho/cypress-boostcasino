import './commands'
import 'cypress-real-events/support';

// uncaught:exception error
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

// hide fetch/XHR requests
if (Cypress.env('hideXHR')) {
  const app = window.top;
  if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
    const style = app.document.createElement('style');
    style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
    style.setAttribute('data-hide-command-log-request', '');

    app.document.head.appendChild(style);
  }
}

