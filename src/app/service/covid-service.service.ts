import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import axios from "axios";

export interface Iresult {
  code?: string,
  confirmed?: number,
  country?: string,
  critical?: number,
  deaths?: number,
  lastChange?: Date,
  lastUpdate?: Date,
  latitude?: number,
  longitude?: number,
  recovered?: number,
}

@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {

  res = null;
  url = 'https://covid-19-data.p.rapidapi.com/country';
  options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'c0969d3f12msha2808d0a9747ca8p123a0djsncc9bae776d83',
      'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
    }
  };

  constructor(private http: HttpClient) {

  }
  getData() {

    return this.http.get(this.url + "?name=thailand", this.options);
  }
  SearchbyCode(query: any) {
    return this.http.get(this.url + `?name=${query}`, this.options);
  }
}
