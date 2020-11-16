import { TestBed } from '@angular/core/testing';

import { CepHttpService } from './cep-http.service';

describe('CepHttpService', () => {
  let service: CepHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
