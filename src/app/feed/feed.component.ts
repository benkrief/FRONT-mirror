import { Component, OnInit } from '@angular/core';
import {PostCreationComponent} from "../post-creation/post-creation.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onCreate() {
    this.dialog.open(PostCreationComponent)
  }



}
