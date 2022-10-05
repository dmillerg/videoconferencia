import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSindicatoPisoComponent } from './admin-sindicato-piso.component';

describe('AdminSindicatoPisoComponent', () => {
  let component: AdminSindicatoPisoComponent;
  let fixture: ComponentFixture<AdminSindicatoPisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSindicatoPisoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSindicatoPisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
