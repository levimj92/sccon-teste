import { TestBed } from '@angular/core/testing';

import { CepStateService } from './cep-state.service';

describe('CepStateService', () => {
  let service: CepStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
