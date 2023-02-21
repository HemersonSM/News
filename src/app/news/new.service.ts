import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class NewService {

  private APIURLTOP:string = 'https://newsapi.org/v2/top-headlines?country=br&apiKey=d39d87b9e7534e7c8fadc1b9ba58ac70';
  private APIURLTECHNOLOGY:string = 'https://newsapi.org/v2/top-headlines?country=br&apiKey=d39d87b9e7534e7c8fadc1b9ba58ac70&category=technology';
  private APIURLBUSINESS:string = 'https://newsapi.org/v2/top-headlines?country=br&apiKey=d39d87b9e7534e7c8fadc1b9ba58ac70&category=business';
  private APIURLENTERTAINMENT:string = 'https://newsapi.org/v2/top-headlines?country=br&apiKey=d39d87b9e7534e7c8fadc1b9ba58ac70&category=entertainment';
  private APIURLHEALTH:string = 'https://newsapi.org/v2/top-headlines?country=br&apiKey=d39d87b9e7534e7c8fadc1b9ba58ac70&category=health';
  private APIURLSCIENCE:string = 'https://newsapi.org/v2/top-headlines?country=br&apiKey=d39d87b9e7534e7c8fadc1b9ba58ac70&category=science';
  private APIURLSPORTS:string = 'https://newsapi.org/v2/top-headlines?country=br&apiKey=d39d87b9e7534e7c8fadc1b9ba58ac70&category=sports';
  private APIURLGENERAL:string = 'https://newsapi.org/v2/top-headlines?country=br&apiKey=d39d87b9e7534e7c8fadc1b9ba58ac70&category=general';

  constructor(private httpClient:HttpClient) { }

  public getTopNews():Observable<any>{
    return this.httpClient.get<any>(this.APIURLTOP).pipe(res=>res);
  }
  public getTechnologyNews():Observable<any>{
    return this.httpClient.get<any>(this.APIURLTECHNOLOGY).pipe(res=>res);
  }
  public getBusinessNews():Observable<any>{
    return this.httpClient.get<any>(this.APIURLBUSINESS).pipe(res=>res);
  }
  public getEntertainmentNews():Observable<any>{
    return this.httpClient.get<any>(this.APIURLENTERTAINMENT).pipe(res=>res);
  }
  public getHealthNews():Observable<any>{
    return this.httpClient.get<any>(this.APIURLHEALTH).pipe(res=>res);
  }
  public getScienceNews():Observable<any>{
    return this.httpClient.get<any>(this.APIURLSCIENCE).pipe(res=>res);
  }
  public getSportsNews():Observable<any>{
    return this.httpClient.get<any>(this.APIURLSPORTS).pipe(res=>res);
  }
  public getGeneralNews():Observable<any>{
    return this.httpClient.get<any>(this.APIURLGENERAL).pipe(res=>res);
  }
}
