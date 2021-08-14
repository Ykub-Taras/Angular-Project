import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'users', loadChildren:() => {
      return import('src/app/user/user.module').then(value => value.UserModule)
    }
  },
  {
    path: 'posts', loadChildren:() => {
      return import('src/app/post/post.module').then(value => value.PostModule)
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
