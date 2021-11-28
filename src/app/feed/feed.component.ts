import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {
  descriptions: string[] = [];
  titres:string[] = [];
  posts= [
    {title: 'Alabama', desc: 'Montgomery'},
    {title: 'Alaska', desc: 'Juneau'},
    {title: 'Arizona', desc: 'Phoenix'},
    {title: 'Arkansas', desc: 'Little Rock'},
    {title: 'California', desc: 'Sacramento'},
    {title: 'Colorado', desc: 'Denver'},
    {title: 'Connecticut', desc: 'Hartford'},
    {title: 'Delaware', desc: 'Dover'},
    {title: 'Florida', desc: 'Tallahassee'},
    {title: 'Georgia', desc: 'Atlanta'},
    {title: 'Hawaii', desc: 'Honolulu'},
    {title: 'Idaho', desc: 'Boise'},
    {title: 'Illinois', desc: 'Springfield'},
    {title: 'Indiana', desc: 'Indianapolis'},
    {title: 'Iowa', desc: 'Des Moines'},
    {title: 'Kansas', desc: 'Topeka'},
    {title: 'Kentucky', desc: 'Frankfort'},
    {title: 'Louisiana', desc: 'Baton Rouge'},
    {title: 'Maine', desc: 'Augusta'},
    {title: 'Maryland', desc: 'Annapolis'},
    {title: 'Massachusetts', desc: 'Boston'},
    {title: 'Michigan', desc: 'Lansing'},
    {title: 'Minnesota', desc: 'St. Paul'},
    {title: 'Mississippi', desc: 'Jackson'},
    {title: 'Missouri', desc: 'Jefferson City'},
    {title: 'Montana', desc: 'Helena'},
    {title: 'Nebraska', desc: 'Lincoln'},
    {title: 'Nevada', desc: 'Carson City'},
    {title: 'New Hampshire', desc: 'Concord'},
    {title: 'New Jersey', desc: 'Trenton'},
    {title: 'New Mexico', desc: 'Santa Fe'},
    {title: 'New York', desc: 'Albany'},
    {title: 'North Carolina', desc: 'Raleigh'},
    {title: 'North Dakota', desc: 'Bismarck'},
    {title: 'Ohio', desc: 'Columbus'},
    {title: 'Oklahoma', desc: 'Oklahoma City'},
    {title: 'Oregon', desc: 'Salem'},
    {title: 'Pennsylvania', desc: 'Harrisburg'},
    {title: 'Rhode Island', desc: 'Providence'},
    {title: 'South Carolina', desc: 'Columbia'},
    {title: 'South Dakota', desc: 'Pierre'},
    {title: 'Tennessee', desc: 'Nashville'},
    {title: 'Texas', desc: 'Austin'},
    {title: 'Utah', desc: 'Salt Lake City'},
    {title: 'Vermont', desc: 'Montpelier'},
    {title: 'Virginia', desc: 'Richmond'},
    {title: 'Washington', desc: 'Olympia'},
    {title: 'West Virginia', desc: 'Charleston'},
    {title: 'Wisconsin', desc: 'Madison'},
    {title: 'Wyoming', desc: 'Cheyenne'},
  ];
  constructor()
  {
    for (let i=0; i<1000; i++)
    {
      this.descriptions.push("Description" +i);
      this.titres.push("Titre"+i);

    }
  }

  ngOnInit(): void {}

}
