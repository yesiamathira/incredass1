import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appNameValid]'
})
export class NameValidDirective implements OnInit{

  constructor(private ele : ElementRef) {   }
  ngOnInit(){
    console.log(this.ele.nativeElement.value)
  }
  @HostListener('input',['$event']) onInputChange(event){
    const value=this.ele.nativeElement.value;
    console.log(value)
    this.ele.nativeElement.value=value.replace(/[^a-zA-Z\s]*/g,"");
    if(value != this.ele.nativeElement.value){
      event.stopPropagation();
    }
  }

}
