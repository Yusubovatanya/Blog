import { TestBed } from '@angular/core/testing';

import { BlogCoreService } from './blog-core.service';

describe('BlogCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogCoreService = TestBed.get(BlogCoreService);
    expect(service).toBeTruthy();
  });
});
