import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MyItineraryComponent} from "../my-itinerary/my-itinerary.component";


@Component({
  selector: 'app-plan-my-trip-pop-up',
  templateUrl: './plan-my-trip-pop-up.component.html',
  styleUrls: ['./plan-my-trip-pop-up.component.scss']
})
export class PlanMyTripPopUpComponent implements OnInit {
  openAddToTrip(): void {
    const dialogRef = this.dialog.open(MyItineraryComponent, {
      width: '250px'
    });
  };

  openSeeTrip(): void {
    const dialogRef = this.dialog.open(MyItineraryComponent, {
      width: '250px'
    });
  };

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }
}
