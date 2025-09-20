import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyFlowChart } from './energy-flow-chart';

describe('EnergyFlowChart', () => {
  let component: EnergyFlowChart;
  let fixture: ComponentFixture<EnergyFlowChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergyFlowChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyFlowChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
