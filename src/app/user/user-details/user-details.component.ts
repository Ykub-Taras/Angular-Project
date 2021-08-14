import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {IPersonInfo} from "../../models/IUser";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
user:IPersonInfo
  constructor(private dataService:DataService) {

  }

  ngOnInit(): void {
    this.dataService.dataItem.subscribe(value => this.user=value)
  }

}
