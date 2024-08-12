import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularProductsContainer } from './popular-products-container';

describe('PopularProductsContainer', () => {
  let component: PopularProductsContainer;
  let fixture: ComponentFixture<PopularProductsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularProductsContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(PopularProductsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
