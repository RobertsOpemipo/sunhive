import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinCard } from './coin-card';

describe('CoinCard', () => {
  let component: CoinCard;
  let fixture: ComponentFixture<CoinCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
