import {Component, Input, OnInit} from '@angular/core';
import {IPersonInfo} from "../../../models/IUser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  user: IPersonInfo;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  navigateToUserDetails(): void {
    this.router.navigate(['users', this.user.id], {state:this.user})

  }
}
