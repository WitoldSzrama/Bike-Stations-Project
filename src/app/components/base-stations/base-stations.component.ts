import { Component, OnInit } from '@angular/core';
import { StationsService } from '../../services/stations.service'

@Component({
  selector: 'app-base-stations',
  templateUrl: './base-stations.component.html',
  styleUrls: ['./base-stations.component.css']
})
export class BaseStationsComponent implements OnInit {
  stationLi = null;

  constructor(private stations: StationsService) { }
  // get list from StationsService
  ngOnInit() {
    this.stationLi = this.stations.getStations()
    navigator.geolocation.getCurrentPosition(function(position){
      console.log(position.coords);
    });

  };

}



