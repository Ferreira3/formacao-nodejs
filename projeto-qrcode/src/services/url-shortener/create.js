import prompt from "prompt";
import promptSchemaShortURL from "../../prompts-schema/prompt-schema-short-url.js";
import { BitlyClient } from "bitly";

const bitly = new BitlyClient(process.env.URL_SHORTENER_TOKEN, {});

async function handle(err, userInput) {
  let result;

  try {
    result = await bitly.shorten(userInput.link);
  } catch (e) {
    console.log('caiu no erro');
    console.log(e);
    return
  }
  
  console.log('Your short link: ' + result.link);
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
