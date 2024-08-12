import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productImages } from '../../dto/product.dto';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-popular-product-presentational',
  standalone: true,
  imports: [MatTooltipModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './popular-product.presentational.html',
  styleUrl: './popular-product.presentational.scss',
})
export class PopularProductPresentational implements OnChanges {
  @Input() productTitle: string | undefined;
  @Input() productCreatorImageSrc: string | undefined;
  @Input() productDescription: string | undefined;
  @Input() productImages: productImages[] = [];
  @Input() productCreator: string | undefined;
  @Input() productTrendCount: number | undefined;
  @Input() productId: number | undefined;

  /* 
  I can get the product as a productDto( @Input() product: productDto ), 
  but I want to choose the basic method.
  productDto型も作りましたが、今回は簡単な方法を選択しました
  */

  isAddedMyWishList = false;
  isAddedBasket = false;
  coverImageSrc: string = '';

  toggleWishList() {
    this.isAddedMyWishList = !this.isAddedMyWishList;
  }

  toggleBasket() {
    this.isAddedBasket = !this.isAddedBasket;
  }

  changeCoverImage(arrayIndex: number) {
    this.coverImageSrc = this.productImages[arrayIndex].src;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.productImages) {
      this.coverImageSrc = this.productImages[0].src;
    }
  }
}
