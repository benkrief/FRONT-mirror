import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Coordinate} from "../../Model/Coordinate";
import {Observable, throwError} from "rxjs";
import {Response} from "../../Model/Response";
import {catchError, tap} from "rxjs/operators";
import {Address} from "../../Model/Address";

@Injectable({
  providedIn: 'root'
})
export class GeodecodingService {
  private readonly apiUrl = `${environment.APIEndpoint}/address`


  constructor(private http: HttpClient) {
  }

  create$ = (address: Address) => <Observable<Response<Coordinate>>>
    this.http.post<Response<Coordinate>>(`${this.apiUrl}/save`, address)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      )

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error)
    return throwError(`Une erreur est survenue - Code de l'erreur: ${error.status} `);
  };
}
