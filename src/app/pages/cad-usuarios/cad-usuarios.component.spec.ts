import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadUsuariosComponent } from './cad-usuarios.component';

describe('CadUsuariosComponent', () => {
  let component: CadUsuariosComponent;
  let fixture: ComponentFixture<CadUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
