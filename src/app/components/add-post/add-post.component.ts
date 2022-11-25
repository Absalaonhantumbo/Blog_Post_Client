import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from 'src/app/models/post';
import { MatDialogRef } from '@angular/material/dialog';
import { PostsService } from 'src/app/services/posts.service';
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../store/reducers";
import {addPosts} from "../../store/actions/posts.actions";
import {selectAllPosts, selectPostsLoading} from "../../store/selectors/posts.selectors";
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postt: IPost| any;
  addPostData={
    title: '',
    content: '',
    postImage:''
  }
  fileToPost: File | any;

  constructor(
    private postService: PostsService,
    private router: Router,
    public dialogRef: MatDialogRef<AddPostComponent>,
    private store: Store<IAppState>,
    public _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


  selectedFile = null;
  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
  }

  postFormData = new FormData();

  postFormGroup = this._formBuilder.group({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    //postImage: new FormControl('', Validators.required),
  });


  onImageFileChange(event: any){
    this.fileToPost = <File> event.target.files[0]
    console.log(this.fileToPost.name)

  }

  fileFormSubmit(){
    this.postFormData.append('title', this.postFormGroup.get('title')?.value);
    this.postFormData.append('content', this.postFormGroup.get('content')?.value);
    this.postFormData.append('postImage', this.fileToPost, this.fileToPost.name)

    this.onAddPost(this.postFormData)
  }

  // refresh(): void{
  //   this.router.navigateByUrl("/home", {skipLocationChange: true})
  // }

  onAddPost(formData: FormData) {

    this.store.dispatch(addPosts({payload: formData}));
    this.store.pipe(select(selectAllPosts)).subscribe(data =>{
      this.postService.showMessage('Operacao executada com sucesso!');
      this.backHome();
    });
  }

  backHome(): void{
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(()=>{
      this.router.navigateByUrl("/home");
    })
  }



}
