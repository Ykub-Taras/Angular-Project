import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPersonInfo} from "../../../models/IUser";
import {GetAPIService} from "../../../services/getAPI.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: IPersonInfo

  constructor(private activatedRoute: ActivatedRoute, private apiService: GetAPIService) {
    this.activatedRoute.params.subscribe(({id}) => this.apiService.getUserDetails(id).subscribe(value => this.user = value))
  }

  ngOnInit(): void {
  }

}
