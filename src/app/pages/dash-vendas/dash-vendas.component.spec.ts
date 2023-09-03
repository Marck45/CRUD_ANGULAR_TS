import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashVendasComponent } from './dash-vendas.component';

describe('DashVendasComponent', () => {
  let component: DashVendasComponent;
  let fixture: ComponentFixture<DashVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashVendasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
