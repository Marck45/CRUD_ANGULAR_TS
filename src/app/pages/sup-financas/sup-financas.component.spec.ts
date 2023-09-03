import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupFinancasComponent } from './sup-financas.component';

describe('SupFinancasComponent', () => {
  let component: SupFinancasComponent;
  let fixture: ComponentFixture<SupFinancasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupFinancasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupFinancasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
