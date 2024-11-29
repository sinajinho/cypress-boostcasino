import pages from "./pages";

export default {
  checkGameLoaded() {
    pages.gameIframe().should("exist").and("be.visible");
    pages.gameIframe()
      .should("have.attr", "src")
      .and("include", "playngonetwork.com/Casino/ContainerLauncher");
  },
};