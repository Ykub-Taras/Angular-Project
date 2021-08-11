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
import {UserDetailsComponent} from './components/users/user-details/user-details.component';
import {PostDetailsComponent} from './components/posts/post-details/post-details.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    UserDetailsComponent,
    PostDetailsComponent,
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
