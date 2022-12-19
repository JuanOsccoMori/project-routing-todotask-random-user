import { IRandomContact } from './../models/randomUser';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Results } from '../models/randomUser';

@Injectable({
  providedIn: 'root'
})

export class RandomUserService {

  constructor(private http: HttpClient) { }


  handleError(error: HttpErrorResponse){
    if (error.status === 0) {
      console.error(`Ha ocurrido un error: ${error.error}`);
    } else {
      console.error(`Error en el backend: ${error.status}, el error es: ${error.error}`)
    }
    return throwError(() => new Error('Error en la peticion de datos!'))
  }

  getContactRandom(): Observable<Results>{
    return this.http.get<Results>('https://randomuser.me/api').pipe(
      retry(2), //N de reintentos de peticiones
      catchError(this.handleError) // Sacamos error si algo falla
    );
  }

  getContactsRandom(n: number, gender?:string): Observable<Results>{
    let params : HttpParams = new HttpParams().set("results", n);

    if (gender) {
      params.append("gender", gender)
    }

    return this.http.get<Results>('https://randomuser.me/api', { params: params }).pipe(
      retry(2), //N de reintentos de peticiones
      catchError(this.handleError) // Sacamos error si algo falla
    );
  }
}
