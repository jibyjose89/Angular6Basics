import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component implements OnInit {
  public title="Part two code evolution";
  @Input() public parentData;
// component interaction: parent to child 
  // if the property name is different from the name passed from the parent
  // use it as alias name in Input paranthesis.
  @Input('userName') public name;
  // component interaction: child to parent
  // create an instance of EventEmitter to emit an event to parent.
  // Import Output and EventEmitter
  @Output() public childEvent= new EventEmitter();

  public person={
    "firstName": "jiby",
    "lastName": "jose",
    "fullName": "Jiby Jose"
  }
  public date=new Date();
  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit("Hey Codevolution");
  }

}
