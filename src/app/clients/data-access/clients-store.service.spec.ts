import { TestBed } from '@angular/core/testing';

import { ClientsStoreService } from './clients-store.service';

describe('ClientsStoreService', () => {
  let service: ClientsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
