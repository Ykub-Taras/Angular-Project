import {Component, OnInit} from '@angular/core';
import {IPersonInfo} from "../../../models/IUser";
import {ActivatedRoute} from "@angular/router";
import {IPost} from "../../../models/IPost";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user: IPersonInfo
posts: IPost[];

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params.id);
    // this.activatedRoute.data.subscribe(value => console.log(value))
    // this.getApiDataService.getAllPostsOfUser(this.activatedRoute.snapshot.params.id).subscribe(value => this.posts=value);
    // this.getApiDataService.getUserDetails(this.activatedRoute.snapshot.params.id).subscribe(value => this.user=value)

    this.activatedRoute.data.subscribe(({detailsArray}) => this.user = detailsArray[0])
    this.activatedRoute.data.subscribe(({detailsArray}) => this.posts = detailsArray[1])
  }

  back() {
    history.back()
  }
}
