import {Component, Input, OnInit} from '@angular/core';
import {IPersonInfo} from "../../models/IUser";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
@Input()
user:IPersonInfo;

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private dataService:DataService) { }

  ngOnInit(): void {
  }

  navigateToDetails() {
    this.router.navigate([this.user.id], {relativeTo:this.activatedRoute});
    this.dataService.dataItem.next(this.user)
  }
}
