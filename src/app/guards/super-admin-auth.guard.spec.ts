import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { superAdminAuthGuard } from './super-admin-auth.guard';

describe('superAdminAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => superAdminAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
