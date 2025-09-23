import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertGroup } from './alert-group';

describe('AlertGroup', () => {
  let component: AlertGroup;
  let fixture: ComponentFixture<AlertGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
