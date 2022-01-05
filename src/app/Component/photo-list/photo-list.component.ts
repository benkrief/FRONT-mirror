import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {State} from "../../Model/State";
import {Response} from "../../Model/Response";
import {StateEnum} from "../../Enum/state.enum";
import {PhotoService} from "../../Services/Photo/photo.service";
import {Photo} from "../../Model/Photo";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  appState$: Observable<State<Response<Photo>>>;
  imageSource;
  readonly stateEnum = StateEnum;
  private dataSubject = new BehaviorSubject<Response<Photo>>(null);

  constructor(private photoService: PhotoService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.photoService.get$
      .subscribe(
        (val) => {
          val.data.results.forEach(value => {
              this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:${value.contentType};base64, ${value.data}`);
              console.log(this.imageSource)
            }
          )
        },
        response => {
          console.log("POST in error", response);
        },
        () => {
          console.log("POST observable is now completed.");
        });
  }
}
