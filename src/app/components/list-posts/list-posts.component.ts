import {Component, Input, OnInit} from '@angular/core';
import { PostsService } from "../../services/posts.service";
import {IPost} from "../../models/post";
import {UserService} from "../../services/user.service";
import { Router } from '@angular/router';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { ILoginResponse } from 'src/app/models/login-response';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { AddPostComponent } from '../add-post/add-post.component';
import {selectAllPosts} from "../../store/selectors/posts.selectors";
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../store/reducers";
import {getPosts} from "../../store/actions/posts.actions";



@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  @Input() allUsers: ILoginResponse[] = [];

  @Input()
 public posts: IPost[] = [];
 public pageSlice = this.posts.slice(0,3);
a
  posts$ = this.store.pipe(select(selectAllPosts));

  constructor(
    public userService: UserService,
    private router: Router,
    public postService: PostsService,
    public dialog: MatDialog,
    private store: Store<IAppState>) {    }
  ngOnInit(): void {
    this.router.navigateByUrl("/home");
  }


  openAddPost(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width ="50%"
    this.dialog.open(AddPostComponent, dialogConfig);
  }

  //Paginator
  onPageChange(event: PageEvent){
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.posts.length){
      endIndex = this.posts.length
    }
    this.pageSlice = this.posts.slice(startIndex, endIndex)
  }

  openModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width ="60%"
    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

  }

  getData() {
    this.store.dispatch(getPosts());
  }

}
export interface Posts {
  id: number;
  title: string;
  content: string;
  dateCreated: Date;
  author: string;
}
