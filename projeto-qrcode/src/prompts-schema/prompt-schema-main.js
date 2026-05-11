import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold(
      "Escolha a ferramenta (1 - QRCODE (2 - PASSWORD (3 - URL SHORTENER"
    ),
    pattern: /^[1-3]+$/,
    message: chalk.red.italic("Escolha inválida! Tente novamente."),
    required: true,
  },
];

export default promptSchemaMain;
