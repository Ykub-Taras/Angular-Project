import {Component, OnInit} from '@angular/core';
import {IPersonInfo} from "../../models/IUser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: IPersonInfo[];

  constructor(
    /*private userService:UserService,*/
    private activatedRoute: ActivatedRoute) {
    // this.userService.getUsers().subscribe(value => this.users=value)
    this.activatedRoute.data.subscribe(({userData}) => this.users = userData)
  }

  ngOnInit(): void {
  }

}

