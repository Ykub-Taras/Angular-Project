import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {routes} from "./routes/routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UsersViaResolveComponent } from './components/users-via-resolve/users-via-resolve.component';
import { DetailsComponent } from './components/users-via-resolve/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UsersViaResolveComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
