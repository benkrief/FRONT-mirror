import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {State} from "../../Model/State";
import {Response} from "../../Model/Response";
import {StateEnum} from "../../enum/state.enum";
import {PhotoService} from "../../Services/Photo/photo.service";
import {catchError, map, startWith} from "rxjs/operators";
import {DomSanitizer} from '@angular/platform-browser';
import {Photo} from "../../Model/Photo";


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  appState$: Observable<State<Response<Photo>>>;
  unsafeImageUrl;
  imageUrl;
  readonly stateEnum = StateEnum;
  private dataSubject = new BehaviorSubject<Response<Photo>>(null);
  imgageUrl: any;

  constructor(private photoService: PhotoService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.appState$ = this.photoService.get$
      .pipe(
        map(response => {
          this.dataSubject.next(response)
          return {state: this.stateEnum.LOADED_STATE, appData: {...response, data: {photos: response.data.results}}}
        }),
        startWith({state: this.stateEnum.LOADING_STATE}),
        catchError((error: string) => {
          return of({state: this.stateEnum.ERROR_STATE, error})
        })
      );
  }

  transformImage() {
    this.photoService.get$.subscribe(data => {
      let unsafeImageUrl = URL.createObjectURL(data);
      let imageUrl = this.sanitizer.bypassSecurityTrustUrl(unsafeImageUrl);
    }, error => {
      console.log(error);
    });
  }

}
