import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPage } from './footer.page';

describe('FooterPageComponent', () => {
  let component: FooterPage;
  let fixture: ComponentFixture<FooterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
