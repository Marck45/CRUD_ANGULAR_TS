import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlanosComponent } from './page-planos.component';

describe('PagePlanosComponent', () => {
  let component: PagePlanosComponent;
  let fixture: ComponentFixture<PagePlanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePlanosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePlanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
