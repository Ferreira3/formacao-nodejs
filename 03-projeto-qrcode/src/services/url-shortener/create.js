import prompt from "prompt";
import promptSchemaShortURL from "../../prompts-schema/prompt-schema-short-url.js";
import { BitlyClient } from "bitly";
import chalk from "chalk";

const bitly = new BitlyClient(process.env.URL_SHORTENER_TOKEN, {});

async function handle(err, userInput) {
  let result;

  try {
    result = await bitly.shorten(userInput.link);
  } catch (e) {
    console.log(chalk.red.italic("Erro: " + e.description));
    return
  }
  
  console.log(chalk.green('Seu link encurtado: ' + result.link));
}

async function createShortURL() {
    prompt.start();
    prompt.get(promptSchemaShortURL, handle);
    return;
}

export {
    createShortURL,
    handle
};
