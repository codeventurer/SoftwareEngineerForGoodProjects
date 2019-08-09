import { Injectable } from '@angular/core';
//import { IProducts } from ',/IProducts';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpHeaderResponse, HttpResponse } from '@angular/common/http';


@Injectable()
export class projectService {

constructor(private httpclient: HttpClient) {}

getOneProject(): Observable <any> {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*'});
    return this.httpclient.get('https://api.globalgiving.org/api/public/projectservice/projects/10?api_key=bd6936bb-c219-4951-89df-f499ab889c9d', {responseType: 'text', headers});
}

getAllProjects(): Observable <any> {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*'});
    return this.httpclient.get('https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=bd6936bb-c219-4951-89df-f499ab889c9d', {responseType: 'text', headers});
}

getPakistanFloods(): Observable <any> {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*'});
    return this.httpclient.get('https://api.globalgiving.org/api/public/services/search/projects?api_key=bd6936bb-c219-4951-89df-f499ab889c9d&q=pakistan+flood', {responseType: 'text', headers});
}
}

