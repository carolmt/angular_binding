import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  product = {
    image: 'https://images-eu.ssl-images-amazon.com/images/I/617Zkh+WY8S._SLDPMOBCAROUSELAUTOCROP288221_MCnd_AC_SR462,693_.jpg',
    name: 'Awesome Metal Salad',
    description: 'The Football Is Good For Training And Recreational Purposes',
    unitAvailable: 0,
  }

  productImageStyle = {
    border: '1px solid black',
    filter: 'grayscale(100%)',
  }
}
