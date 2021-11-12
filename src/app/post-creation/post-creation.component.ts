import { Component, OnInit } from '@angular/core';

import {PostCreationService} from "../Services/post-creation-service/post-creation.service";
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-post-creation',
  templateUrl:  './post-creation.component.html',
  styleUrls: ['./post-creation.component.scss']
})
export class PostCreationComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<PostCreationComponent>) {}// service ne doit pas etre public todo: voir pourquoi ça marche pas en private n

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl( null ),
    titre: new FormControl( '' ),
    description: new FormControl( '' )
  });

  initializeFormGroup(){
    this.form.setValue({
      $key: null,
      titre:'',
      description:''
    });
  }

  postClick() {

  }

  postClickCancel() {
    this.dialogRef.close();
  }


}
