import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHttpServiceComponent } from './my-http-service.component';

describe('MyHttpServiceComponent', () => {
  let component: MyHttpServiceComponent;
  let fixture: ComponentFixture<MyHttpServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHttpServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHttpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
