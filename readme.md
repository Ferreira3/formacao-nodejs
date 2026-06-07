<!--START_SECTION:header-->
<div align="center">
  <p align="center">
    <img 
      alt="DIO Education" 
      src="https://c5gwmsmjx1.execute-api.us-east-1.amazonaws.com/prod/dados_processo_seletivo/logo_empresa/119818/LOGO-DIO-COLOR.png_name_20221031-2831-ekn5hh.png" 
      width="100px" 
    />
    <h1>Formação: NodeJS Developer</h1>
  </p>
</div>
<!--END_SECTION:header-->

<p align="center">
  <img src="https://img.shields.io/static/v1?label=DIO&message=Education&color=E94D5F&labelColor=202024" alt="DIO Project" />
  <a href="LICENSE"><img  src="https://img.shields.io/static/v1?label=License&message=MIT&color=E94D5F&labelColor=202024" alt="License"></a>
</p>

## 📋 Sobre a Formação

Repositório contendo todos os projetos desenvolvidos durante a formação **NodeJS Developer** na DIO. A formação abrange desde conceitos fundamentais de JavaScript até desenvolvimento de APIs REST com TypeScript, passando por arquitetura em camadas, manipulação de arquivos e construção de utilitários escaláveis.

---

## 🚀 Projetos

### 1️⃣ **Mario Kart - Simulador de Corrida**

📁 [`01-projeto-mario-kart`](./01-projeto-mario-kart)

**Descrição:** Simulador de corrida baseado no jogo Mario Kart, onde dois personagens competem em diferentes tipos de pistas (retas, curvas e confrontos).

**Conceitos & Tecnologias:**

- 🎮 Lógica de Jogos
- 🔀 Algoritmos de Simulação
- 📊 Geração de Números Aleatórios
- 🏗️ Estruturas de Dados (Objetos e Arrays)
- ⏱️ Manipulação de Delays

**Destaques:**

- Sistema de pontuação dinâmico baseado em atributos dos personagens
- Diferentes tipos de pistas com mecânicas distintas
- Seleção aleatória de personagens
- Sistema de confronto com variações de dano

---

### 2️⃣ **Carrinho de Compras (Shopee)**

📁 [`02-shopee-cart`](./02-shopee-cart)

**Descrição:** Implementação da lógica do carrinho de compras da Shopee, com funcionalidades de adicionar/remover itens, cálculo automático de subtotais e aplicação de cupons de desconto.

**Conceitos & Tecnologias:**

- 📦 Modularização de Código
- 💾 Persistência de Dados (JSON)
- 🎫 Sistema de Cupons
- 🔄 Manipulação de Array e Objetos
- 🖥️ Interface Interativa no Terminal
- 🔄 Agrupamento de Itens Repetidos

**Destaques:**

- Sistema de cupons com desconto percentual/fixo
- Persistência de carrinho em arquivo JSON
- Menu interativo via terminal
- Agrupamento automático de itens duplicados
- Cálculo automático de totais

---

### 3️⃣ **Gerador de QRCode para E-commerce**

📁 [`03-projeto-qrcode`](./03-projeto-qrcode)

**Descrição:** Kit de utilidades para e-commerce com capacidade de gerar QRCodes e encurtar URLs, preparado para ser escalável com adição de novas features.

**Conceitos & Tecnologias:**

- 📦 Gerenciamento de Dependências (NPM)
- 🔌 Trabalho com Pacotes Externos
- 🌍 Variáveis de Ambiente (.env)
- 🏗️ Arquitetura em Camadas
- 🔗 Integração com APIs Externas
- 📁 I/O de Arquivo e Sistema

**Destaques:**

- Geração de QRCodes a partir de URLs
- Encurtador de URLs (integração com Bitly)
- Exportação de QRCodes em arquivo
- Sistema escalável para adicionar novas funcionalidades
- Tratamento robusto de variáveis de ambiente

---

### 4️⃣ **API REST - Gestão de Clientes, Produtos e Pedidos**

📁 [`04-projeto-api-nodejs-typescript`](./04-projeto-api-nodejs-typescript)

**Descrição:** API REST completa desenvolvida com Node.js e TypeScript, utilizando módulos nativos do Node.js e arquitetura em camadas. Gerencia clientes, produtos e pedidos.

**Conceitos & Tecnologias:**

- 🔧 **Node.js Nativo** (módulo HTTP)
- 📘 **TypeScript** - Type Safety
- 🏗️ **Arquitetura em Camadas** (Controllers, Services, Repositories)
- 🔀 **Roteamento HTTP**
- 🛠️ **tsx** - Executor TypeScript para desenvolvimento
- 📦 **tsup** - Bundler para produção
- ⚡ **ES Modules**

**Endpoints:**

- `GET /api/products` - Lista de produtos
- `GET /api/clients` - Lista de clientes
- `GET /api/orders` - Lista de pedidos
- Suporte a filtros via query string

**Destaques:**

- Implementação de Controllers para gerenciar requisições
- Services com lógica de negócio centralizada
- Repositories para abstração de dados (JSON)
- Tratamento robusto de erros
- Sistema de filtros avançado

---

### 5️⃣ **Formula 1 Minimal API**

📁 [`05-projeto-formula1`](./05-projeto-formula1)

**Descrição:** API Minimal utilizando Fastify para gerenciar dados fictícios de Fórmula 1 (pilotos e equipes), demonstrando um framework de alto desempenho para APIs.

**Conceitos & Tecnologias:**

- 🔥 **Fastify** - Framework minimalista e extremamente rápido
- 📘 **TypeScript**
- 🚀 **Performance** - Fastify é ~80% mais rápido que Express
- 🔀 **Roteamento RESTful**
- ✅ **Validação de Dados**
- 📖 **CORS** para comunicação cross-domain

