import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContainer } from './footer.container';

describe('FooterContainerComponent', () => {
  let component: FooterContainer;
  let fixture: ComponentFixture<FooterContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
