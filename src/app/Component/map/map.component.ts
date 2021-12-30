import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";

import * as mapboxgl from "mapbox-gl";
import {ItineraryService} from "../../Services/Itinerary/itinerary.service";

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
  coords: any;
  data: any;

  constructor(private itineraryService: ItineraryService) {
  }

  ngOnInit() {
    let result = "";
    for (let i = 0; i < Object.keys(history.state).length - 1; i++) {
      result += `${history.state[i].geodecoding.longitude},${history.state[i].geodecoding.latitude};`;
    }

    this.itineraryService.get$(result.slice(0, -1)).subscribe(value => {
      this.data = value.routes[0];
      this.coords = this.data.geometry

    });

    (mapboxgl as any).accessToken = environment.mapBoxKey;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 6,
      center: [this.lng, this.lat]
    })

    this.map.on('load', () => {
      this.map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: this.coords
          }
        },
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "#3b9ddd",
          "line-width": 8,
          "line-opacity": 0.8
        }
      });

      const instructions = document.getElementById('instructions');
      let steps: any[] = [];

      for (let i = 0; i < Object.keys(this.data.legs).length; i++) {
        steps.push(...this.data.legs[i].steps);
      }

      let tripInstructions = '';
      for (const step of steps) {
        tripInstructions += `<li>${step.maneuver.instruction}</li>`;
      }
      instructions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
        this.data.duration / 60
      )} min 🚗 </strong></p><ol>${tripInstructions}</ol>`;
    });
  };
}
