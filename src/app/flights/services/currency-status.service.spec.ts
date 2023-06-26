/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrencyStatusService } from './currency-status.service';

describe('Service: CurrencyStatus', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyStatusService]
    });
  });

  it('should ...', inject([CurrencyStatusService], (service: CurrencyStatusService) => {
    expect(service).toBeTruthy();
  }));
});
