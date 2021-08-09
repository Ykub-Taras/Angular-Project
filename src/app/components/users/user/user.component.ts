import {Component, Input, OnInit} from '@angular/core';
import {IPersonInfo} from "../../../models/IUser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  user: IPersonInfo;

  constructor() {
  }

  ngOnInit(): void {
  }

}
