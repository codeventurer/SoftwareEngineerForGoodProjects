import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { projectService } from './services/projectservice';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//https://api.globalgiving.org/api/public/projectservice/campaign/1/projects?api_key=bd6936bb-c219-4951-89df-f499ab889c9d
//https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=bd6936bb-c219-4951-89df-f499ab889c9d


// https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=bd6936bb-c219-4951-89df-f499ab889c9d



export class AppComponent implements OnInit {
  
  title = 'SoftwareEngineerForGoodProjects';
  projects:any;
  country: any;
  event: any;
  floodsinpakistan: any;


  constructor (private _projectservice: projectService) {}
  
  ngOnInit() {

    this._projectservice.getprojects()
    .subscribe
    (
       (data) => { 
        this.floodsinpakistan = data
        /*for (let i in data) {
        console.log(data[i]); */
   // }
 })
}
}
