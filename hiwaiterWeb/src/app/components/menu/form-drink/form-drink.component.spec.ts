import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDrinkComponent } from './form-drink.component';

describe('FormDrinkComponent', () => {
  let component: FormDrinkComponent;
  let fixture: ComponentFixture<FormDrinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDrinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
