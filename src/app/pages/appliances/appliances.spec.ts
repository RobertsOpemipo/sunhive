import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appliances } from './appliances';

describe('Appliances', () => {
  let component: Appliances;
  let fixture: ComponentFixture<Appliances>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appliances]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appliances);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
