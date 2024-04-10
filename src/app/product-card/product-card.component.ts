import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  product = {
    image: 'https://images-eu.ssl-images-amazon.com/images/I/617Zkh+WY8S._SLDPMOBCAROUSELAUTOCROP288221_MCnd_AC_SR462,693_.jpg',
    name: 'Awesome Metal Salad',
    description: 'The Football Is Good For Training And Recreational Purposes',
    unitAvailable: 10,
  }

  productImageStyle = {
    border: '1px solid black',
    filter: 'grayscale(0)',
  }

  formState = false //manejamos el estado en .html
  address = ''
  postalCode = 0


  orderForm = new FormGroup({
    address: new FormControl(''),
    postalCode: new FormControl(''),

})

  buyProduct() {
    console.log('Comprar este producto');
    this.formState = true
  }
  
  orderProduct() {
  const orderData = this.orderForm.value;
  console.log(orderData);
}


  addToCart() {
    console.log('Agregamos un producto al carrito');
  }

  onMouseEnter() {
    console.log('Mouse enter');
    this.productImageStyle = {...this.productImageStyle, filter: 'grayscale(100%)'}
}

  onMouseLeave() {
    console.log('Mouse leave');
    this.productImageStyle = {...this.productImageStyle, filter: 'grayscale(0)'}
  }
}
