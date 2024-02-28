const puppeteer = require("puppeteer");

console.log("Bem vindo ao Bot Conversor.");

const bot = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const moedaBase = "dolar";
  const moedaFinal = "real";
  const url = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQLhhA0gEIMjc3NmowajGoAgCwAgA&sourceid=chrome&ie=UTF-8`;
  await page.goto(url);
  //await page.screenshot({path: 'print.png'});

  const resultado = await page.evaluate(() => {
    return document.querySelector(".lWzCpb.a61j6").value;
  });

  console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}.`);
  await browser.close();
};

bot();
