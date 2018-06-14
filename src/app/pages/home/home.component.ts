import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
  }
 
}
const POSTS = [
   {
      myname: 'My Name',
      thedate: 'Date',
      caption: 'some post caption',
      profileUrl: 'http://www.leadersmag.com/issues/2013.1_Jan/ROB/LEADERS-Rev-John-Jenkins-University-of-Notre-Dame-web-images/LEADERS-Rev-John-Jenkins-University-of-Notre-Dame.jpeg',
      imageUrl: 'https://scontent.fash1-1.fna.fbcdn.net/v/t1.0-9/33814913_1577979828994199_4316850570984947712_n.jpg?_nc_cat=0&oh=44ebb70399135c218f3d1a195b1c834f&oe=5B7C2456',
    
   },
   {
      myname: 'My Name',
      thedate: 'Date',
      caption: 'some other post caption',
      profileUrl: 'http://www.leadersmag.com/issues/2013.1_Jan/ROB/LEADERS-Rev-John-Jenkins-University-of-Notre-Dame-web-images/LEADERS-Rev-John-Jenkins-University-of-Notre-Dame.jpeg',
      imageUrl: 'https://images.huffingtonpost.com/2016-07-13-1468418042-7917061-TouchdownJesusAgain_art-thumb.jpg',
      
   }
];

@Component({
  selector: 'posts',
  template: './home.component.html',
  
  styleUrls: ['./home.component.scss']
})


export class Posts {

  posts = POSTS;
 
}

