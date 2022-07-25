import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class userService {
  apiUrl = 'https://sheet.best/api/sheets/03c5b96d-e399-4038-95b7-46fc16e37c1c';
  constructor(private httpClient: HttpClient) { }

  //C.R.U.D = CREATE, READ, UPDATE, DELETE

  //Retorna a lista de usuários (READ)
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl)
  }
}
