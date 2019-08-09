import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-projects',
  templateUrl: './display-projects.component.html',
  styleUrls: ['./display-projects.component.css']
})
export class DisplayProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    alert('Hi from the DisplayProjectsComponent');

  }

}
