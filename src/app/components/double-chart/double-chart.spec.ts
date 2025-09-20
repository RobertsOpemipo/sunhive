import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleChart } from './double-chart';

describe('DoubleChart', () => {
  let component: DoubleChart;
  let fixture: ComponentFixture<DoubleChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoubleChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
