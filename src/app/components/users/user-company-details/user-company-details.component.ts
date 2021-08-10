import {Component, OnInit} from '@angular/core';
import {IPersonInfo} from "../../../models/IUser";
import {ActivatedRoute} from "@angular/router";
import {GetAPIService} from "../../../services/getAPI.service";

@Component({
  selector: 'app-user-company-details',
  templateUrl: './user-company-details.component.html',
  styleUrls: ['./user-company-details.component.scss']
})
export class UserCompanyDetailsComponent implements OnInit {

  user: IPersonInfo

  constructor(private activatedRoute: ActivatedRoute, private apiService: GetAPIService) {
    this.activatedRoute.params.subscribe(({id}) => this.apiService.getUserDetails(id).subscribe(value => this.user = value))
  }

  ngOnInit(): void {
  }

}
