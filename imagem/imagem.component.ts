import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {
  protected imagemAtual: string = '/biscoito.png';

  protected alternarImagem(): void {
    this.imagemAtual = this.novoAlternarImagem();
  }

  private novoAlternarImagem(): string {
    return this.imagemAtual === '/biscoito.png' ? '/biscoito-aberto.png' : '/biscoito.png';
  }
}


