import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';
import {IPost} from "../../../models/post";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  
  @Input()
  post: IPost | any
  constructor(public postService: PostsService, private router: Router, public userService: UserService) { }

  ngOnInit(): void {
  }

  routerlink(){
    return this.router.navigateByUrl('update-post/:id')
  }

  ondelete(){
    this.postService.delete(parseInt(this.post.id)).subscribe(()=>{
      this.router.navigateByUrl('/');
      
    });
  }

}
