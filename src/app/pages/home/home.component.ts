import { Component, OnInit } from '@angular/core';
import { ConfirmationPopupService } from '../../services/confirmation-popup/confirmation-popup.service';
import { RestService } from '../../services/rest-api/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  // myForm: FormGroup;
  posts: any[] = [];
  items: any[] = [];
  newPost: any = {
    imageUrl: '',
    caption: '',
    thedate: '',
    profileUrl: '',
    myname: '',
  };
  hasError= false;
  hasOtherError=false;
  errorMessage= '';
  i = 1;
  confirmMessages = ["Are you sure you want to delete?"];

  // posts = [
  //   {
  //       myname: 'Name Namely',
  //       thedate: 'May 13th 2013',
  //       caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus urna a nisi hendrerit volutpat. Donec varius sapien et lorem laoreet ornare. Suspendisse convallis velit et purus dictum auctor. Etiam aliquet blandit lorem, eu placerat augue porttitor ut. Cras vitae turpis ornare, pulvinar massa non, sollicitudin ligula.',
  //       profileUrl: 'http://www.leadersmag.com/issues/2013.1_Jan/ROB/LEADERS-Rev-John-Jenkins-University-of-Notre-Dame-web-images/LEADERS-Rev-John-Jenkins-University-of-Notre-Dame.jpeg',
  //       imageUrl: 'https://images.huffingtonpost.com/2016-07-13-1468418042-7917061-TouchdownJesusAgain_art-thumb.jpg'
  //   },
  //   {
  //       myname: 'Father Jenkins',
  //       thedate: 'May 2nd 2013',
  //       caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus urna a nisi hendrerit volutpat. Donec varius sapien et lorem laoreet ornare. Suspendisse convallis velit et purus dictum auctor.',
  //       profileUrl: 'http://www.leadersmag.com/issues/2013.1_Jan/ROB/LEADERS-Rev-John-Jenkins-University-of-Notre-Dame-web-images/LEADERS-Rev-John-Jenkins-University-of-Notre-Dame.jpeg',
  //       imageUrl: 'https://images.huffingtonpost.com/2016-07-13-1468418042-7917061-TouchdownJesusAgain_art-thumb.jpg'
  //   }
  // ];

  constructor(private popup: ConfirmationPopupService,
              private restAPI: RestService) {

  }

  ngOnInit() {

    // Grab all the existing records
    this.restAPI.get('/records').then((data) => {
      console.log('Got the data', data);
      this.posts = data;
    }, (error) => {
      alert('An error occurred grabbing the data');
      console.log('Error getting data', error);
    });

  }

  removePost(i) {
    // alert("Are you sure you want to delete?");
    this.popup.alertSomething();
    var messeges = [this.confirmMessages];
    this.posts.splice(i, 1);
  }

  doSubmit() {

  	// sets error back to false upon submit
  	this.hasError = false;
  	this.errorMessage = '';
  	// checks for errors in the submission
  	if (this.newPost.myname.length == 0) {
  		this.hasError = true;
  		this.errorMessage = 'Must include name';

  	}
  	if (this.newPost.thedate.length == 0) {
  		this.hasError = true;
  		this.errorMessage = 'Must include date';

  	}
  	if (this.newPost.profileUrl.length == 0) {
      this.hasError = true;
      this.errorMessage = 'Must include profile picture URL';

    }
    if (this.newPost.profileUrl.length != 0){
      var test = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(this.newPost.profileUrl);
      if (test) {
        this.hasOtherError = false;
      } else {
        this.hasOtherError = true;
        this.errorMessage = 'Must include valid profile picture URL';
      }
    }
    if (this.newPost.imageUrl.length == 0) {
      this.hasError = true;
      this.errorMessage = 'Must include main picture URL';
    }
    if (this.newPost.imageUrl.length != 0){
      var test = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(this.newPost.profileUrl);
      if (test) {
        this.hasOtherError = false;
      } else {
        this.hasOtherError = true;
        this.errorMessage = 'Must include valid main picture URL';
      }
    }
    if (this.newPost.caption.length == 0) {
      this.hasError = true;
      this.errorMessage = 'Must include message';

    }

  	//pushes new post to array of posts
  	if(this.hasError == false && this.hasOtherError==false) {
	    const p = this.newPost;
	    this.posts.push(p);
	    this.newPost = {};
      this.i = this.i+1;
    }
  }


}
