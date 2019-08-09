import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpHeaderResponse } from '@angular/common/http';


@Injectable()
export class projectService {

constructor(private httpclient: HttpClient) {}

getprojects(): Observable <any> {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*'});  
//return this.httpclient.get('https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=bd6936bb-c219-4951-89df-f499ab889c9d', {responseType: 'text', headers});

// return this.httpclient.get('https:///api/public/projectservice/projects/1?api_key=bd6936bb-c219-4951-89df-f499ab889c9d', {responseType: 'text', headers});
// return this.httpclient.get('https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=bd6936bb-c219-4951-89df-f499ab889c9d', {responseType: 'text', headers});
//return this.httpclient.get('https://api.globalgiving.org/api/public/services/search/projects?api_key=bd6936bb-c219-4951-89df-f499ab889c9d&q=pakistan+flood', {responseType: 'text', headers});

return this.httpclient.get('https://api.globalgiving.org/api/public/projectservice/projects/10?api_key=bd6936bb-c219-4951-89df-f499ab889c9d', {responseType: 'text', headers});



///api/public/projectservice/projects/1883
//https://api.globalgiving.org/api/public/projectservice/featured/projects
//return this.httpclient.get('https://api.globalgiving.org/api/public/projectservice/campaign/1/projects?api_key=bd6936bb-c219-4951-89df-f499ab889c9d?api_key=bd6936bb-c219-4951-89df-f499ab889c9d', {responseType: 'text', headers});
}
}

//https://api.globalgiving.org/api/public/projectservice/projects/{projectid}/imagegallery