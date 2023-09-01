import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  valFromParen!:string;
  isDestroy:boolean=true;
  submitValueFromParent(val:any){
    this.valFromParen=val.value;
    //console.log(this.valFromParen);
  }
  destroy(){
    this.isDestroy=false;
  }
}
