import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../../../models/IPost";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  constructor() {
  }

  @Input() post: IPost;

  ngOnInit(): void {
  }

}
