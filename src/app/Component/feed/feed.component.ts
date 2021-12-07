import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Post} from "../../Model/Post";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {

  posts: Post[] = [
    {
      uuid: "",
      title: "test titre",
      description: "description 1",

    },
    {
      uuid: "",
      title: "test titre1",
      description: "description 2"
    }
  ]

  constructor() {
  }

  ngOnInit():
    void {
  }
}
