import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UsersComponent} from './users/users.component';
import {UserService} from "./services/user.service";
import {UserComponent} from './user/user.component';
import {UserDetailsComponent} from './user-details/user-details.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers:[UserService]
})
export class UserModule { }
