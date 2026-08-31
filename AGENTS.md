# Projeto OS

Aplicação única construída com Laravel 13, PHP 8.4, Inertia.js 2, React, TypeScript, Vite e PostgreSQL.

- Trate as páginas React em `resources/js/pages` como parte da aplicação Laravel; não crie um frontend ou uma API paralela sem solicitação explícita.
- Mantenha as rotas de páginas no Laravel e renderize-as com `Inertia::render()`.
- Use o container `app` para comandos que dependam do PHP 8.4, Composer, Node.js ou npm.
- Preserve as portas de desenvolvimento: Laravel `8001`, Vite/HMR `5173` e PostgreSQL no host `5433`.
- Antes de concluir alterações, execute os testes Laravel, o typecheck TypeScript, o build Vite e a validação do Docker Compose aplicáveis.
