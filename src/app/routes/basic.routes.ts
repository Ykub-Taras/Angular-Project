import {UsersComponent} from "../components/users/users.component";
import {PostsComponent} from "../components/posts/posts.component";
import {Routes} from "@angular/router";
import {UserDetailsComponent} from "../components/users/user-address-details/user-details.component";
import {UserCompanyDetailsComponent} from "../components/users/user-company-details/user-company-details.component";
import {PostDetailsComponent} from "../components/posts/post-details/post-details.component";
import {UsersWithPostsComponent} from "../components/users-with-posts/users-with-posts.component";
import {SingleUserPostsComponent} from "../components/users-with-posts/single-user-posts/single-user-posts.component";

export let routes: Routes = [
  {
    path: 'users-details', component: UsersComponent, children: [
      {path: ':id', component: UserDetailsComponent},
      {path: 'company/:id', component: UserCompanyDetailsComponent},
    ]
  },
  {
    path: 'posts', component: PostsComponent, children: [
      {path: ':id', component: PostDetailsComponent}
    ]
  },
  {
    path: 'users-with-posts', component: UsersWithPostsComponent, children: [
      {path: 'posts/:id', component: SingleUserPostsComponent}
    ]
  }
];
