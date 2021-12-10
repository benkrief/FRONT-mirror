import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {Post} from "../../Model/Post";
import {BehaviorSubject} from "rxjs";
import {Response} from "../../Model/Response";
import {StateEnum} from "../../Enum/state.enum";
import {PostService} from "../../Services/Post/post.service";

@Component({
  selector: 'app-post-creation',
  templateUrl: './modal-post-creation.component.html',
  styleUrls: ['./modal-post-creation.component.scss']
})

export class ModalPostCreationComponent implements OnInit {
  private dataSubject = new BehaviorSubject<Response<Post>>(null);

  constructor(public dialogRef: MatDialogRef<ModalPostCreationComponent>, private postService: PostService) {
  }// service ne doit pas etre public todo: voir pourquoi ça marche pas en private n

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      title: '',
      description: ''
    });
  }

  createPost(postForm: FormGroup): void {
    this.postService.create$(postForm.value as Post).subscribe(post => {
      this.dataSubject.next(post);
    });
  }

  postClickCancel() {
    this.dialogRef.close();
  }
}
