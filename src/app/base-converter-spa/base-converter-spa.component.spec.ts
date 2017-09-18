import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseConverterSpaComponent } from './base-converter-spa.component';

describe('BaseConverterSpaComponent', () => {
  let component: BaseConverterSpaComponent;
  let fixture: ComponentFixture<BaseConverterSpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseConverterSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseConverterSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
