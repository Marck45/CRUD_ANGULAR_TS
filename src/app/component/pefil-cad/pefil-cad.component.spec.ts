import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PefilCadComponent } from './pefil-cad.component';

describe('PefilCadComponent', () => {
  let component: PefilCadComponent;
  let fixture: ComponentFixture<PefilCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PefilCadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PefilCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
