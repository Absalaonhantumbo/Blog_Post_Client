import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";
import {PostsService} from "../../services/posts.service";
import {IPost} from "../../models/post";
import { UserService } from 'src/app/services/user.service';
import { ILoginResponse } from 'src/app/models/login-response';
import {IAppState} from "../../store/reducers";
import {select, Store} from '@ngrx/store';
import {getPosts} from "../../store/actions/posts.actions";
import {selectAllPosts} from "../../store/selectors/posts.selectors";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  @Input() allPosts: IPost[] = [];
  @Input() allUsers: ILoginResponse[] = [];

  constructor(private router: Router,
              private postService: PostsService,
              public userService: UserService,
              private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.store.dispatch(getPosts());
    this.store.pipe(select(selectAllPosts)).subscribe({
      next:(data)=>{
        this.allPosts = data
      },
      error:(err)=>{
        //todo:show
        alert(err);
      }
    });

    // this.postService.getAllPosts()
    //   .subscribe(data => {
    //     if (data) {
    //       this.allPosts = data
    //     }
    //   });

      // this.userService.getAllUsers()
      // .subscribe(data => {
      //   if (data) {
      //     this.allUsers = data
      //     console.log(data)
      //   }
      // });

  }



  ngOnDestroy() {
    console.log('Home destroyed');
  }

  gotoSignUp() {
    this.router.navigateByUrl("/signup");
  }

}
