import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSindicatoComponent } from './form-sindicato.component';

describe('FormSindicatoComponent', () => {
  let component: FormSindicatoComponent;
  let fixture: ComponentFixture<FormSindicatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSindicatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSindicatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
