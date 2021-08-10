import {Component, OnInit} from '@angular/core';
import {IPersonInfo} from "../../models/IUser";
import {GetAPIService} from "../../services/getAPI.service";

@Component({
  selector: 'app-users-with-posts',
  templateUrl: './users-with-posts.component.html',
  styleUrls: ['./users-with-posts.component.scss']
})
export class UsersWithPostsComponent implements OnInit {

  users: IPersonInfo[];

  constructor(private userService: GetAPIService) {
    this.userService.getUsers().subscribe(value => {
      this.users = value;
    })
  }

  ngOnInit(): void {
  }

}
