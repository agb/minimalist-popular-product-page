import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularProductPresentational } from '../presentational/product/popular-product.presentational';
import { productDto } from '../dto/product.dto';
import { PopularProductsService } from '../popular-products.service';
import { PopularProductsTopbarPresentational } from '../presentational/topbar/popular-products-topbar.presentational';
import { filterType, filterTypes } from '../dto/filter-type.dto';

@Component({
  selector: 'app-popular-products-container',
  standalone: true,
  imports: [
    CommonModule,
    PopularProductsTopbarPresentational,
    PopularProductPresentational,
  ],
  templateUrl: './popular-products-container.html',
  styleUrl: './popular-products-container.scss',
})
export class PopularProductsContainer {
  popularProductsService = inject(PopularProductsService);
  products: productDto[] = this.popularProductsService.getProducts();
  filterType: filterType = filterTypes.votes;
  filterTypes = filterTypes;

  changeFilterType(type: filterType) {
    this.filterType = type;

    switch (type) {
      case filterTypes.votes:
        this.products.sort((a, b) => b.votes - a.votes);
        break;
      case filterTypes.sales:
        this.products.sort((a, b) => b.sales - a.sales);
        break;
    }
  }

  getTrendCountByFilter(votes: number, sales: number): number {
    let trendCount = 0;

    if (this.filterType === filterTypes.votes) trendCount = votes;
    else if (this.filterType === filterTypes.sales) trendCount = sales;
    // alternative
    // trendCount = (this.filterType === filterTypes.votes) ? votes : sales;

    return trendCount;
  }
}
