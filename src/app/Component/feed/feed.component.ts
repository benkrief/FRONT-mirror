import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Post} from "../../Model/Post";
import {catchError, map, startWith} from "rxjs/operators";
import {BehaviorSubject, Observable, of} from "rxjs";
import {State} from "../../Model/State";
import {Response} from "../../Model/Response";
import {StateEnum} from "../../Enum/state.enum";
import {PostService} from "../../Services/Post/post.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {
  appState$: Observable<State<Response<Post>>>;
  readonly stateEnum = StateEnum;
  private dataSubject = new BehaviorSubject<Response<Post>>(null);

  constructor(private postService: PostService) {
  }

  ngOnInit():
    void {
    this.appState$ = this.postService.get$
      .pipe(
        map(response => {
          this.dataSubject.next(response)
          return {state: this.stateEnum.LOADED_STATE, appData: {...response, data: {results: response.data.results.reverse()}}}
        }),
        startWith({state: this.stateEnum.LOADING_STATE}),
        catchError((error: string) => {
          return of({state: this.stateEnum.ERROR_STATE, error})
        })
      );
  }
}
