import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {HelloWorldModel} from "../../Model/HelloWorld";

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {
  private baseURL = "http://localhost:8080/hello";

  constructor(private httpClient: HttpClient) { }

  getHelloWorld() {
    return this.httpClient.get<HelloWorldModel>(`${this.baseURL}`);
  }
}
