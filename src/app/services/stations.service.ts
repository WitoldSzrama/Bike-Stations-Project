import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable()
export class StationsService {
  //stations will take care of get json just once for saving time
  stations;
  //json will take care of json data
  json;
  // Observable JSON
  locations$: Observable<any>;
  // Add Json URL
  stationsUrl: string = "http://www.poznan.pl/mim/plan/map_service.html?mtype=pub_transport&co=stacje_rowerowe"

  constructor(private http: HttpClient) { }

  getStations() {
    // make if statement which will check if json is in stations var 

    if (!this.stations) {
      //create var i for index
      let i = 0;
      this.stations = []
      this.locations$ = this.http.get(this.stationsUrl);
      this.json = this.locations$;
      this.json.subscribe(data => {
        this.json = data
        this.json = this.json.features
        this.json.forEach(e => {
          i++;
          // push all needed data to stattions
          this.stations.push(
            {
              bike_racks: e.properties.bike_racks,
              bikes: e.properties.bikes,
              free_racks: e.properties.free_racks,
              label: e.properties.label,
              lng: e.geometry.coordinates[0],
              lat: e.geometry.coordinates[1],
              id: i
            }
          )

        })
      });
    }
    return this.stations


  }



}

