import qr from "qrcode-terminal";
import chalk from "chalk";
import fs from "node:fs";
import QRCode from "qrcode";

async function saveQRCode(link) {
  const path = './output/'
  const fileName = `${path}qrcode_${Date.now()}.png`;

  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }

  try {
    await QRCode.toFile(fileName, link);
    console.log(chalk.green(`💾✅ QRCode salvo com sucesso em ${fileName}`));
  } catch (error) {
    console.log(chalk.red(`Erro ao salvar! ${error}`));
  }

}

async function handle(err, result) {
  if (err) {
    console.log("Erro na aplicação!");
    return;
  }

  if (result.type == 3) {
    await saveQRCode(result.link);
    return;
  }

  const isSmall = result.type == 2;

  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green("QR Code gerado com sucesso:\n"));
    console.log(qrcode);
  });
}

export default handle;
