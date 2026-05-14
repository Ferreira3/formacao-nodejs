import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const rl = readline.createInterface({ input, output });

async function showMenu() {
    console.log("\n" + "=".repeat(30));
    console.log("   SHOOPEE TERMINAL MENU");
    console.log("=".repeat(30));
    console.log("1. 🛒 Visualizar Carrinho");
    console.log("2. ➕ Adicionar Novo Item");
    console.log("3. 🎟️  Aplicar Cupom de Desconto");
    console.log("4. 💾 Salvar Carrinho");
    console.log("5. ❌ Sair");
    console.log("=".repeat(30));
}

async function startInterface() {
    const myCart = await cartService.loadCart();
    let isRunning = true;

    // Limpa a tela ao iniciar
    console.clear();
    console.log("Bem-vindo ao sistema de carrinho da Shopee!");

    while (isRunning) {
        await showMenu();
        const option = await rl.question("Escolha uma opção: ");

        // Limpa a tela antes de mostrar o resultado de cada escolha
        console.clear();

        switch (option) {
            case "1":
                await cartService.displaycart(myCart);
                await cartService.calculateTotal(myCart, true);
                break;

            case "2":
                console.log("\n--- Adicionando novo item ---");
                const name = await rl.question("Nome do produto: ");
                const price = parseFloat(await rl.question("Preço: R$"));
                const qty = parseInt(await rl.question("Quantidade: "));

                if (name && !isNaN(price) && !isNaN(qty)) {
                    const newItem = await createItem(name, price, qty);
                    await cartService.addItem(myCart, newItem);
                    console.clear(); // Limpa para mostrar a mensagem de sucesso limpa
                    console.log(`✅ ${name} adicionado com sucesso!`);
                } else {
                    console.log("❌ Dados inválidos. Tente novamente.");
                }
                break;

            case "3":
                const couponInput = await rl.question("Digite o código do cupom: ");
                console.clear(); // Limpa para mostrar o resultado do cupom no topo
                await cartService.applyDescount(myCart, couponInput.toUpperCase().trim());
                break;

            case "4":
                await cartService.saveCart(myCart);
                break;

            case "5":
                console.log("Até logo! 👋");
                isRunning = false;
                break;

            default:
                console.log("⚠️ Opção inválida. Escolha entre 1 e 5.");
        }
    }
    rl.close();
}

startInterface();
