import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  selector: 'app-cep-consulta',
  templateUrl: './cep-consulta.page.html',
  styleUrls: ['./cep-consulta.page.scss'],
})
export class CepConsultaPage {
  cep: string = '';
  dados: any = null;
  errorMessage: string = '';

  constructor(private router: Router) {}

  resetResponse() {
    this.dados = null;
    this.errorMessage = '';
  }

  async consultarCep() {
    this.resetResponse(); // Reseta a resposta antes de consultar
  
    if (!this.cep) {
      this.errorMessage = 'Por favor, digite um CEP válido.';
      return;
    }
  
    try {
      const response = await fetch(`https://viacep.com.br/ws/${this.cep}/json/`);
      if (!response.ok) {
        throw new Error('CEP não encontrado.');
      }
      this.dados = await response.json();
    } catch (error: any) {  
      this.errorMessage = error instanceof Error ? error.message : 'Erro desconhecido.';
    }
  }

  voltarHome() {
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }
}
