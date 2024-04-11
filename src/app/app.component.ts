import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { BtnComponent } from './components/btn/btn.component';
import { LinkComponent } from './components/link/link.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, AvatarComponent, BtnComponent, LinkComponent, UserCardComponent, 
            ProductCardComponent, CommonModule, ProductsComponent, AboutUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'proyecto_binding';

  styles = {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    padding: '20px',
    width: '200px',
  }

  products: any;

  ngOnInit(): void {
    this.products = this.products;
  }
  
}
