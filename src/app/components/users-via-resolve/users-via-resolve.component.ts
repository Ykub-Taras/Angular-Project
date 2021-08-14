import {Component, OnInit} from '@angular/core';
import {IPersonInfo} from "../../models/IUser";
import {GetApiDataService} from "../../services/get-api-data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users-via-resolve',
  templateUrl: './users-via-resolve.component.html',
  styleUrls: ['./users-via-resolve.component.scss']
})
export class UsersViaResolveComponent implements OnInit {

  users:IPersonInfo[];
  id: number;

  constructor(private getApiDataService: GetApiDataService, private router:Router, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.getApiDataService.getUsers().subscribe(value => {this.users = value})
    this.activatedRoute.data.subscribe(({arrayUsers}) => this.users = arrayUsers)

  }

  save(tref: HTMLFormElement) {
    this.id = tref.userS.value;
    this.router.navigate([this.id], {relativeTo: this.activatedRoute})
  }

}
