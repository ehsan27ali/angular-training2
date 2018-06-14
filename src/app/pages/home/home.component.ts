import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
posts = [
   {
      myname: 'Father Jenkins',
      thedate: 'May 13th 2013',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus urna a nisi hendrerit volutpat. Donec varius sapien et lorem laoreet ornare. Suspendisse convallis velit et purus dictum auctor. Etiam aliquet blandit lorem, eu placerat augue porttitor ut. Cras vitae turpis ornare, pulvinar massa non, sollicitudin ligula.',
      profileUrl: 'http://www.leadersmag.com/issues/2013.1_Jan/ROB/LEADERS-Rev-John-Jenkins-University-of-Notre-Dame-web-images/LEADERS-Rev-John-Jenkins-University-of-Notre-Dame.jpeg',
      imageUrl: 'https://scontent.fash1-1.fna.fbcdn.net/v/t1.0-9/33814913_1577979828994199_4316850570984947712_n.jpg?_nc_cat=0&oh=44ebb70399135c218f3d1a195b1c834f&oe=5B7C2456'
    
   },
   {
      myname: 'Father Jenkins 2',
      thedate: 'May 2nd 2013',
      caption: 'some other post caption',
      profileUrl: 'http://www.leadersmag.com/issues/2013.1_Jan/ROB/LEADERS-Rev-John-Jenkins-University-of-Notre-Dame-web-images/LEADERS-Rev-John-Jenkins-University-of-Notre-Dame.jpeg',
      imageUrl: 'https://images.huffingtonpost.com/2016-07-13-1468418042-7917061-TouchdownJesusAgain_art-thumb.jpg'
      
   }
]
  constructor() { 

  }

  ngOnInit() {
  }
 
}



