import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {PostService} from "../../Services/Post/post.service";
import {BehaviorSubject} from "rxjs";
import {Response} from "../../Model/Response";
import {Post} from "../../Model/Post";
import {GeodecodingService} from "../../Services/Geodecoding/geodecoding.service";
import {Address} from "../../Model/Address";

@Component({
  selector: 'app-post-creation',
  templateUrl: './modal-post-creation.component.html',
  styleUrls: ['./modal-post-creation.component.scss']
})
export class ModalPostCreationComponent implements OnInit {
  private dataSubject = new BehaviorSubject<Response<Post>>(null);

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  public pic: any = ''
  nameFile: string;
  sizeFile: number;
  contentTypeFile: string;
  picFile: string;


  constructor(public dialogRef: MatDialogRef<ModalPostCreationComponent>, private postService: PostService, private _formBuilder: FormBuilder, private geodecodingService: GeodecodingService) {
  }// service ne doit pas etre public todo: voir pourquoi ça marche pas en private n

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      pic: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      pic: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.thirdFormGroup = this._formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      place: ['', Validators.required],
      additionalAddress: ['', Validators.required],
      zip: ['', Validators.required],
    })
  }


  onFileSelected(event): void {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      this.nameFile = file.name;
      this.contentTypeFile = file.type;
      this.sizeFile = file.size;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.pic = reader.result;
        this.picFile = this.pic.split(",", 2)[1];
      };
    }
  }

  postClickCancel() {
    this.dialogRef.close();
  }

  createPost(postForm: FormGroup, thirdPost: FormGroup): void {
    let addressObject: Address = {
      street: thirdPost.value.street,
      city: thirdPost.value.city,
      zip: thirdPost.value.zip,
      additionalAddress: thirdPost.value.additionalAddress,
      country: thirdPost.value.country,
      place: thirdPost.value.place,
    }

    //FIXME: Supprimer la double requête
    this.geodecodingService.create$(addressObject).subscribe(value => {
      //@ts-ignore
      let post: Post = {
          title: postForm.value.title,
          description: postForm.value.description,
          address: {
            street: addressObject.street,
            city: addressObject.city,
            zip: addressObject.zip,
            additionalAddress: addressObject.additionalAddress,
            country: addressObject.country,
            place: addressObject.place,
          },
          photo: {
            name: this.nameFile,
            size: this.sizeFile,
            contentType: this.contentTypeFile,
            data: this.picFile
          },
          geodecoding: {
            //@ts-ignore
            latitude: value.data.results.latitude,
            //@ts-ignore
            longitude: value.data.results.longitude,
          },

        }
      ;
      this.postService.create$(post).subscribe(post => {
        this.dataSubject.next(post);
        this.postClickCancel();
      })
    })
  }
}
