import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as Material from "@angular/material";
import {MatDialogModule} from "@angular/material/dialog";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatGridList} from "@angular/material/grid-list";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    //PostCreationComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule

  ]
})
export class MaterialModule {
}
