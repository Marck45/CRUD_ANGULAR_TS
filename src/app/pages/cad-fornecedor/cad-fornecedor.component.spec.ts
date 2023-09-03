import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadFornecedorComponent } from './cad-fornecedor.component';

describe('CadFornecedorComponent', () => {
  let component: CadFornecedorComponent;
  let fixture: ComponentFixture<CadFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadFornecedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
