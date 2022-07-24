const SELECTOR_MINE =
  "#__next > div > div.game--container > div.mining-box > div > a.button.green-button.solid-button.start-mining-button.desktop";
const SELECTOR_APPROVE =
  "#__next > div > div.modals-container > div > div > div > div > div.modal-bottom.modal-bottom--center.green > a";
const DELAY = 10 * 1000;

(async () => {
  while (1) {
    try {
      await new Promise((res) => setTimeout(res, DELAY));

      const btnApprove = document.querySelector(SELECTOR_APPROVE);
      if (btnApprove) {
        btnApprove.click();
        continue;
      }

      const btnMine = document.querySelector(SELECTOR_MINE);
      if (btnMine) {
        btnMine.click();
        continue;
      }
    } catch (e) {
      console.error(e);
    }
  }
})();
