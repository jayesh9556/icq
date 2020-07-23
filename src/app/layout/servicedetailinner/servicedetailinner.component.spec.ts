import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedetailinnerComponent } from './servicedetailinner.component';

describe('ServicedetailinnerComponent', () => {
  let component: ServicedetailinnerComponent;
  let fixture: ComponentFixture<ServicedetailinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicedetailinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicedetailinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
