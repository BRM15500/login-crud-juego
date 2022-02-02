import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosCrudComponent } from './empleados-crud.component';

describe('EmpleadosCrudComponent', () => {
  let component: EmpleadosCrudComponent;
  let fixture: ComponentFixture<EmpleadosCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadosCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
