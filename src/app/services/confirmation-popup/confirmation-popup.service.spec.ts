import { TestBed, inject } from '@angular/core/testing';

import { ConfirmationPopupService } from './confirmation-popup.service';

describe('ConfirmationPopupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmationPopupService]
    });
  });

  it('should ...', inject([ConfirmationPopupService], (service: ConfirmationPopupService) => {
    expect(service).toBeTruthy();
  }));
});
