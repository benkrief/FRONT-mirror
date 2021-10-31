import {Component, OnInit} from '@angular/core';
import {HelloWorldService} from "../../Services/hello-world-service/hello-world.service";

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  helloWorld = "";

  constructor(private helloWorldService: HelloWorldService) {
  }

  ngOnInit(): void {
    this.getHellowWorld();
  }

  private getHellowWorld() {
    this.helloWorldService.getHelloWorld().subscribe(value => {
        this.helloWorld=value.content;
    }, (error) =>{
      this.helloWorld = "Aucune connexion avec spring !"
    });
    }
  }

