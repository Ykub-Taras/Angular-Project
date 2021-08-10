import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GetAPIService} from "../../../services/getAPI.service";
import {IPost} from "../../../models/IPost";

@Component({
  selector: 'app-single-user-posts',
  templateUrl: './single-user-posts.component.html',
  styleUrls: ['./single-user-posts.component.scss']
})
export class SingleUserPostsComponent implements OnInit {

  posts: IPost[]

  constructor(private activatedRoute: ActivatedRoute, private apiService: GetAPIService) {
    this.activatedRoute.params.subscribe(({id}) => this.apiService.getUsersPosts(id).subscribe(value => this.posts = value))
  }

  ngOnInit(): void {
  }

}
