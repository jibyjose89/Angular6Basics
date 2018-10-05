import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name="Jiby";
  public isDisabled=false;
  public myId="testId";
  public successClass="text-success";
  public hasError=true;
  public isSpecial=true;
  public highlightColor="orange";
  public greeting ="";
  public userName: String="";
  // Structural Directives
  // ngIf, ng-template
  public displayName=true;
  public married=false;

  public color="violet";

  public colors=["red", "blue", "yellow", "orange"];
  public messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  public titleStyles={
    color:"blue",
    fontStyle:"italic"
  }
  constructor() { }

  ngOnInit() {
  }
  greeter(Event){
    console.log(Event);
    this.greeting="Welcome ";
  }

  logMessage(value){
    console.log(value);
  }

  

}
