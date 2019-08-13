import { Injectable } from '@angular/core';
//import { IProducts } from ',/IProducts';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpHeaderResponse, HttpResponse } from '@angular/common/http';
import { Project, Organization, Country } from '../interfaces/project';


@Injectable()
export class projectService {

    initialProjId: any = 1;
    projectCountryCode: string = "";

constructor(private httpclient: HttpClient) {}

getOneProject(num: number): Observable <any> {
    this.initialProjId = num;
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*'});
    return this.httpclient.get(`https://api.globalgiving.org/api/public/projectservice/projects/${this.initialProjId}?api_key=bd6936bb-c219-4951-89df-f499ab889c9d`, {responseType: 'text', headers});
}

getFeaturedProjects(): Observable <any> {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*'});
    return this.httpclient.get("https://api/public/projectservice/featured/projects?api_key=bd6936bb-c219-4951-89df-f499ab889c9d", {responseType: 'text', headers});
}

getAllProjects(): Observable <any> {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*'});
    return this.httpclient.get('https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=bd6936bb-c219-4951-89df-f499ab889c9d', {responseType: 'text', headers});
}

getProjectsSummary(): Observable <any> {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*'});
    return this.httpclient.get('https://api/public/projectservice/all/projects/active/summary?api_key=bd6936bb-c219-4951-89df-f499ab889c9d', {responseType: 'text', headers});
}

getByCountry(code: string): Observable <any> {
    this.projectCountryCode = code;
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*'});
    return this.httpclient.get(`https://api.globalgiving.org/api/public/projectservice/countries/${this.projectCountryCode}/projects?api_key=bd6936bb-c219-4951-89df-f499ab889c9d`, {responseType: 'text', headers});
}

getByOrganization(): Observable <any> {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*'});
    return this.httpclient.get("https://api.globalgiving.org/api/public/orgservice/all/organizations?api_key=bd6936bb-c219-4951-89df-f499ab889c9d", {responseType: 'text', headers});
}
}
