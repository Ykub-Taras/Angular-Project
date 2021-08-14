import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../models/IPost";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
@Input()
post:IPost
  constructor(private activatedRoute:ActivatedRoute, private router:Router, private dataService:DataService) { }

  ngOnInit(): void {
  }

  postDetails() {
    this.router.navigate([this.post.id], {relativeTo:this.activatedRoute});
    this.dataService.dataItem.next(this.post)
  }
}
