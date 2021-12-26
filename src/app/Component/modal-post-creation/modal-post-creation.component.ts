import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {PostService} from "../../Services/Post/post.service";
import {BehaviorSubject} from "rxjs";
import {Response} from "../../Model/Response";
import {Post} from "../../Model/Post";


@Component({
  selector: 'app-post-creation',
  templateUrl: './modal-post-creation.component.html',
  styleUrls: ['./modal-post-creation.component.scss']
})
export class ModalPostCreationComponent implements OnInit {
  private dataSubject = new BehaviorSubject<Response<Post>>(null);
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public pic: any = ''

  constructor(public dialogRef: MatDialogRef<ModalPostCreationComponent>, private postService: PostService, private _formBuilder: FormBuilder) {
  }// service ne doit pas etre public todo: voir pourquoi ça marche pas en private n

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      $key : '',
      title : '',
      firstCtrl: ['', Validators.required],
      pic: new FormControl(""),
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      pic: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl('')
    });
  }

  initializeFormGroup() {
    this.firstFormGroup.setValue({
      pic: 'photo',
    });

    this.secondFormGroup.setValue({
      title: '',
      description: '',
      pic: this.pic
    });
  }

  onFileSelected(event): void {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.pic = reader.result;
      };
    }
    this.secondFormGroup.setValue({
      secondCtrl: "",
      title: '',
      description: '',
      pic: this.pic
    });
  }

  postClickCancel() {
    this.dialogRef.close();
  }

  createPost(postForm: FormGroup): void {
    this.postService.create$(postForm.value as Post).subscribe(post => {
      this.dataSubject.next(post);
      this.postClickCancel();
    });
  }
}
