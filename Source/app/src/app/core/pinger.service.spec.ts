/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PingerService } from './pinger.service';

describe('PingerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PingerService]
    });
  });

  it('should ...', inject([PingerService], (service: PingerService) => {
    expect(service).toBeTruthy();
  }));
});
