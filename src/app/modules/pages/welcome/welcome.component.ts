import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  email: string = 'generico@generico.com';

  responsiveOptions: any[] | undefined;

  data: any = [
    {
      itemImageSrc: 'assets/img/gallery/gruta-lago-azul-bonito-ms.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'assets/img/gallery/chapada-dos-veadeiros-goias.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'assets/img/gallery/pantanal.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'assets/img/gallery/fernando-de-noronha.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'assets/img/gallery/jericoacoara-ceara.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'assets/img/gallery/peninsula-de-marau-bahia.jpg',
      thumbnailImageSrc: 'none',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'assets/img/gallery/diamantina-mg.jpg',
      thumbnailImageSrc: 'none',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'assets/img/gallery/ouro-preto-mg.jpg',
      thumbnailImageSrc: 'none',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'assets/img/gallery/praca-da-liberdade-mg-bh.jpg',
      thumbnailImageSrc: 'none',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'assets/img/gallery/petropolis-rj.jpg',
      thumbnailImageSrc: 'none',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'assets/img/gallery/blumenau-santa-catarina.jpg',
      thumbnailImageSrc: 'none',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'assets/img/gallery/florianopolis-santa-catarina.jpg',
      thumbnailImageSrc: 'none',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'assets/img/gallery/canela-rio-grande-do-sul.jpg',
      thumbnailImageSrc: 'none',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'assets/img/gallery/lado-negro-gramado-rs.jpg',
      thumbnailImageSrc: 'none',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'assets/img/gallery/joao-pessoa-paraiba.jpg',
      thumbnailImageSrc: 'none',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
  ];
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  navToDestinationPage = () => {
    this.router.navigate(['destinations']);
  };
}
