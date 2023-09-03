import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescontosComponent } from './descontos.component';

describe('DescontosComponent', () => {
  let component: DescontosComponent;
  let fixture: ComponentFixture<DescontosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescontosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
