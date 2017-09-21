import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceRoutingComponent } from './advance-routing.component';

describe('AdvanceRoutingComponent', () => {
  let component: AdvanceRoutingComponent;
  let fixture: ComponentFixture<AdvanceRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
