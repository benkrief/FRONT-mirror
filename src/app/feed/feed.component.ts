import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Post} from "../Model/Post";


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {

  posts: Post[] = [
    {
      titre: "test titre",
      description: "description 1",

    },
    {
      titre: "test titre1",
      description: "description 2"
    }
  ]

  //posts = Array.from({length: 1000}).map((_, i) => Item #${i)

  constructor() {

  }

  ngOnInit():
    void {
  }

}
