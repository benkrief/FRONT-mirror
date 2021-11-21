import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {State} from "../../Model/State";
import {Response} from "../../Model/Response";
import {PostService} from "../../Services/Post/post.service";
import {Post} from "../../Model/Post";
import {catchError, map, startWith} from "rxjs/operators";
import {NgForm} from "@angular/forms";
import {StateEnum} from 'src/app/enum/state.enum';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  appState$: Observable<State<Response<Post>>>;
  readonly stateEnum = StateEnum;
  private dataSubject = new BehaviorSubject<Response<Post>>(null);

  private isLoading = new BehaviorSubject<Boolean>(false);
  isLoading$ = this.isLoading.asObservable();

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.appState$ = this.postService.get$
      .pipe(
        map(response => {
          console.log("here")
          console.error(response)
          console.error(this.appState$)
          this.dataSubject.next(response)
          return {state: this.stateEnum.LOADED_STATE, appData: {...response, data: {posts: response.data}}}
        }),
        startWith({state: this.stateEnum.LOADING_STATE}),
        catchError((error: string) => {
          return of({state: this.stateEnum.ERROR_STATE, error})
        })
      );
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
}
