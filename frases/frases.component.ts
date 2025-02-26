import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent implements OnInit { 
  protected frases: string[] = [
    "Não tenho medo de aceitar que você não é mais o mesmo.",
    "Não acredite em tudo o que vê. Todo mundo está travando uma batalha interna. Não é fácil para ninguém.",
    "Não tome decisões difíceis em dias complicados. Descanse e recupere suas energias!",
    "Um dia tudo isto ainda vai parecer pequeno, porque tuas conquistas te farão enorme.",
    "Quando estiver em dúvida sobre o caminho, dê um pequeno primeiro passo. Aos poucos, os próximos movimentos ficarão mais claros.",
    "Não tenha medo de sonhar. Tenha medo de não acreditar em você.",
    "Quando tudo parecer impossível, reavalie seus planos, organize-se e descubra como contornar esse desafio.",
    "Mais que obstáculos difíceis, existem dias difíceis.",
    "Às vezes, mais que dias de trabalho, você precisa de boas horas de sono!",
    "A idade não limita sonho algum! Seu corpo mudou, sua mente amadureceu.",
  ];
  
  protected fraseSelecionada: string = '';

  ngOnInit(): void {
    this.sortearFrase();
  }

  protected sortearFrase(): void {
    let novaFrase: string;
    do {
      const index = Math.floor(Math.random() * this.frases.length);
      novaFrase = this.frases[index];
    } while (novaFrase === this.fraseSelecionada);
    this.fraseSelecionada = novaFrase;
  }
}
