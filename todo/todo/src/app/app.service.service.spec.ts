import { TestBed, inject } from '@angular/core/testing';

import { App.ServiceService } from './app.service.service';

describe('App.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [App.ServiceService]
    });
  });

  it('should be created', inject([App.ServiceService], (service: App.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
