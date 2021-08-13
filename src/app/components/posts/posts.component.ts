import {Component, OnInit} from '@angular/core';
import {GetApiDataService} from "../../services/get-api-data.service";
import {IPost} from "../../models/IPost";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts:IPost[];
  constructor(private getApiDataService:GetApiDataService) {
    this.getApiDataService.getPosts().subscribe(value => this.posts=value)
  }

  ngOnInit(): void {
  }

}
