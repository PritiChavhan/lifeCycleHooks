import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
 @Input() myValue:string="myValue";
 counter!:any;
 num:number=1;
 constructor(){
  console.log("constructor called");
 }
 ngOnChanges(changes:SimpleChanges){
  //console.log("ngOnChanges called");
  //console.log(changes);
  console.log("ngOnChanges called -> current Value:"+changes['myValue'].currentValue);
 }
 ngOnInit(){
  console.log("ngOnInit called");
  this.counter=setInterval(()=>{
    this.num = this.num+1;
    console.log(this.num);
  },1000);
 }
 ngDoCheck(){
  console.log("ngDoCheck called");
 }
 ngAfterContentInit(){
  console.log("ngAfterContentInit called");
 }
 ngAfterContentChecked(){
  console.log("ngAfterContentChecked called");
 }
 ngAfterViewInit(){
  console.log("ngAfterViewInit called");
 }
 ngAfterViewChecked(){
  console.log("ngAfterViewChecked called");
 }
 ngOnDestroy(){
  console.log("ngOnDestroy called");
  clearInterval(this.counter);
 }
}
