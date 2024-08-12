import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularProductsPage } from './popular-products.page';

describe('PopularProductsPage', () => {
  let component: PopularProductsPage;
  let fixture: ComponentFixture<PopularProductsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularProductsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PopularProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
