import { TestBed, async, inject } from '@angular/core/testing';

import { MyLoginAuthGuard } from './my-login-auth.guard';

describe('MyLoginAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyLoginAuthGuard]
    });
  });

  it('should ...', inject([MyLoginAuthGuard], (guard: MyLoginAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
