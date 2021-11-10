import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postUn = 'Bateau';
  postDeux = 'Plage';
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onIntineraire(){
    console.log("itineraire");
  }

  onClick() {
    //this.itinerarypagebutton
  }

}
