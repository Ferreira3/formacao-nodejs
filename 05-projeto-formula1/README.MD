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
npm run build
npm start
```

Ou para desenvolvimento com watch (se configurado):

```bash
npm run dev
```

## Scripts úteis

- `npm run build` — compila TypeScript
- `npm start` — inicia a API (após build)
- `npm run dev` — inicia em modo desenvolvimento (se existir configuração)

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
