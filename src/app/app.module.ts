import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";
import { AddPostComponent } from './components/add-post/add-post.component';
import {AuthGuardGuard} from "./guards/auth-guard.guard";
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import {PostsService} from "./services/posts.service";
import { PostItemComponent } from './components/list-posts/post-item/post-item.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { DeletePostComponent } from './components/delete-post/delete-post.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ListUsersComponent } from './components/list-users/list-users.component'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ModalComponent } from './components/modal/modal.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {reducers} from "./store/reducers";
import {PostsEffects} from "./store/effects/posts.effects";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    AddPostComponent,
    ListPostsComponent,
    PostItemComponent,
    UpdatePostComponent,
    DeletePostComponent,
    FooterComponent,
    ListUsersComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([
      PostsEffects
    ]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    MatIconModule
  ],
  providers: [UserService, AuthGuardGuard, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
