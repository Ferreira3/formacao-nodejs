import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow(
      "\nEscolha a ferramenta:\n1) CRIADOR DE QRCODE\n2) GERADOR DE SENHAS\n3) ENCURTADOR DE URL\n"
    ),
    pattern: /^[1-3]+$/,
    message: chalk.red.italic("Escolha inválida! Tente novamente."),
    required: true,
  },
];

export default promptSchemaMain;
