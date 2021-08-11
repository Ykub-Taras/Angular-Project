import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../../models/IPost";
import {GetAPIService} from "../../../services/getAPI.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: IPost;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private apiService: GetAPIService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.post = this.router.getCurrentNavigation()?.extras.state as IPost;
      if (this.post === undefined) {this.apiService.getPostDetails(id).subscribe(value => this.post = value
      )}})}


  ngOnInit(): void {
  }

}
