# Playwright E2E - Auttra

Testes end-to-end do site [auttra.com.br](https://auttra.com.br) com MS Playwright.

## GitHub Actions + SonarCloud

[![Build and Tests](https://github.com/LucasGasparA/playwright/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/LucasGasparA/playwright/actions/workflows/node.js.yml)

</br>

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=LucasGasparA_playwright&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=LucasGasparA_playwright)

## Cenários de teste

1. Validar título e menu principal da home
1. Acessar preços e alternar para o plano mensal
1. Abrir pergunta do FAQ e validar a resposta
1. Enviar formulário de teste grátis sem preencher os campos obrigatórios

## Como executar

1. Instale o [Node JS](https://nodejs.org/) (versão >= 22.x)
1. Rode `npm install` para instalar as dependências
1. Rode `npx playwright install` para instalar os navegadores
1. Rode `npm test` para executar os testes
1. Rode `npm run show-report` para ver o relatório

Os artefatos da execução ficam em `./artifacts`. Para apagá-los, rode `npm run clean`.

## Estrutura do projeto

- **Scenarios:** cenários de teste
- **Support:** arquivos de apoio
  - **Elements:** mapeamento dos elementos de cada tela
  - **Fixtures:** arquivos de configuração e dados
  - **Pages:** ações e validações usadas nos testes
