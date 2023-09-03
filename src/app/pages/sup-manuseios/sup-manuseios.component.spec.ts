import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupManuseiosComponent } from './sup-manuseios.component';

describe('SupManuseiosComponent', () => {
  let component: SupManuseiosComponent;
  let fixture: ComponentFixture<SupManuseiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupManuseiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupManuseiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
