const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setUserAgent(
      "User Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    );
    await page.goto("https://web.whatsapp.com/");

    await page.waitForSelector("div[data-testid=chat-list-search]", {
      timeout: 33000,
    });

    const contactName = [
      "Monologo",
      "um nome mais facil",
      "Leandro Patrício",
      "Juru",
    ];
    const mensagens = ["mensagem", "mensagem"];

    for (let index = 0; index < contactName.length; index++) {
      await page.waitForSelector(`span[title="${contactName[index]}"]`, {
        timeout: 33000,
      });

      await page.click(`span[title="${contactName[index]}"]`);

      const editor = await page.$(".iq0m558w");
      await editor.focus();
      await page.keyboard.type(
        "Eu acho que agora deu certo, hein xuxu... E sim, essa tb é uam mensagem q eu to mandando pra 4 pessoas diferentes"
      );
      await page.click("span[data-testid='send']");
      delay(500);
    }
  } catch (error) {
    console.log(error);
  }
})();

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
