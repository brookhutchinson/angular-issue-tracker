import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
  // properties
  title: string;

  constructor() {}

  ngOnInit() {
    // set properties
    this.title = 'Angular Issue Tracker';
  }
}