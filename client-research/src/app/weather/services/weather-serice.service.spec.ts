import { TestBed } from '@angular/core/testing';

import { WeatherSericeService } from './weather-serice.service';

describe('WeatherSericeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherSericeService = TestBed.get(WeatherSericeService);
    expect(service).toBeTruthy();
  });
});
