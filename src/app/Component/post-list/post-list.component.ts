import {Component, OnInit} from '@angular/core';
import {PostService} from "../../Services/Post/post.service";
import {BehaviorSubject, Observable, of} from "rxjs";
import {State} from "../../Model/State";
import {Response} from "../../Model/Response";
import {StateEnum} from "../../enum/state.enum";
import {catchError, map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  appState$: Observable<State<Response>>;
  readonly stateEnum = StateEnum;
  private dataSubject = new BehaviorSubject<Response>(null);

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {

  }
}
