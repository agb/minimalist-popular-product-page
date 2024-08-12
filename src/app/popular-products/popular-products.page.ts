import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularProductsContainer } from './container/popular-products-container';

@Component({
  selector: 'app-popular-products-page',
  standalone: true,
  imports: [CommonModule, PopularProductsContainer],
  templateUrl: './popular-products.page.html',
  styleUrl: './popular-products.page.scss',
})
export class PopularProductsPage {}
