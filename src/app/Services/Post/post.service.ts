import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Response} from "../../Model/Response";
import {Observable, throwError} from "rxjs";
import {tap, catchError} from "rxjs/operators";
import {Post} from "../../Model/Post";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly apiUrl = `${environment.APIEndpoint}/post`

  constructor(private http: HttpClient) {
  }

  posts$ = <Observable<Response>>this.http.get<Response>(`${this.apiUrl}/list`).pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  create$ = (post: Post) => <Observable<Response>>
    this.http.post<Response>(`${this.apiUrl}/create`, post)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  delete$ = (postUUID: string) => <Observable<Response>>this.http.delete<Response>(`${this.apiUrl}/delete/${postUUID}`).pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error)
    return throwError(`Une erreur est survenue - Code de l'erreur: ${error.status} `);
  };

}
