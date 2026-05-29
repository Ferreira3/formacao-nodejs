# Formula1 Minimal API

> Minimal API em TypeScript usando Fastify para dados fictícios de Fórmula 1 (drivers e teams).

## Tecnologias

- Node.js
- TypeScript
- Fastify

## Pré-requisitos

- Node.js 18+ (ou versão LTS atual)
- npm ou pnpm

## Instalação

Instale dependências:

```bash
npm install
```

Compile (opcional) e rode em modo de desenvolvimento:

```bash
npm run dist
npm run start:dev
```

Ou para desenvolvimento com watch (se configurado):

```bash
npm run start:watch
```

## Scripts úteis

- `npm run dist` — compila o projeto de TypeScript para JS
- `npm run start:dev` — inicia a API
- `npm run start:watch` — inicia a API em modo watch
- `npm run start:dist` — compila e inicia o projeto em JS

## Endpoints principais

Os endpoints disponíveis (exemplos):

- `GET /drivers` — lista todos os pilotos
- `GET /drivers/:id` — obtém um piloto por `id`
- `GET /teams` — lista todas as equipes
- `GET /teams/:id` — obtém uma equipe por `id`

Exemplo de resposta `GET /drivers`:

```json
{
  "driver": {
    "id": 1,
    "name": "Lando Norris",
    "number": 1
  }
}
```

Exemplo de resposta `GET /teams`:

```json
{
  "team": {
    "id": 1,
    "name": "Scuderia Ferrari",
    "base": "Maranello, Itália"
  }
}
```

## Estrutura de dados

Os dados estáticos ficam em `data/`:

- `data/drivers.json` — lista de pilotos
- `data/teams.json` — lista de equipes
