import { Injectable, inject } from '@angular/core';
import { productDto } from './dto/product.dto';
import { environment } from '../../environment.dev';

@Injectable({
  providedIn: 'root',
})
export class PopularProductsService {
  getProducts(): productDto[] {
    /* 
    We are use openApi in my current company. If we have a back-end/production environment, I could get or filter the product on the back-end side.
    現在会社ではopenApiを使うします。prod側で場合back-end側から取得かフィルターできるんです。
  */

    const generateVoteCount = () => Math.floor(Math.random() * 50 + 15);
    const generateMediaUrl = (path: string) =>
      environment.baseUrl + '/assets/' + path;

    const products = [
      {
        id: 0,
        title: 'Nike Alphafly',
        description:
          'A thick, lightweight support system marries the 2 worlds of comfort and speed in holy running matrimony. Enjoy the greatest energy return of all our racing shoes while you chase your personal bests.',
        isAdvertising: true,
        votes: generateVoteCount(),
        sales: 50,
        creator: 'Hiroshi Sugitani',
        creatorAvatarSourceUrl: generateMediaUrl('images/avatars/daniel.jpg'),
        productsImages: [
          {
            hexColorCode: '#98fc6d',
            src: generateMediaUrl('images/products/product-0.jpg'),
          },
          {
            hexColorCode: '#fc7e49',
            src: generateMediaUrl('images/products/product-1.jpg'),
          },
        ],
      },
      {
        id: 1,
        title: 'Nike Alphafly',
        description:
          'Once you take a few strides in the Nike Air Zoom Alphafly NEXT% 2, you’ll never look at your favorite pair of old racing shoes the same way again.  ',
        isAdvertising: false,
        votes: generateVoteCount(),
        sales: 210,
        creator: 'Masako Yoshida',
        creatorAvatarSourceUrl: generateMediaUrl('images/avatars/kristy.png'),
        productsImages: [
          {
            hexColorCode: '#ed2570',
            src: generateMediaUrl('images/products/product-1-1.jpg'),
          },
          {
            hexColorCode: '#ffffff',
            src: generateMediaUrl('images/products/product-1-2.jpg'),
          },
        ],
      },
      {
        id: 2,
        title: '  The Fantasy Congress League',
        description:
          'This version of the Alphafly 2 has personal touches from Eliud to remind you to keep reaching for more.',
        isAdvertising: false,
        votes: generateVoteCount(),
        sales: 250,
        creator: 'Takeshi Nakai',
        creatorAvatarSourceUrl: generateMediaUrl('images/avatars/kristy.png'),
        productsImages: [
          {
            hexColorCode: '#c21c2d',
            src: generateMediaUrl('images/products/product-2-1.jpg'),
          },
          {
            hexColorCode: '#000000',
            src: generateMediaUrl('images/products/product-2-2.jpg'),
          },
        ],
      },
      {
        id: 3,
        title: 'Tinfoild: Tailored tinfoil hats',
        description:
          'These rocket ships are made to help shave precious time off your personal records without surrendering the foundation you need to go the full distance.We already have your measurements.',
        isAdvertising: false,
        votes: generateVoteCount(),
        sales: 371,
        creator: 'Akiko Akamatsu',
        creatorAvatarSourceUrl: generateMediaUrl('images/avatars/veronika.jpg'),
        productsImages: [
          {
            hexColorCode: '#ffffff',
            src: generateMediaUrl('images/products/product-3.jpg'),
          },
        ],
      },
      {
        id: 4,
        title: 'Eliud Kipchoge',
        description:
          'Eliud Kipchoge believes there are no limits to his potential—or yours. T These rocket ships help shave precious time off your personal records without surrendering the foundation you need to go the full distance. ',
        isAdvertising: false,
        votes: generateVoteCount(),
        sales: 395,
        creator: 'Isamu Kitamura',
        creatorAvatarSourceUrl: generateMediaUrl('images/avatars/molly.png'),
        productsImages: [
          {
            hexColorCode: '#ffffff',
            src: generateMediaUrl('images/products/product-4.jpg'),
          },
        ],
      },
      {
        id: 4,
        title: 'Haught or Naught',
        description: 'High-minded or absent-minded? You decide.',
        isAdvertising: false,
        votes: generateVoteCount(),
        sales: 422,
        creator: 'Tsuji Oshima',
        creatorAvatarSourceUrl: generateMediaUrl('images/avatars/molly.png'),
        productsImages: [
          {
            hexColorCode: '#ffffff',
            src: generateMediaUrl('images/products/product-5.jpg'),
          },
        ],
      },
    ].sort((a, b) => b.votes - a.votes);

    return products;
  }
}
