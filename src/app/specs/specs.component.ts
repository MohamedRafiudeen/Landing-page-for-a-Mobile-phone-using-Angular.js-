import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.css']
})
export class SpecsComponent implements OnInit {

 spec1="Infinity Display";
 description1= "More screen-area means more space to do great things. Go big with the Galaxy Note8's 16.05-cm (6.3 inches) screen."


 spec2="Dual Rear Camera"
 description2="Get crisp photos even when it's dark . The dual camera has a wide-angle camera that comes with the great low-light capabilities."
 


 spec3="S Pen"
 description3="Use the S Pen to express yourself in ways that make a difference. Draw your own emojis to show how you feel or write a message on a photo and send it as a handwritten note. "
 
 
 spec4="Performance"
 description4="Playing visually rich games or switching between apps is a breeze. The 10nm mobile processor works with the 6GB RAM to make it happen fast and seamlessly."
 

 spec5="Wireless charging"
 description5="When it's time to charge your phone, you don't have to worry about cords. Simply put it down because the Galaxy Note8 charges wirelessly."





  constructor() { }

  ngOnInit() {
  }

}
