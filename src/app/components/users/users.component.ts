import { Component, OnInit } from '@angular/core';
import {GetAPIService} from "../../services/getAPI.service";
import {IPersonInfo} from "../../models/IUser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: IPersonInfo[];
  constructor(private userService: GetAPIService) {
    this.userService.getUsers().subscribe(value => {
      this.users=value;
    })
  }

  ngOnInit(): void {
  }

}
