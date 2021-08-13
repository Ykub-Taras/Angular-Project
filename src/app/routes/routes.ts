import {UsersComponent} from "../components/users/users.component";
import {PostsComponent} from "../components/posts/posts.component";
import {Routes} from "@angular/router";
import {UsersViaResolveComponent} from "../components/users-via-resolve/users-via-resolve.component";
import {DetailsComponent} from "../components/users-via-resolve/details/details.component";


export let routes: Routes = [
  {
    path: 'users', component: UsersComponent, children: [

    ]
  },
  {
    path: 'posts', component: PostsComponent,  children: [

    ]
  },
  {
    path:'users-via-resolve', component: UsersViaResolveComponent, children: [
      {path:":id", component: DetailsComponent}
    ]
  }
];
