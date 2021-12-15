import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-post-creation',
  templateUrl: './modal-post-creation.component.html',
  styleUrls: ['./modal-post-creation.component.scss']
})
export class ModalPostCreationComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalPostCreationComponent>, private _formBuilder: FormBuilder,)
  {}
  // service ne doit pas etre public todo: voir pourquoi ça marche pas en private n
  public pic: any = ''

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      $key: new FormControl(null),
      pic :new FormControl (""),
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      pic :new FormControl (''),
      legende: new FormControl(''),
      adresse: new FormControl('')
    });

  }
  initializeFormGroup() {
    this.firstFormGroup.setValue({
      $key: null,
      pic:'photo',
    });
    this.secondFormGroup.setValue({
      legende: '',
      adresse: '',
      pic:this.pic
    });

  }

  onFileSelected(event):void {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.pic = reader.result;
      };
    }
    this.secondFormGroup.setValue({
      secondCtrl:"",
      legende: '',
      adresse: '',
      pic:this.pic
    });
  }
  postClickCancel() {
    this.dialogRef.close();
  }

  onFormSumbit(){
    this.secondFormGroup.setValue(
      {
        secondCtrl:"",
        pic:this.pic,
        legende:this.secondFormGroup.value["legende"],
        adresse:this.secondFormGroup.value["adresse"]
      }
    )
  }
}
