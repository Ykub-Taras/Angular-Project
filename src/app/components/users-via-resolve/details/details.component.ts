import {Component, OnInit} from '@angular/core';
import {IPersonInfo} from "../../../models/IUser";
import {ActivatedRoute} from "@angular/router";
import {GetApiDataService} from "../../../services/get-api-data.service";
import {IPost} from "../../../models/IPost";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user: IPersonInfo
posts: IPost[];

  constructor(private activatedRoute:ActivatedRoute, private getApiDataService:GetApiDataService) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params.id);
    this.getApiDataService.getAllPostsOfUser(this.activatedRoute.snapshot.params.id).subscribe(value => this.posts=value);
    this.getApiDataService.getUserDetails(this.activatedRoute.snapshot.params.id).subscribe(value => this.user=value)
  }

  back() {
    history.back()
  }
}
