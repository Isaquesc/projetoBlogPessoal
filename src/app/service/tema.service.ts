import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Tema } from '../model/Tema';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllTema(): Observable<Tema[]> {
    return this.http.get<Tema[]>('https://bpisk.herokuapp.com/tema', this.token)
  } 

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://bpisk.herokuapp.com/tema', tema, this.token)
  }

}
