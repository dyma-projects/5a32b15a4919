import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  myName: string = "Lionel";

  status: boolean = true;

  toggleStatus() {
    this.status = !this.status;
    console.log(this.status)
  }

  texts: Array<string> = ['un','deux','trois'];

  constructor() { }

  ngOnInit() {
  }

}
