import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IPersonInfo} from "../../models/IUser";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/'

  constructor(private httpClient: HttpClient) {
  }

  getUserDetails(id: number): Observable<IPersonInfo> {
    return this.httpClient.get<IPersonInfo>(this.url + 'users/' + id)
  }

  getUsers(): Observable<IPersonInfo[]> {
    return this.httpClient.get<IPersonInfo[]>(this.url + 'users')
  }
}
