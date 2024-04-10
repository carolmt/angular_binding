import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],	
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  name = 'John'
  surname = 'Doe'
  age = 33
  married = true
  public nationality = 'Japanese'

  address =  {
    country: 'UK',
    city: 'Damascus',
    street: 'Liberty'
  }
  private dni = '123456789'

  getDate() {
    return new Date();
  }
}
