import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import * as mapboxgl from "mapbox-gl";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 46.227638;
  lng = 2.213749;


  constructor() {
  }

  ngOnInit() {
    (mapboxgl as any).accessToken = environment.mapBoxKey;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 6,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  createMark(lng: number, lat: number) {
    const marker = new mapboxgl.Marker({
      draggable: false
    }).setLngLat([lng, lat]).addTo(this.map)
  }

  onLog(lat, long) {
    console.log(lat);
    console.log(long);
  }
}
