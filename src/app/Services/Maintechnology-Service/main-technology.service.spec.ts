import { TestBed } from '@angular/core/testing';

import { MainTechnologyService } from './main-technology.service';

describe('MainTechnologyService', () => {
  let service: MainTechnologyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainTechnologyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
