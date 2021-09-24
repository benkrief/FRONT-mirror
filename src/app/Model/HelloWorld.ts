export class HelloWorldModel {
  content: string;

  constructor(private body: string) {
    this.content = body;
  }
}
