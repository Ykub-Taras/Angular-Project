import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPersonInfo} from "../models/IUser";
import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class GetAPIService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers():Observable<IPersonInfo[]> {
    return this.httpClient.get<IPersonInfo[]>(`https://jsonplaceholder.typicode.com/users`)
  }
  getPosts():Observable<IPost[]>{
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
  }
}

