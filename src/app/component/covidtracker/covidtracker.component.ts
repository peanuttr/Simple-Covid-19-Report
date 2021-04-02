import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from 'src/app/service/covid-service.service';
import { Observable } from 'rxjs';

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

@Component({
  selector: 'app-covidtracker',
  templateUrl: './covidtracker.component.html',
  styleUrls: ['./covidtracker.component.css']
})
export class CovidtrackerComponent implements OnInit {
  res: Iresult = {};
  constructor(private covid19Service: CovidServiceService) { }

  ngOnInit(): void {
    this.covid19Service.getData().subscribe(response => {
      console.log(response);
      this.res = response[0];
    });
  }

  onKey(event: any) {
    let query = event.target.value || '';
    console.log(query);
    this.covid19Service.SearchbyCode(query).subscribe(response => {
      console.log(response);
      this.res = response[0];
    });
  }

}
