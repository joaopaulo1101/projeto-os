# Projeto OS

Sistema web para gerenciamento de ordens de serviço, atualmente em fase de estruturação e modernização.

## Tecnologias

- Laravel 13 e PHP 8.4
- Inertia.js 2
- React e TypeScript
- Vite
- PostgreSQL 17
- Docker Compose

## Arquitetura

O projeto é uma aplicação Laravel única. As rotas e respostas são controladas pelo Laravel, enquanto o Inertia renderiza as páginas React localizadas em `resources/js/pages`. O Vite compila os assets TypeScript e CSS; ele não é uma aplicação frontend independente.

O ambiente Docker possui somente dois serviços: a aplicação, que inclui PHP, Composer, Node.js e npm, e o PostgreSQL. A aplicação é acessada em `http://localhost:8001`; a porta `5173` é usada apenas pelo Vite durante o desenvolvimento.

## Status

Infraestrutura inicial concluída. Autenticação, interface final e funcionalidades de negócio permanecem no roadmap.

## Desenvolvimento

```bash
docker compose up --build
```
