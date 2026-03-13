import { TestBed } from '@angular/core/testing';
import { staticmotorservice } from './staticmotorservice.service';

describe('staticmotorservice', () => {
  let service: staticmotorservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(staticmotorservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
