import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPost} from "../../../models/IPost";
import {GetAPIService} from "../../../services/getAPI.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: IPost;

  constructor(private activatedRoute: ActivatedRoute, private apiService: GetAPIService) {
    console.log(activatedRoute);
    this.activatedRoute.params.subscribe(({id}) => this.apiService.getPostDetails(id).subscribe(value => this.post = value))
  }


  ngOnInit(): void {
  }

}
