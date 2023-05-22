import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsProductComponent } from './forms-product.component';

describe('FormsProductComponent', () => {
  let component: FormsProductComponent;
  let fixture: ComponentFixture<FormsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
