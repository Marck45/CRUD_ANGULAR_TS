import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitVendasComponent } from './hit-vendas.component';

describe('HitVendasComponent', () => {
  let component: HitVendasComponent;
  let fixture: ComponentFixture<HitVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitVendasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HitVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
