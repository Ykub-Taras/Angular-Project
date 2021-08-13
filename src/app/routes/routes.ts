import {UsersComponent} from "../components/users/users.component";
import {PostsComponent} from "../components/posts/posts.component";
import {Routes} from "@angular/router";
import {UsersViaResolveComponent} from "../components/users-via-resolve/users-via-resolve.component";
import {DetailsComponent} from "../components/users-via-resolve/details/details.component";
import {ResolveService} from "../services/resolve.service";
import {DetailsService} from "../services/details.service";
import {CarsComponent} from "../components/cars/cars.component";


export let routes: Routes = [
  {
    path: 'users', component: UsersComponent
    // , children: [    ]
  },
  {
    path: 'posts', component: PostsComponent
    // ,  children: [    ]
  },
  {
    path:'users-via-resolve', component: UsersViaResolveComponent, pathMatch: 'full', resolve:{arrayUsers:ResolveService}
    // , children: [      {path:":id", component: DetailsComponent}    ]
  },
  {path:'users-via-resolve/:id', component:DetailsComponent, resolve:{detailsArray:DetailsService}},
  {path:'cars', component:CarsComponent}

];
