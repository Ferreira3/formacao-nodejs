# UFC API (TypeScript + Express)

<p align="right">
  <img src="assets/typescript-logo.png" alt="TypeScript" width="64" />
  <img src="assets/express-logo.png" alt="Express" width="64" />
  <img src="assets/mma-logo.png" alt="MMA Glove" width="64" />
</p>

API simples para gerenciar lutadores e eventos do UFC.

## Tecnologias

- TypeScript
- Express

## Descrição

API REST mínima que expõe dados de lutadores e eventos. O projeto usa TypeScript no backend e roda com `tsx` em desenvolvimento ou é empacotado com `tsup` para produção.

## Pré-requisitos

- Node.js 18+ recomendado
- npm ou yarn

## Instalação

1. Instale dependências:

```bash
npm install
```

## Scripts úteis

- `npm run start:dev` — executa em modo desenvolvimento com `tsx` (recarregamento rápido)
- `npm run start:watch` — execução em modo watch
- `npm run dist` — gera build empacotado com `tsup`
- `npm run start:dist` — gera build e executa o `dist` resultante

## Como executar

Em desenvolvimento (recomendado):

```bash
npm run start:dev
```

Em produção (build):

```bash
npm run start:dist
```

## Endpoints

Rotas principais (base: `http://localhost:PORT`, por padrão o projeto usa a porta definida em `src/server.ts` ou variáveis de ambiente):

- `GET /fighters` — lista todos os lutadores
- `GET /fighters/:id` — busca um lutador por `id`
- `POST /fighters` — cria um novo lutador (enviar JSON no corpo)
- `DELETE /fighters/:id` — remove um lutador por `id`
- `PATCH /fighters/:id` — atualiza parcialmente um lutador por `id`
- `GET /events` — lista eventos

Exemplo rápido com `curl`:

```bash
curl http://localhost:3000/api/fighters
```

## Estrutura do projeto (resumo)

- `src/server.ts` — ponto de entrada do servidor
- `src/app.ts` — configuração do app Express
- `src/routes.ts` — rotas da API
- `src/controllers/` — lógica dos endpoints
- `src/services/` — regras de negócio
- `src/repositories/` — acesso aos dados (JSON local)
- `arch/` e `data/` — artefatos e dados usados pelo projeto

## Dados

Os dados de exemplo estão no diretório `data/` (por exemplo `fighters-data.json`, `events-data.json`).

## Observações

- Projeto simples para fins de estudo e demonstração.
- Use variáveis de ambiente via `.env` se necessário (o `start:dev` já usa `--env-file=.env`).
