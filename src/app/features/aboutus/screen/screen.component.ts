import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  cards = [
    {
      title: 'Onde nossa loja nasceu?',
      continuation: 'Blumenau - SC',
      imageUrl:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/8b/1b/8b/emporio-vila-germanica.jpg?w=500&h=400&s=1',
      text: 'Criada no fundo de uma garagem na Itoupava Central, durante uma década focamos muito em levar ótimos produtos aos nossos clientes.',
    },
    {
      title: 'Quem foi nosso fundador?',
      continuation: 'Mário Eduardo dos Santos',
      imageUrl:
        'https://fernandofranzini.files.wordpress.com/2017/07/imagem-pato-engravatado-azuleditededited1.jpg',
      text: 'Diariamente, esse homem foi responsável pela nossa alegria durante jornadas de vendas.',
    },
    {
      title: 'Nosso objetivo aqui?',
      continuation: 'Inovar!',
      imageUrl:
        'https://exame.com/wp-content/uploads/2021/02/lampada-acesa-e1516111601891.jpg',
      text: 'Procuramos cada vez mais fazer com que pessoas se sintam melhores vitiando nossa loja!',
    },
    {
      title: 'Quanto já lucramos?',
      continuation: 'R$ 6.500.000,00!',
      imageUrl:
        'https://amanha.com.br/images/p/9191/Notas-de-cem-reais-espalhadas.jpeg',
      text: 'Somos uma das maiores vendedoras de aparelho do estado de SC!',
    },
  ];
}
