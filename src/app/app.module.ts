import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/users/user/user.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/posts/post/post.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {routes} from "./routes/basic.routes";
import {UserDetailsComponent} from './components/users/user-address-details/user-details.component';
import {UserCompanyDetailsComponent} from './components/users/user-company-details/user-company-details.component';
import {PostDetailsComponent} from './components/posts/post-details/post-details.component';
import {UsersWithPostsComponent} from './components/users-with-posts/users-with-posts.component';
import {SingleUserComponent} from './components/users-with-posts/single-user/single-user.component';
import {SingleUserPostsComponent} from './components/users-with-posts/single-user-posts/single-user-posts.component';
import {SinglePostComponent} from './components/users-with-posts/single-user-posts/single-post/single-post.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    UserDetailsComponent,
    UserCompanyDetailsComponent,
    PostDetailsComponent,
    UsersWithPostsComponent,
    SingleUserComponent,
    SingleUserPostsComponent,
    SinglePostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
