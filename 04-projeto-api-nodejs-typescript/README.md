# API NodeJS com TypeScript

Uma API REST simples desenvolvida com Node.js e TypeScript, oferecendo endpoints para gerenciamento de clientes, produtos e pedidos.

## Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Tipagem estática para JavaScript
- **HTTP** - Módulo nativo do Node.js para criar servidor
- **tsx** - Executor TypeScript para desenvolvimento
- **tsup** - Bundler para compilação de produção

## Estrutura do Projeto

```
src/
├── server.ts              # Iniciação do servidor HTTP
├── controllers/           # Controladores de requisições
├── services/              # Lógica de negócio
├── repositories/          # Acesso aos dados
├── routes/                # Definição de rotas
└── utils/                 # Utilitários (tipos, constantes, helpers)
data/                      # Arquivos JSON com dados
```

## Endpoints

### GET `/api/products`
Retorna lista de produtos
```json
[
  {
    "id": 1,
    "name": "Nome do Produto",
    "price": 99.99
  }
]
```

### GET `/api/clients`
Retorna lista de clientes
```json
[
  {
    "id": 1,
    "name": "Nome do Cliente",
    "orders": [1, 2, 3]
  }
]
```

### GET `/api/orders`
Retorna lista de pedidos
```json
[
  {
    "id": 1,
    "clientId": 1,
    "productList": [1, 2]
  }
]
```

**Filtros**: Todos os endpoints suportam filtro via query string:
```
GET /api/products?p=Queijo
GET /api/clients?p=10
GET /api/orders?p=105
```

## Instalação e Execução

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run start:dev
```
Inicia o servidor com tsx em modo desenvolvimento

```bash
npm run start:watch
```
Inicia o servidor em modo watch (recarrega ao detectar mudanças)

### Produção
```bash
npm run dist
npm run start:dist
```
Compila o projeto com tsup e executa a versão compilada

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:
```
PORT=3000
```

## Compilação

```bash
npm run dist
```
Gera o bundle otimizado na pasta `dist/`

## Arquitetura

- **Controllers** - Recebem requisições e delegam para services
- **Services** - Contêm a lógica de negócio e chamam repositories
- **Repositories** - Acessam e retornam dados dos arquivos JSON
- **Routes** - Definem o roteamento de requisições HTTP
- **tsup** - Bundler e compilador otimizado
- **tsx** - Executor TypeScript com suporte a ES modules

## 💡 Conceitos Implementados

- ✅ **Arquitetura em Camadas** - Separação clara de responsabilidades
- ✅ **TypeScript** - Type safety e melhor experiência de desenvolvimento
- ✅ **Controllers** - Gerenciamento de requisições HTTP
- ✅ **Services** - Lógica de negócios centralizada
- ✅ **Repositories** - Abstração de acesso a dados
- ✅ **Tratamento de Erros** - Respostas HTTP apropriadas
- ✅ **Variáveis de Ambiente** - Configuração flexível
- ✅ **ES Modules** - Módulos moderno do JavaScript


---

**Desenvolvido durante a jornada de aprendizado em desenvolvimento backend.**
