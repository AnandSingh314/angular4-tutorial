import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAliasDemoComponent } from './type-alias-demo.component';

describe('TypeAliasDemoComponent', () => {
  let component: TypeAliasDemoComponent;
  let fixture: ComponentFixture<TypeAliasDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeAliasDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAliasDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
