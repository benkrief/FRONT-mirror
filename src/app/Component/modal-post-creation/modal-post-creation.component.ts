import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {Post} from "../../Model/Post";
import {catchError, map, startWith} from "rxjs/operators";
import {of} from "rxjs";

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

  createPost(postForm: NgForm): void {
    console.log(postForm.value);
    this.appState$ = this.postService.create$(postForm.value as Post).pipe(
      map(response => {
        console.log(response)
        this.dataSubject.next(
          {...response, data: {results: [response.data.result, ...this.dataSubject.value.data.results]}}
        );
        postForm.resetForm({});
        return {state: this.stateEnum.LOADED_STATE, appData: this.dataSubject.value}
      }),
      startWith({state: this.stateEnum.LOADED_STATE, appData: this.dataSubject.value}),
      catchError((error: string) => {
        return of({state: this.stateEnum.ERROR_STATE, error})
      })
    )
  }


  postClickCancel() {
    this.dialogRef.close();
  }
}
