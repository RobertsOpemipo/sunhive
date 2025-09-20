import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphGroup } from './graph-group';

describe('GraphGroup', () => {
  let component: GraphGroup;
  let fixture: ComponentFixture<GraphGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
