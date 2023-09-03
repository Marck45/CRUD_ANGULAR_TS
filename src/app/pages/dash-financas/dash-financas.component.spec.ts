import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashFinancasComponent } from './dash-financas.component';

describe('DashFinancasComponent', () => {
  let component: DashFinancasComponent;
  let fixture: ComponentFixture<DashFinancasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashFinancasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashFinancasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
