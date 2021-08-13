import { Component, OnInit } from '@angular/core';
import {IPersonInfo} from "../../models/IUser";
import {GetApiDataService} from "../../services/get-api-data.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
users:IPersonInfo[];
user: IPersonInfo;

  constructor(private getApiDataService: GetApiDataService) {
    this.getApiDataService.getUsers().subscribe(value => {
      this.users = value;
    })
  }

  ngOnInit(): void {
    console.log(this.user)
  }


  save(tref: HTMLFormElement) {
    console.log(tref.userS.value)

  }
}
