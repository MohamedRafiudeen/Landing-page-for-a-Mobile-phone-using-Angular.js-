import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {


  acc1="Wireless Bluetooth Headset";
  description1="Replete with sophisticated design and fashionable, striking colours, you will always look the part with the Samsung LEVEL U Wireless.Built with soft, flexible urethane joints offers you exceptional wearing comfort.";


  acc2="wireless charger convertible"
  description2="Wireless charging pads might seem superfluous — you really can't find a plug or port to charge up your phone? — but once you have one of these pads, it's difficult to understand how you lived without it."
  

  acc3="Note 8 Gear VR with controller"
  description3="That big, beautiful phone can put out some serious virtual reality power. So an ideal companion is the Gear VR with controller, a new model of Samsung's VR headset built to coincide with the launch of the Galaxy Note 8"




  constructor() { }

  ngOnInit() {
  }

}
