import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  power: number = 1; // initial value set for power multiplier
  
  constructor() { }


  ngOnInit() {
   this.power; 
  }


}
