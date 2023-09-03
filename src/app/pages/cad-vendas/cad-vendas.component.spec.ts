import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadVendasComponent } from './cad-vendas.component';

describe('CadVendasComponent', () => {
  let component: CadVendasComponent;
  let fixture: ComponentFixture<CadVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadVendasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
