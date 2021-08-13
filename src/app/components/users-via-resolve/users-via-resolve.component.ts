import { Component, OnInit } from '@angular/core';
import {IPersonInfo} from "../../models/IUser";
import {GetApiDataService} from "../../services/get-api-data.service";

@Component({
  selector: 'app-users-via-resolve',
  templateUrl: './users-via-resolve.component.html',
  styleUrls: ['./users-via-resolve.component.scss']
})
export class UsersViaResolveComponent implements OnInit {

  users:IPersonInfo[];
  user: IPersonInfo;
  id: number;
  constructor(private getApiDataService: GetApiDataService) {
    this.getApiDataService.getUsers().subscribe(value => {
      this.users = value;
    })
  }

  ngOnInit(): void {
  }

  save(tref: HTMLFormElement) {
    this.id = tref.userS.value;
    this.getApiDataService.getUserDetails(this.id).subscribe(value => this.user=value)
  }

}
