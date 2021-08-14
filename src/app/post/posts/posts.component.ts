import {Component, OnInit} from '@angular/core';
import {IPost} from "../../models/IPost";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
posts: IPost[]
  constructor(
    /*private postService:PostService*/
    private activatedRoute:ActivatedRoute) {
    // this.postService.getPosts().subscribe(value => this.posts=value)
    this.activatedRoute.data.subscribe(({postData})=> this.posts=postData)
  }

  ngOnInit(): void {
  }

}
