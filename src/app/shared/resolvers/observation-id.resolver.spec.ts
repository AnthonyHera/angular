import { TestBed } from '@angular/core/testing';

import { ObservationIdResolver } from './observation-id.resolver';

describe('ObservationIdResolver', () => {
  let resolver: ObservationIdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ObservationIdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
