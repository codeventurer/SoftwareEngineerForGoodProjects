import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { projectService } from './services/projectservice';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title = 'Software Engineer For Good Code Example';
  projects:any;
  project: any;
  floodsinpakistan: any;


  constructor (private _projectservice: projectService) {}


RetrieveOneProject () {
 this._projectservice.getOneProject()
 .subscribe
 (
    (data) => { 
     this.project = data
})
}

RetrievePakistanProjects () {
this._projectservice.getPakistanFloods()
 .subscribe
 (
    (data) => { 
     this.floodsinpakistan= data
})
}

public RetrieveAllProjects () {
  this._projectservice.getAllProjects()
   .subscribe
   (
      (data) => { 
       this.floodsinpakistan= data
  })
  }

  ngOnInit() {

    }
}
