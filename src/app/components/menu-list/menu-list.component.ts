import { Component, OnInit } from '@angular/core';
import { Product } from '../menu/menu.component';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menu: Product[] = [
    {
      name: 'Ravioles de Verdura',
      class: 'ravioles',
      img: 'img-01.jpeg',
      subname: 'Ravioles de ricota y verdura por 28 unidades.',
      price: '150',
    },
    {
      name: 'Ravioles de Jamón y Nuez',
      class: 'ravioles',
      img: 'img-03.jpg',
      subname: 'Ravioles de ricota, jamón, queso y nuez por 28 unidades.',
      price: '200',
    },
    {
      name: 'Sorrentino de Jamón y queso',
      class: 'sorrentinos',
      img: 'img-04.jpeg',
      subname: 'Sorrentinos de Jamón y queso por 16 unidades.',
      price: '200',
    },
    {
      name: 'Sorrentino de Jamón, ricota y queso',
      class: 'sorrentinos',
      img: 'img-04.jpeg',
      subname: 'Sorrentinos de Jamón, ricota y queso por 16 unidades.',
      price: '200',
    },
    {
      name: 'Sorrentino de Calabaza y queso',
      class: 'sorrentinos',
      img: 'img-04.jpeg',
      subname: 'Sorrentinos de Calabaza y queso por 16 unidades.',
      price: '200',
    },
    {
      name: 'Sorrentino de Roquefort',
      class: 'sorrentinos',
      img: 'img-05.jpg',
      subname: 'Sorrentinos de Roqefort y nuez por 16 unidades.',
      price: '270',
    },
    {
      name: 'Sorrentino de Capresse',
      class: 'sorrentinos',
      img: 'img-05.jpg',
      subname: 'Sorrentinos de Tomate, Albahaca y queso por 16 unidades.',
      price: '250',
    },
    {
      name: 'Panqueques',
      class: 'canelones',
      img: 'img-07.jpeg',
      subname: 'Pack de panqueques para armar por 20 unidades.',
      price: '200',
    },
    {
      name: 'Canelones de Verdura',
      class: 'canelones',
      img: 'img-09.jpeg',
      subname: 'Canelones de ricota y verdura por 8 unidades.',
      price: '300',
    },
    {
      name: 'Canelones de Jamon y queso',
      class: 'canelones',
      img: 'img-09.jpeg',
      subname: 'Canelones de Jamón y Queso por 8 unidades.',
      price: '400',
    },
    {
      name: 'Tallarines de Huevo',
      class: 'tallarines',
      img: 'img-10.jpeg',
      subname: 'Tallarines de huevo por kilo.',
      price: '250',
    },
    {
      name: 'Tallarines de Verdura',
      class: 'tallarines',
      img: 'img-11.jpg',
      subname: 'Tallarines de verdura por kilo.',
      price: '250',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
