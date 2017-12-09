import { Component,Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan3',
  templateUrl: './super-saiyan3.component.html',
  styleUrls: ['./super-saiyan3.component.css']
})
export class SuperSaiyan3Component implements OnInit, OnChanges {

  @Input() 
  power; 

  constructor() { }
  
  ngOnInit() {
  }
  ngOnChanges() {
    this.power = this.power * 250;
  }
}
