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
    image: 'https://github.com/carolmt.png',
    name: 'Awesome Metal Salad',
    description: 'The Football Is Good For Training And Recreational Purposes',
    unitAvailable: 0,
  }
}
