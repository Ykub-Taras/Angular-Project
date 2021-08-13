import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {GetApiDataService} from "./get-api-data.service";
import {forkJoin} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DetailsService implements Resolve<any>{
  constructor(private getApiDataService:GetApiDataService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    return  forkJoin([this.getApiDataService.getUserDetails(route.params.id),this.getApiDataService.getAllPostsOfUser(route.params.id)
    ])




}}
