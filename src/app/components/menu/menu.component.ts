import { Component, OnInit } from '@angular/core';

export interface Product {
  name: string;
  class: string;
  img: string;
  subname: string;
  price: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})


export class MenuComponent implements OnInit {

  term:string = '';

  menu: Product[] = [
    {
      name: 'Ravioles de Verdura',
      class: 'ravioles',
      img: 'img-01',
      subname: 'Ravioles de ricota y verdura por 28 unidades.',
      price: '150',
    },
    {
      name: 'Ravioles de Jamón y Nuez',
      class: 'ravioles',
      img: 'img-03',
      subname: 'Ravioles de ricota, jamón, queso y nuez por 28 unidades.',
      price: '200',
    },
    {
      name: 'Sorrentino de Jamón y queso',
      class: 'sorrentinos',
      img: 'img-04',
      subname: 'Sorrentinos de Jamón y queso por 16 unidades.',
      price: '200',
    },
    {
      name: 'Sorrentino de Jamón, ricota y queso',
      class: 'sorrentinos',
      img: 'img-04',
      subname: 'Sorrentinos de Jamón, ricota y queso por 16 unidades.',
      price: '200',
    },
    {
      name: 'Sorrentino de Calabaza y queso',
      class: 'sorrentinos',
      img: 'img-04',
      subname: 'Sorrentinos de Calabaza y queso por 16 unidades.',
      price: '200',
    },
    {
      name: 'Sorrentino de Roquefort',
      class: 'sorrentinos',
      img: 'img-05',
      subname: 'Sorrentinos de Roqefort y nuez por 16 unidades.',
      price: '270',
    },
    {
      name: 'Sorrentino de Capresse',
      class: 'sorrentinos',
      img: 'img-05',
      subname: 'Sorrentinos de Tomate, Albahaca y queso por 16 unidades.',
      price: '250',
    },
    {
      name: 'Panqueques',
      class: 'canelones',
      img: 'img-07',
      subname: 'Pack de panqueques para armar por 20 unidades.',
      price: '200',
    },
    {
      name: 'Canelones de Verdura',
      class: 'canelones',
      img: 'img-08',
      subname: 'Canelones de ricota y verdura por 8 unidades.',
      price: '300',
    },
    {
      name: 'Canelones de Jamon y queso',
      class: 'canelones',
      img: 'img-09',
      subname: 'Canelones de Jamón y Queso por 8 unidades.',
      price: '400',
    },
    {
      name: 'Tallarines de Huevo',
      class: 'tallarines',
      img: 'img-10',
      subname: 'Tallarines de huevo por kilo.',
      price: '250',
    },
    {
      name: 'Tallarines de Verdura',
      class: 'tallarines',
      img: 'img-11',
      subname: 'Tallarines de verdura por kilo.',
      price: '250',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
