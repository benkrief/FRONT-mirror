import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input() name: string;
  @Input() imgPath: string;

  constructor() { }

  ngOnInit(): void {
  }

}
