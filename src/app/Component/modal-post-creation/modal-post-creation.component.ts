import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-post-creation',
  templateUrl: './modal-post-creation.component.html',
  styleUrls: ['./modal-post-creation.component.scss']
})
export class ModalPostCreationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalPostCreationComponent>) {
  }// service ne doit pas etre public todo: voir pourquoi ça marche pas en private n

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    titre: new FormControl(''),
    description: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      titre: '',
      description: ''
    });
  }

  postClickCancel() {
    this.dialogRef.close();
  }
}
