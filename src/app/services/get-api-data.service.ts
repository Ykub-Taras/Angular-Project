import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IPersonInfo} from "../models/IUser";
import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class GetApiDataService {
  private url = 'https://jsonplaceholder.typicode.com/'

  constructor(private httpClient: HttpClient) {
  }


  getUsers(): Observable<IPersonInfo[]> {
    return this.httpClient.get<IPersonInfo[]>(this.url + 'users')
  }

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url + 'posts')
  }

  getPostDetails(id: number): Observable<IPost> {
    return this.httpClient.get<IPost>(this.url + 'posts/' + id)
  }

  getUserDetails(id: number): Observable<IPersonInfo> {
    return this.httpClient.get<IPersonInfo>(this.url + 'users/' + id)
  }
  getAllPostsOfUser(id:number): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this.url+'users/'+id+'/posts')
  }
}


