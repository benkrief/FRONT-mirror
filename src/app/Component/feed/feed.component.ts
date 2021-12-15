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
      pic: "",
      legende: "test legende",
      adresse: "10 rue 1",

    },
    {
      uuid: "",
      pic: "",
      legende: "test lengende 2",
      adresse: "10 rue 2",
    }
  ]

  constructor() {
  }

  ngOnInit():
    void {
  }
}
