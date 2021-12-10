import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PlanMyTripPopUpComponent} from "../plan-my-trip-pop-up/plan-my-trip-pop-up.component";

@Component({
  selector: 'app-btn-plan-my-trip',
  templateUrl: './btn-plan-my-trip.component.html',
  styleUrls: ['./btn-plan-my-trip.component.scss']
})
export class BtnPlanMyTripComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onCreate() {
    this.dialog.open(PlanMyTripPopUpComponent)
  }
}
