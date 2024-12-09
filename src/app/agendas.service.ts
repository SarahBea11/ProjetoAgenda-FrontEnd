import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agendas } from './agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendasService {

  constructor(private http:HttpClient) { }

  getAgendas(): Observable<Agendas[]>{
    return this.http.get<Agendas []>('http://localhost:3000/Agenda')
  }
}
