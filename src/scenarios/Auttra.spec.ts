import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import AuttraPage from '../support/pages/AuttraPage';

test.describe('Site institucional da Auttra', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let auttraPage: AuttraPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.auttra')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    auttraPage = new AuttraPage(page);
    await page.goto(BASE_URL);
  });

  test('Validar título e menu principal da home', async () => {
    await auttraPage.verifyTitle('Sistema para oficina mecânica | Auttra');
    await auttraPage.validarMenuPrincipal();
  });

  test('Acessar preços e alternar para o plano mensal', async () => {
    await auttraPage.acessarPreco();
    await auttraPage.validarPlanoSemestral();
    await auttraPage.selecionarPlanoMensal();
    await auttraPage.validarPlanoMensal();
  });

  test('Abrir pergunta do FAQ e validar a resposta', async () => {
    await auttraPage.abrirPerguntaInstalar();
    await auttraPage.validarRespostaInstalar();
  });

  test('Enviar formulário de teste grátis sem preencher os campos obrigatórios', async () => {
    await auttraPage.enviarFormularioVazio();
    await auttraPage.validarFormularioNaoEnviado();
  });
});