**Endpoints:**

- `GET /drivers` - Lista de pilotos
- `GET /drivers/:id` - Detalhes de um piloto
- `GET /teams` - Lista de equipes
- `GET /teams/:id` - Detalhes de uma equipe

**Destaques:**

- Implementação com Fastify para performance superior
- Dados estáticos em JSON
- Estrutura simples e eficiente
- Pronto para escalabilidade

---

### 6️⃣ **UFC API - Gestão de Lutadores e Eventos**

📁 [`06-projeto-ufc`](./06-projeto-ufc)

**Descrição:** API REST para gerenciar lutadores e eventos do UFC, desenvolvida com Express e TypeScript, seguindo arquitetura em camadas com controllers, services e repositories.

**Conceitos & Tecnologias:**

- 🚀 **Express.js** - Framework web mais popular
- 📘 **TypeScript** - Type Safety
- 🏗️ **Arquitetura em Camadas**
- 🔄 **CRUD Completo** (GET, POST, PATCH, DELETE)
- 📦 **Gerenciamento de Dados em JSON**
- 🛠️ **tsup** - Empacotamento otimizado
- 🌐 **CORS** - Compartilhamento de Recursos

**Endpoints:**

- `GET /fighters` - Lista de lutadores
- `GET /fighters/:id` - Detalhes do lutador
- `POST /fighters` - Criar novo lutador
- `PATCH /fighters/:id` - Atualizar lutador
- `DELETE /fighters/:id` - Remover lutador
- `GET /events` - Lista de eventos

**Destaques:**

- Implementação completa de CRUD
- Validação de dados
- Tratamento robusto de erros
- Separação clara de responsabilidades
- Pronto para produção com build otimizado

---

## 📚 Conceitos e Tecnologias Aplicadas

### Linguagem & Runtime

- ✅ **JavaScript** - Linguagem de programação
- ✅ **TypeScript** - Superset de JavaScript com tipagem estática
- ✅ **Node.js** - Runtime JavaScript para backend

### Frameworks & Bibliotecas

- ✅ **Express.js** - Framework web tradicional
- ✅ **Fastify** - Framework minimalista de alta performance
- ✅ **HTTP Nativo do Node.js** - Para APIs sem framework

### Arquitetura & Design Patterns

- ✅ **MVC (Model-View-Controller)** - Separação de responsabilidades
- ✅ **Arquitetura em Camadas** - Controllers → Services → Repositories
- ✅ **RESTful API** - Princípios de design para APIs
- ✅ **Modularização** - Código limpo e reutilizável

### Ferramentas de Desenvolvimento

- ✅ **npm** - Gerenciador de pacotes
- ✅ **tsx** - Executor TypeScript com reload automático
- ✅ **tsup** - Bundler otimizado para produção
- ✅ **TypeScript** - Compilador e verificador de tipos
- ✅ **Variáveis de Ambiente (.env)** - Configuração segura

### Conceitos de Programação

- ✅ **Lógica de Programação** - Algoritmos e estruturas de dados
- ✅ **Programação Funcional** - Use de métodos funcionais (map, filter, reduce)
- ✅ **Programação Orientada a Objetos** - Classes e modelos de dados
- ✅ **Tratamento de Erros** - Try-catch e respostas HTTP apropriadas
- ✅ **Manipulação de Arquivos** - I/O com JSON e sistema de arquivos

### Operações & Deployment

- ✅ **Compilação TypeScript** - De TS para JS
- ✅ **Bundling** - Empacotamento de código para produção
- ✅ **Environment Variables** - Gerenciamento de configurações
- ✅ **CORS** - Compartilhamento seguro de recursos entre domínios

---

## 🛠️ Como Executar os Projetos

### Pré-requisitos

- Node.js 18+ (recomendado LTS)
- npm ou yarn

### Projetos em JavaScript Puro (01, 02, 03)

```bash
cd 01-projeto-mario-kart
npm run jogar          # Mario Kart

cd 02-shopee-cart
node src/index.js      # Carrinho

cd 03-projeto-qrcode
npm start              # QRCode Generator
```

### Projetos com TypeScript (04, 05, 06)

```bash
# Instalação
npm install

# Desenvolvimento
npm run start:dev      # Executa com tsx

# Watch mode
npm run start:watch    # Recarrega ao salvar

# Produção
npm run dist           # Compila
npm run start:dist     # Executa compilado
```

---

## 📖 Estrutura do Repositório

```
formacao-nodejs/
├── 01-projeto-mario-kart/       # Simulador de corrida
├── 02-shopee-cart/              # Carrinho de compras
├── 03-projeto-qrcode/           # Gerador de QRCode
├── 04-projeto-api-nodejs-typescript/  # API REST básica
├── 05-projeto-formula1/         # API Fastify
├── 06-projeto-ufc/              # API Express
└── readme.md                    # Este arquivo
```

---

## 🎓 Aprendizados Principais

1. **Fundamentos de Backend** - Criação de APIs REST escaláveis
2. **TypeScript** - Tipagem estática para código mais seguro
3. **Arquitetura em Camadas** - Organização profissional de código
4. **Diferentes Frameworks** - Comparação entre Express, Fastify e HTTP Nativo
5. **Modularização** - Código limpo, reutilizável e testável
6. **Manipulação de Dados** - Trabalho com JSON e persistência
7. **Performance** - Otimização com diferentes frameworks

---

## 📝 Licença

Este repositório está licenciado sob a [Licença MIT](LICENSE).

---

**Desenvolvido durante a Formação NodeJS Developer - DIO**
