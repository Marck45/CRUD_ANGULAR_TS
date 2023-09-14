import { TestBed } from '@angular/core/testing';

import { ProdutosAPiService } from './produtos-api.service';

describe('ProdutosAPiService', () => {
  let service: ProdutosAPiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosAPiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
