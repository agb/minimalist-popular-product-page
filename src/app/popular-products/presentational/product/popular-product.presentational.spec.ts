import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularProductPresentational } from './popular-product.presentational';

describe('PopularProductPresentationalComponent', () => {
  let component: PopularProductPresentational;
  let fixture: ComponentFixture<PopularProductPresentational>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularProductPresentational],
    }).compileComponents();

    fixture = TestBed.createComponent(PopularProductPresentational);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should be loop',()=> {

  //   const products = [
  //     {
  //       id: 1,
  //       title: 'Yellow Pail',
  //       description: 'On-demand sand castle construction expertise.',
  //       url: '#',
  //       votes: 2,
  //       submitterAvatarUrl: 'images/avatars/daniel.jpg',
  //       productImageUrl: 'images/products/image-aqua.png',
  //     },
  //     {
  //       id: 2,
  //       title: 'Supermajority: The Fantasy Congress League',
  //       description: 'Earn points when your favorite politicians pass legislation.',
  //       url: '#',
  //       votes: 3,
  //       submitterAvatarUrl: 'images/avatars/kristy.png',
  //       productImageUrl: 'images/products/image-rose.png',
  //     },
  //     {
  //       id: 3,
  //       title: 'Tinfoild: Tailored tinfoil hats',
  //       description: 'We already have your measurements and shipping address.',
  //       url: '#',
  //       votes: 4,
  //       submitterAvatarUrl: 'images/avatars/veronika.jpg',
  //       productImageUrl: 'images/products/image-steel.png',
  //     },
  //     {
  //       id: 4,
  //       title: 'Haught or Naught',
  //       description: 'High-minded or absent-minded? You decide.',
  //       url: '#',
  //       votes:5,
  //       submitterAvatarUrl: 'images/avatars/molly.png',
  //       productImageUrl: 'images/products/image-yellow.png',
  //     },
  //   ];

  //   component.
    
  //   expect(component).toHaveBeenCalled
  // })
});
