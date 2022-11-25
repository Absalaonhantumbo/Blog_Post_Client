import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

interface Ipost extends Omit<IPost,"dateCreated">{}

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})

export class UpdatePostComponent implements OnInit {
  postt: Ipost| any


  constructor(private router: Router, public postService: PostsService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id') ||'';
    this.postService.readById(parseInt(id)).subscribe(data =>{
      console.log(data);
      this.postt =data
    });  
  }
  
  onUpdatePost(){
    this.postService.update(this.postt).subscribe(()=>{
      this.router.navigateByUrl('/home');
    });
  }
  
  backHome(): void{
    this.router.navigateByUrl('/home')
  }
}
