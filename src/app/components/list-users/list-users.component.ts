import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ILoginResponse } from 'src/app/models/login-response';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  @Input()
  users : ILoginResponse | any;

  constructor(public postService: PostsService, private router: Router, public userService: UserService) { }

  ngOnInit(): void {
    console.log(this.users);
  }

}
