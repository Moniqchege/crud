import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmCardsComponent } from './atm-cards.component';

describe('AtmCardsComponent', () => {
  let component: AtmCardsComponent;
  let fixture: ComponentFixture<AtmCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtmCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
