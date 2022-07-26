import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/03c5b96d-e399-4038-95b7-46fc16e37c1c';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  //C.R.U.D = CREATE, READ, UPDATE, DELETE

  //Retorna a lista de usuários (READ)
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl)
  }

  //Salva o usuário no banco (CREATE)
  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl,user,this.httpOptions)
  }
}
