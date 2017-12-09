import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan2',
  templateUrl: './super-saiyan2.component.html',
  styleUrls: ['./super-saiyan2.component.css']
})
export class SuperSaiyan2Component implements OnInit, OnChanges {

  @Input() 
  power;

  constructor() { }

  ngOnChanges(){
    this.power = this.power * 150
  }

  ngOnInit() {
  }

}
