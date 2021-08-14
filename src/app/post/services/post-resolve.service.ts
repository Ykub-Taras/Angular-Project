import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {PostService} from "./post.service";

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<any>{

  constructor(private postService:PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.postService.getPosts();
  }
}
