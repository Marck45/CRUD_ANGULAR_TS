import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDespesasComponent } from './edit-despesas.component';

describe('EditDespesasComponent', () => {
  let component: EditDespesasComponent;
  let fixture: ComponentFixture<EditDespesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDespesasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
