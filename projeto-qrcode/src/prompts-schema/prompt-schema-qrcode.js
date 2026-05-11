import chalk from "chalk";

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR CODE"),
    },
    {
        name: "type",
        description: chalk.yellow(
            "\nEscolha entre o tipo de QRcode:\n1) NORMAL\n2) TERMINAL\n3) SALVAR QRCODE"
        ),
        pattern: /^[1-3]+$/,
        message: chalk.red.italic("Escolha uma opção válida!"),
        required: true,
    },
];

export default promptSchemaQRCode;
