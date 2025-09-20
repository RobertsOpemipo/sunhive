import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageComparison } from './village-comparison';

describe('VillageComparison', () => {
  let component: VillageComparison;
  let fixture: ComponentFixture<VillageComparison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillageComparison]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillageComparison);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
