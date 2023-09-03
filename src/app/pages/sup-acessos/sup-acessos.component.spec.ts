import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupAcessosComponent } from './sup-acessos.component';

describe('SupAcessosComponent', () => {
  let component: SupAcessosComponent;
  let fixture: ComponentFixture<SupAcessosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupAcessosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupAcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
