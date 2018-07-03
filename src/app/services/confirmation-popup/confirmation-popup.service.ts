import { Injectable } from '@angular/core';

@Injectable()

export class ConfirmationPopupService {
r;
conf;
  constructor() { }

	alertSomething(message) {
		var r = confirm(message);
		this.conf=r; 
	}
	returnFunc(){
		return this.conf;
	}
}
