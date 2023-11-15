import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _Http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=ua&apiKey=73f054f9977c4f49a6a33a46bffd0a9e";

  techApiUrl ="https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=73f054f9977c4f49a6a33a46bffd0a9e";

  businnews = "https://newsapi.org/v2/top-headlines?country=ua&category=business&apiKey=73f054f9977c4f49a6a33a46bffd0a9e"

  topHeading():Observable<any>
  {
    return this._Http.get(this.newsApiUrl);

  }

  tecNews():Observable<any>
  {
    return this._Http.get(this.techApiUrl);
  }

  businssnews():Observable<any>
  {
    return this._Http.get(this.businnews);
  }
}
