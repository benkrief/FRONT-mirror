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
  appState$: Observable<State<Response>>;
  readonly StateEnum = StateEnum;
  private dataSubject = new BehaviorSubject<Response>(null);

  private isLoading = new BehaviorSubject<Boolean>(false);
  isLoading$ = this.isLoading.asObservable();

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
  }

  createPost(postForm: NgForm): void {
    console.log(postForm.value);
    this.appState$ = this.postService.create$(postForm.value as Post)
      .pipe(
        map(response => {
          console.log(response)
          this.dataSubject.next(
            {...response, data: {posts: [response.data.post, ...this.dataSubject.value.data.posts]}}
          );
          postForm.resetForm({});
          return {state: this.StateEnum.LOADED_STATE, appData: this.dataSubject.value}
        }),
        startWith({state: this.StateEnum.LOADED_STATE, appData: this.dataSubject.value}),
        catchError((error: string) => {
          return of({state: this.StateEnum.ERROR_STATE, error})
        })
      )
  }
}
