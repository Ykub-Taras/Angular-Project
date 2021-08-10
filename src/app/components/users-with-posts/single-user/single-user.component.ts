import {Component, Input, OnInit} from '@angular/core';
import {IPersonInfo} from "../../../models/IUser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
  @Input()
  user: IPersonInfo;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  navigateToUserPosts(): void {
    this.router.navigate(['posts/' + this.user.id], {relativeTo: this.activatedRoute})
  }
}
