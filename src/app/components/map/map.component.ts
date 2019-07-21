import { Component, OnInit } from '@angular/core';
import { } from 'google-maps';
import { ViewChild } from '@angular/core'
import { StationsService } from '../../services/stations.service'
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  //create id and sub for dynamic path
  id: any;
  sub: any;
  // 
  detail: any
  @ViewChild('googleMap') gmapElement: any;
  map: google.maps.Map;
  stationLi = null;
  constructor(private stations: StationsService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']
    })

    // get json
    this.stationLi = this.stations.getStations()

    // filter stationLi to get clicked station and remove array at the end
    this.detail = this.stationLi.filter(e => {
      return (e.id == this.id)
    })

    this.detail = this.detail[0]
    //take care of refresh page error
    if (this.detail) {
      localStorage.setItem('station', JSON.stringify(this.detail))

    } else {
      this.detail = JSON.parse(localStorage.getItem('station'))
    }

    //for center
    var mapProp = {
      center: new google.maps.LatLng(this.detail.lat, this.detail.lng),
      zoom: 20,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    //change icon
    var icon = {
      url: "assets/img/bicycle_icon.png",
      labelOrigin: new google.maps.Point(40, 15)
    }

    //add and style label
    var label = {
      text: this.detail.bikes,
      color: "green",
      fontSize: "20px",
      fontWeight: "bold"

    }
    //center to station location
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    var marker = new google.maps.Marker({ position: mapProp.center })
    marker.setIcon(icon)
    marker.setLabel(label)

    marker.setMap(this.map);
  }

}
