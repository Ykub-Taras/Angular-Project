import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {GetApiDataService} from "./get-api-data.service";
import {IPersonInfo} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<IPersonInfo[]>{


  constructor(private getApiDataService:GetApiDataService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return (this.getApiDataService.getUsers())
  }

}
