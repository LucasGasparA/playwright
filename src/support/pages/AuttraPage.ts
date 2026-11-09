import { Locator, Page, expect } from '@playwright/test';
import AuttraElements from '../elements/AuttraElements';
import BasePage from './BasePage';

export default class AuttraPage extends BasePage {
  readonly auttraElements: AuttraElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.auttraElements = new AuttraElements(page);
  }

  async validarMenuPrincipal(): Promise<void> {
    await expect(this.auttraElements.getMenuComoFunciona()).toBeVisible();
    await expect(this.auttraElements.getMenuProduto()).toBeVisible();
    await expect(this.auttraElements.getMenuRecursos()).toBeVisible();
    await expect(this.auttraElements.getMenuPreco()).toBeVisible();
    await expect(this.auttraElements.getMenuDuvidas()).toBeVisible();
    await expect(this.auttraElements.getBotaoAcessarPlataforma()).toBeVisible();
  }

  async acessarPreco(): Promise<void> {
    await this.auttraElements.getMenuPreco().click();
  }

  async validarPlanoSemestral(): Promise<void> {
    await expect(this.page).toHaveURL(/#preco$/);
    await expect(this.auttraElements.getSecaoPreco()).toContainText('42,90');
  }

  async selecionarPlanoMensal(): Promise<void> {
    await this.auttraElements.getBotaoPlanoMensal().click();
  }

  async validarPlanoMensal(): Promise<void> {
    await expect(this.auttraElements.getSecaoPreco()).toContainText('54,90');
  }

  async abrirPerguntaInstalar(): Promise<void> {
    await this.auttraElements.getPerguntaInstalar().click();
  }

  async validarRespostaInstalar(): Promise<void> {
    await expect(this.auttraElements.getPerguntaInstalar()).toHaveAttribute(
      'aria-expanded',
      'true'
    );
    await expect(this.auttraElements.getRespostaInstalar()).toBeVisible();
    await expect(this.auttraElements.getRespostaInstalar()).toContainText(
      'A Auttra funciona no navegador'
    );
  }

  async enviarFormularioVazio(): Promise<void> {
    await this.auttraElements.getBotaoEnviar().click();
  }

  async validarFormularioNaoEnviado(): Promise<void> {
    await this.validarCampoInvalido(this.auttraElements.getCampoNome());
    await this.validarCampoInvalido(this.auttraElements.getCampoWhatsapp());
    await this.validarCampoInvalido(this.auttraElements.getCampoOficina());
    await this.validarCampoInvalido(this.auttraElements.getCampoMecanicos());
    await this.validarCampoInvalido(
      this.auttraElements.getCampoConsentimento()
    );
    await expect(this.page).toHaveURL(/auttra\.com\.br/);
  }

  private async validarCampoInvalido(campo: Locator): Promise<void> {
    const valido = await campo.evaluate(
      el => (el as HTMLInputElement).validity.valid
    );
    expect(valido).toBe(false);
  }
}
