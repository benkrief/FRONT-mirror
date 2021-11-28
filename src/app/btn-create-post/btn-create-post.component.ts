import { Component, OnInit } from '@angular/core';
import {ModalPostCreationComponent} from "../modal-post-creation/modal-post-creation.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-btn-create-post',
  templateUrl: './btn-create-post.component.html',
  styleUrls: ['./btn-create-post.component.scss']
})
export class BtnCreatePostComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onCreate() {
    this.dialog.open(ModalPostCreationComponent)
  }
}
