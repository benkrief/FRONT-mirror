import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable, throwError} from "rxjs";
import {Post} from "../../Model/Post";
import {catchError, tap} from "rxjs/operators";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {
  private readonly apiUrl = `${environment.mapboxRouteEndpoint}`

  coordinates: Post[] = [];

  constructor(private http: HttpClient) {
  }

  get$ = (coordinates: string) => <Observable<any>>this.http.get<Post>(`${this.apiUrl}/driving/${coordinates}?geometries=geojson&steps=true&&access_token=${environment.mapBoxKey}`).pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  addCoordinate(coordinate: Post) {
    this.coordinates.push(coordinate);
  }

  getCoordinates() {
    return this.coordinates;
  }

  clearCoordinates() {
    this.coordinates = [];
    return this.coordinates;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error)
    return throwError(`Une erreur est survenue - Code de l'erreur: ${error.status} `);
  };
}
