# Projeto OS

Sistema web para gerenciamento de **Ordens de Serviço**, desenvolvido com uma arquitetura moderna, separação entre frontend e backend e foco em organização, escalabilidade e manutenção.

O projeto está sendo reconstruído a partir de uma versão anterior, com o objetivo de modernizar sua arquitetura, interface e experiência de uso.

## Tecnologias

### Backend

* PHP 8.4
* Laravel 13
* PostgreSQL

### Frontend

* React
* TypeScript
* Vite

### Infraestrutura

* Docker
* Docker Compose
* Git

## Arquitetura

O projeto utiliza uma arquitetura separada entre frontend e backend:

```text
projeto-os/
├── backend/      # API e regras de negócio
├── frontend/     # Interface da aplicação
├── docker/       # Configurações do ambiente
└── compose.yaml
```

Fluxo principal da aplicação:

```text
React
  ↓
Laravel API
  ↓
PostgreSQL
```

## Objetivo

O Projeto OS tem como objetivo centralizar e facilitar o gerenciamento de ordens de serviço, permitindo acompanhar todo o fluxo de atendimento de forma organizada.

Entre as funcionalidades planejadas estão:

* Cadastro e gerenciamento de clientes;
* Cadastro de técnicos e equipes;
* Criação e acompanhamento de ordens de serviço;
* Controle de status;
* Histórico de atendimentos;
* Anexos e documentos;
* Dashboard com indicadores;
* Busca e filtros;
* Relatórios;
* Controle de usuários e permissões.

## Status

🚧 **Em desenvolvimento**

O projeto está atualmente em fase de estruturação e modernização.

Novas funcionalidades, melhorias de interface e alterações na arquitetura serão adicionadas conforme a evolução do desenvolvimento.

## Roadmap

* [x] Estrutura inicial do projeto
* [x] Ambiente com Docker
* [x] Backend com Laravel
* [x] Banco de dados PostgreSQL
* [x] Frontend com React + TypeScript
* [ ] Estrutura visual da aplicação
* [ ] Autenticação
* [ ] Gerenciamento de usuários
* [ ] Gerenciamento de clientes
* [ ] Gerenciamento de técnicos
* [ ] Ordens de serviço
* [ ] Dashboard
* [ ] Relatórios
* [ ] Controle de permissões

## Sobre o projeto

Este projeto também faz parte do meu processo de evolução como desenvolvedor Full Stack, explorando uma arquitetura moderna com Laravel no backend e React no frontend.

A proposta é manter o código organizado e evoluir o sistema progressivamente, aplicando boas práticas de desenvolvimento, versionamento e arquitetura de software.

## Licença

A licença do projeto será definida futuramente.
