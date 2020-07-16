import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlateComponent } from './form-plate.component';

describe('FormPlateComponent', () => {
  let component: FormPlateComponent;
  let fixture: ComponentFixture<FormPlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
