/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataProcessingServiceService } from './data-processing-service.service';

describe('Service: DataProcessingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataProcessingServiceService]
    });
  });

  it('should ...', inject([DataProcessingServiceService], (service: DataProcessingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
