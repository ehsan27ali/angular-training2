import { Injectable } from '@angular/core';

@Injectable()

export class ConfirmationPopupService {

  constructor() { }

	alertSomething() {
		alert('This is us testing the confirmation popup service');
	}

}
