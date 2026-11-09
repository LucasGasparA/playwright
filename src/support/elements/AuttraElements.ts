import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class AuttraElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getMenuComoFunciona(): Locator {
    return this.page.locator('header a[href="#atencao"]');
  }

  getMenuProduto(): Locator {
    return this.page.locator('header a[href="#produto"]');
  }

  getMenuRecursos(): Locator {
    return this.page.locator('header a[href="#recursos"]');
  }

  getMenuPreco(): Locator {
    return this.page.locator('header a[href="#preco"]');
  }

  getMenuDuvidas(): Locator {
    return this.page.locator('header a[href="#duvidas"]');
  }

  getBotaoAcessarPlataforma(): Locator {
    return this.page.locator('header a[href="https://app.auttra.com.br"]');
  }

  getSecaoPreco(): Locator {
    return this.page.locator('#preco');
  }

  getBotaoPlanoMensal(): Locator {
    return this.page.locator('#preco button', { hasText: /^Mensal$/ });
  }

  getPerguntaInstalar(): Locator {
    return this.page.locator('#duvidas button', {
      hasText: 'Preciso instalar alguma coisa?'
    });
  }

  getRespostaInstalar(): Locator {
    return this.page.locator('#faq-answer-1');
  }

  getCampoNome(): Locator {
    return this.page.locator('form.demo-form input[name="nome"]');
  }

  getCampoWhatsapp(): Locator {
    return this.page.locator('form.demo-form input[name="whatsapp"]');
  }

  getCampoOficina(): Locator {
    return this.page.locator('form.demo-form input[name="oficina"]');
  }

  getCampoMecanicos(): Locator {
    return this.page.locator('form.demo-form select[name="mecanicos"]');
  }

  getCampoConsentimento(): Locator {
    return this.page.locator(
      'form.demo-form .form-consent input[type="checkbox"]'
    );
  }

  getBotaoEnviar(): Locator {
    return this.page.locator('form.demo-form button[type="submit"]');
  }
}
