import {Component, OnInit} from '@angular/core';
import {GetApiDataService} from "../../services/get-api-data.service";
import {IPost} from "../../models/IPost";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts:IPost[];
  post:IPost;

  postForm: FormGroup = new FormGroup(
    {postD : new FormControl("1")}
  );

  constructor(private getApiDataService:GetApiDataService) {
    this.getApiDataService.getPosts().subscribe(value => this.posts=value)
  }

  ngOnInit(): void {
  }

  submitPost() {
    this.getApiDataService.getPostDetails(this.postForm.value.postD).subscribe(value => this.post=value)
  }
}
