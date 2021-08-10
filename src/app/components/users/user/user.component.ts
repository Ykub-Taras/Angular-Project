import {Component, Input, OnInit} from '@angular/core';
import {IPersonInfo} from "../../../models/IUser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  user: IPersonInfo;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  navigateToUserCompany(): void {
    this.router.navigate(['company/' + this.user.id], {relativeTo: this.activatedRoute})

  }
}
