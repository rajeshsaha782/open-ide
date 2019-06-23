import { Injectable, ɵɵresolveBody } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  API_URL = "https://api.judge0.com";
  SubmissionsTokenRoute = "/submissions?base64_encoded=false";
  resultRoute = "/submissions/<token>?base64_encoded=false";

  public getSubmissionsToken(code) {
    console.log(code);
    let body = {"language_id":"34","source_code":code,"stdin":""};
    const myheader = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(this.API_URL+this.SubmissionsTokenRoute,JSON.stringify(body),{headers: myheader});
  }

  public getResultBySubmissionsToken(token){
    let route = this.resultRoute.replace('<token>',token);
    return this.http.get(this.API_URL+route);
  }
}
