import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable, throwError} from "rxjs";
import {Response} from "../../Model/Response";
import {catchError, tap} from "rxjs/operators";
import {Photo} from "../../Model/Photo";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private readonly apiUrl = `${environment.APIEndpoint}/file`

  constructor(private http: HttpClient) {
  }

  get$ = <Observable<Response<Photo>>>this.http.get<Response<Photo>>(`${this.apiUrl}/list`).pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error)
    return throwError(`Une erreur est survenue - Code de l'erreur: ${error.status} `);
  };
}
