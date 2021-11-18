import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {State} from "../../Model/State";
import {Response} from "../../Model/Response";
import {StateEnum} from "../../enum/state.enum";
import {PhotoService} from "../../Services/Photo/photo.service";
import {catchError, map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  appState$: Observable<State<Response>>;
  readonly stateEnum = StateEnum;
  private dataSubject = new BehaviorSubject<Response>(null);

  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.appState$ = this.photoService.get$
      .pipe(
        map(response => {
          this.dataSubject.next(response)
          return {state: this.stateEnum.LOADED_STATE, appData: {...response, data: {posts: response.data.posts}}}
        }),
        startWith({state: this.stateEnum.LOADING_STATE}),
        catchError((error: string) => {
          return of({state: this.stateEnum.ERROR_STATE, error})
        })
      );
  }

}
