import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PopularProductsPage } from './popular-products/popular-products.page';
import { NavbarPage } from './navbar/navbar.page';
import { FooterPage } from './footer/footer.page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PopularProductsPage,
    NavbarPage,
    FooterPage,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
