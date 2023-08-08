import { TestBed } from '@angular/core/testing';

import { InviteesService } from './invitees.service';

describe('InviteesService', () => {
  let service: InviteesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InviteesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
