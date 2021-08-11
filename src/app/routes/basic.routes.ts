import {UsersComponent} from "../components/users/users.component";
import {PostsComponent} from "../components/posts/posts.component";
import {Routes} from "@angular/router";
import {UserDetailsComponent} from "../components/users/user-details/user-details.component";
import {PostDetailsComponent} from "../components/posts/post-details/post-details.component";
import {GuardsServiceService} from "../services/guards-service.service";

export let routes: Routes = [
    {
    path: 'users', component: UsersComponent, canDeactivate:[GuardsServiceService], children: [
      {path: ':id', component: UserDetailsComponent},
    ]
  },
  {
    path: 'posts', component: PostsComponent, canDeactivate:[GuardsServiceService], children: [
      {path: ':id', component: PostDetailsComponent}
    ]
  },

];
