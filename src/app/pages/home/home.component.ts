import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
posts = [
   {
      myname: 'Name Namely',
      thedate: 'May 13th 2013',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus urna a nisi hendrerit volutpat. Donec varius sapien et lorem laoreet ornare. Suspendisse convallis velit et purus dictum auctor. Etiam aliquet blandit lorem, eu placerat augue porttitor ut. Cras vitae turpis ornare, pulvinar massa non, sollicitudin ligula.',
      profileUrl: 'http://www.leadersmag.com/issues/2013.1_Jan/ROB/LEADERS-Rev-John-Jenkins-University-of-Notre-Dame-web-images/LEADERS-Rev-John-Jenkins-University-of-Notre-Dame.jpeg',
      imageUrl: 'https://images.huffingtonpost.com/2016-07-13-1468418042-7917061-TouchdownJesusAgain_art-thumb.jpg'
    
   },
   {
      myname: 'Father Jenkins',
      thedate: 'May 2nd 2013',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus urna a nisi hendrerit volutpat. Donec varius sapien et lorem laoreet ornare. Suspendisse convallis velit et purus dictum auctor.',
      profileUrl: 'http://www.leadersmag.com/issues/2013.1_Jan/ROB/LEADERS-Rev-John-Jenkins-University-of-Notre-Dame-web-images/LEADERS-Rev-John-Jenkins-University-of-Notre-Dame.jpeg',
      imageUrl: 'https://images.huffingtonpost.com/2016-07-13-1468418042-7917061-TouchdownJesusAgain_art-thumb.jpg'

   }
]
  constructor() { 

  }
  myForm: FormGroup;
  items: any[] = [];

  ngOnInit() {
    this.myForm = this.formBuilder.group({
    myname: '',
    thedate: '',
    caption: '',
    profileUrl: '',
    imageUrl: ''
  });
  }

  createItem(): FormGroup {
  return this.formBuilder.group({
    myname: '',
    thedate: '',
    caption: '',
    profileUrl: '',
    imageUrl: ''
  });

  addItem(): void {
  	this.items;
  }
}
 
}



