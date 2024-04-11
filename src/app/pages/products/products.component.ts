import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { BtnComponent } from '../../components/btn/btn.component';
import { LinkComponent } from '../../components/link/link.component';
import { UserCardComponent } from '../../components/user-card/user-card.component';

export const products = [
  {
    image: 'https://images-eu.ssl-images-amazon.com/images/I/617Zkh+WY8S._SLDPMOBCAROUSELAUTOCROP288221_MCnd_AC_SR462,693_.jpg',
    name: 'Awesome Metal Salad',
    description: 'The Football Is Good For Training And Recreational Purposes',
    unitAvailable: 7,
    date: 'Thu Aug 31 2023 06:51:15 GMT+0200 (Central European Summer Time)',
    price: 213.343242,
    category: 'cosmetics'
  } ,
  {
    image: 'https://images-eu.ssl-images-amazon.com/images/I/617Zkh+WY8S._SLDPMOBCAROUSELAUTOCROP288221_MCnd_AC_SR462,693_.jpg',
    name: 'Sleek Plastic Soap',
    description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    unitAvailable: 30,
    date: 'Thu Apr 11 2024 03:51:31 GMT+0200 (Central European Summer Time)',
    price: 715.00,
    category: 'home'
  },
  {
    image: 'https://images-eu.ssl-images-amazon.com/images/I/617Zkh+WY8S._SLDPMOBCAROUSELAUTOCROP288221_MCnd_AC_SR462,693_.jpg',
    name: 'Unbranded Frozen Sausages',
    description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    unitAvailable: 20,
    date: 'Thu Apr 11 2024 03:51:31 GMT+0200 (Central European Summer Time)',
    price: 584.00,
    category: 'technology'
  },
  {
    image: 'https://images-eu.ssl-images-amazon.com/images/I/617Zkh+WY8S._SLDPMOBCAROUSELAUTOCROP288221_MCnd_AC_SR462,693_.jpg',
    name: 'Practical Frozen Shoes',
    description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    unitAvailable: 10,
    date: 'Thu Apr 11 2024 03:51:31 GMT+0200 (Central European Summer Time)',
    price: 841.00
  },
  {
    image: 'https://images-eu.ssl-images-amazon.com/images/I/617Zkh+WY8S._SLDPMOBCAROUSELAUTOCROP288221_MCnd_AC_SR462,693_.jpg',
    name: 'Rustic Cotton Sausages',
    description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    unitAvailable: 40,
    date: 'Thu Apr 11 2024 03:51:31 GMT+0200 (Central European Summer Time)',
    price: 319.00
  }
]

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, AvatarComponent, BtnComponent, LinkComponent, UserCardComponent, 
    ProductCardComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {


  styles = {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    padding: '20px',
    width: '200px',
  }

  products: any;

  ngOnInit(): void {
    this.products = products;
  }
}
