import createItem from "./item.js";
import fs from "fs/promises";

const availableCoupons = {
  "CUPOM15": { type: "fixed", value: 15 },
  "TECH10": { type: "percentage", value: 0.10 },
  "BLACKFRIDAY": { type: "percentage", value: 0.50 }
};

// quais açoes meu carrinho pode fazer

// ler os itens do carrinho(json)
async function loadCart() {
    const filePath = "./data/cart.json";

    try {
        const data = await fs.readFile(filePath, "utf-8");
        const cartArray = JSON.parse(data);

        // Reidratação: transforma cada objeto simples do JSON em um item com a função subtotal()
        const rehydratedCart = await Promise.all(
            cartArray.map(item => createItem(item.name, item.price, item.quantity))
        );

        return rehydratedCart;
    } catch (error) {
        // Se o arquivo não existir, retorna um carrinho vazio
        return [];
    }
}

// salvar o estado do carrinho no arquivo json
async function saveCart(userCart) {
  const filePath = "./data/cart.json";

  try {
    // 1. Transformando o array de objetos em uma string formatada
    const data = JSON.stringify(userCart, null, 2);

    // 2. Escrevemos no arquivo (isso substitui o conteúdo antigo pelo novo estado)
    await fs.writeFile(filePath, data, "utf-8");
    
    console.log("💾 Carrinho salvo com sucesso no banco de dados!");
  } catch (error) {
    console.error("Erro ao salvar o carrinho:", error.message);
  }
}
// adicionar item no carrinho
async function addItem(userCart, item) {
  // conferindo se o item já existe no carrinho e guardando seu index
  const addedName = item.name;
  const indexOfItem = userCart.findIndex((item) => item.name === addedName);
  
  if (indexOfItem === -1) {
    userCart.push(item);
  } else {
    userCart[indexOfItem].quantity += item.quantity;
  }
}

// calcular o total do carrinho
async function calculateTotal(userCart, showTotal) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

  if (showTotal) {
    console.log(`\n💵 Your Shopee Cart total is: Total: R$${result.toFixed(2)}`);
  }

  return result;
}

async function applyDescount(userCart, couponName) {
  const cartTotal = await calculateTotal(userCart, false);
  const coupon = availableCoupons[couponName];

  // verificando se o cupom existe
  if (!availableCoupons.hasOwnProperty(couponName)) {
    console.log("Cupom não encontrado! ❌");
    return cartTotal;
  }

  let finalTotal = cartTotal;

  // verificando o tipo do cupom pra aplicar o desconto adequado
  switch (coupon.type) {
  case "fixed":
    // lógica: total menos o valor fixo
    finalTotal -= coupon.value;
    break;

  case "percentage":
    finalTotal -=  finalTotal * coupon.value;
    // lógica: total menos (total vezes o percentual)
    break;

  default:
    // caso caia aqui, retorna o total sem desconto
    break;
  }

  // exibindo total com desconto e economia
  console.log(`\n🎟️  Cupom ${couponName} aplicado com sucesso!\n👉 Total com desconto: R$${finalTotal.toFixed(2)} (Economia de R$${(cartTotal - finalTotal.toFixed(2))})`);
  return finalTotal;
}

// deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// remover um item - diminui um item
async function removeItem(userCart, item) {
  //1. encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  //2. Caso não encontre o item
  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  //3. item > 1 subtrair um item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  //4. caso item = 1 deletar o item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

// mostra todos os items do carrinho
async function displaycart(userCart) {
  console.log("\n🛒 Shopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$${item.price.toFixed(2)} | ${item.quantity}x | Subtotal = R$${(item.price * item.quantity).toFixed(2)}`
    );
  });
}

export {
  addItem,
  calculateTotal,
  deleteItem,
  removeItem,
  displaycart,
  loadCart,
  saveCart,
  applyDescount
};
