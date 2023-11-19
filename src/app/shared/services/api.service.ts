import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(protected readonly httpClient: HttpClient) {}

  protected handleError = (): Observable<never> => {
    return throwError(
      'Erro na requisição. Por favor, tente novamente mais tarde.',
    );
  };

  protected get = (endpoint: string): Observable<any> => {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.httpClient.get(url).pipe(catchError(this.handleError));
  };
}
