import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {PostResolveService} from "./services/post-resolve.service";
import {PostDetailsComponent} from "./post-details/post-details.component";

const routes: Routes = [
  {path:'', component:PostsComponent, resolve: {postData: PostResolveService},
    children: [
      {path: ':id', component: PostDetailsComponent}
    ]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }



//const routes: Routes = [
//   {
//     path: '', component: UsersComponent,
//     resolve: {userData: UserResolveService},
//     children: [
//       {path: ':id', component: UserDetailsComponent}
//     ]
//   }
// ];
