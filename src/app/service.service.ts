import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadastro } from './cadastro';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/estudantes";

  getCadastro(): Observable <Cadastro[]> {

    return this.http.get<Cadastro[]>(this.url);
  }

  save(client: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.url, client);
  }
}
