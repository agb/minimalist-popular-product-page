import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularProductsTopbarPresentational } from './popular-products-topbar.presentational';

describe('PopularProductsTopbarPresentational', () => {
  let component: PopularProductsTopbarPresentational;
  let fixture: ComponentFixture<PopularProductsTopbarPresentational>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularProductsTopbarPresentational],
    }).compileComponents();

    fixture = TestBed.createComponent(PopularProductsTopbarPresentational);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
