import {Component, OnInit} from '@angular/core';
import {IPost} from "../../models/IPost";
import {GetAPIService} from "../../services/getAPI.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: IPost[];

  constructor(private postService: GetAPIService) {
    this.postService.getPosts().subscribe(value => this.posts = value)
  }

  ngOnInit(): void {
  }

}
