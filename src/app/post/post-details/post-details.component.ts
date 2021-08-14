import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {IPost} from "../../models/IPost";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
post:IPost
  constructor(private dataService:DataService) {
  }
  ngOnInit(): void {
    this.dataService.dataItem.subscribe(value => this.post=value)
  }

}
