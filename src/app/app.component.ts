import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { projectService } from './services/projectservice';
import { Subscriber } from 'rxjs';
import { Project } from './interfaces/project';
import { Projects, Organization, Country } from './interfaces/allprojects';
import { Observable, observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })

export class AppComponent implements OnInit {
  
  title = 'Software Engineer For Good Code Example Test';
  project: Project;
  projects: Projects [];
  featuredprojects: Projects [];
  summaries: any;
  organizations: Projects [];
  projectsbycountry: Projects [];
  countrycode : string;
  countryname: string;
  oneprojectid: any;
  projid: number;
  sixtyprojects : any;
  nextprojid = 0; ;
  

 
  constructor (private _projectservice: projectService) {}


RetrieveOneProject () {
 this._projectservice.getOneProject(this.projid)
 .subscribe
 (
    (data) => { 
      this.project = JSON.parse(data);
      this.oneprojectid = data.project;
      console.log(this._projectservice.initialProjId);
  })
}

RetrieveFeaturedProjects () {
  this._projectservice.getFeaturedProjects()
  .subscribe
  (
     (data) => { 
       this.featuredprojects = JSON.parse(data);
       console.log(this.featuredprojects);
   })
 }

RetrieveProjectsByCountryCode () {
this._projectservice.getByCountry(this.countrycode)
 .subscribe
 (
    (data) => { 
      this.projectsbycountry = JSON.parse(data);
      console.log("From projects by country code:  " + this.projectsbycountry);
    })
}

RetrieveOrganizations () {
  this._projectservice.getByOrganization()
   .subscribe
   (
      (data) => { 
        this.projects = JSON.parse(data);
        this.organizations = data;
        console.log(this.organizations);

      })
  }

List: any;

public AllProjects () {
  this._projectservice.getAllProjects()
   .subscribe
   (
      (data) => { 
        this.List = JSON.parse(data);
        console.log("From all projects:" + this.List);
      })
  }

  ngOnInit() {

 
}}