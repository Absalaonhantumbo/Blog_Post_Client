import {Route} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {SignupComponent} from "./components/signup/signup.component";
import {SigninComponent} from "./components/signin/signin.component";
import {AddPostComponent} from "./components/add-post/add-post.component";
import {AuthGuardGuard} from "./guards/auth-guard.guard";
import { UpdatePostComponent } from "./components/update-post/update-post.component";
import { DeletePostComponent } from "./components/delete-post/delete-post.component";

export const routes : Route[] = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'add-post', component: AddPostComponent, canActivate: [AuthGuardGuard]},
  {path: 'update-post/:id', component: UpdatePostComponent, canActivate: [AuthGuardGuard]},
  {path: 'delete-post/:id', component: DeletePostComponent, canActivate: [AuthGuardGuard]}
]
