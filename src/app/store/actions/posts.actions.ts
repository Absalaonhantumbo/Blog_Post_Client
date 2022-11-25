import {createAction, props} from "@ngrx/store";
import {IPost} from "../../models/post"



export const getPosts = createAction('[IPost] Get All Posts');
export const getPostsFail = createAction('[IPost] Get All Posts Fail',
  props<{ payload: any }>());
export const getPostsSuccess = createAction('[IPost] Get All Posts Success',
  props<{ payload: IPost[] }>());

export const addPosts = createAction('Add Posts',  props<{ payload: FormData }>() );
export const addPostsFail = createAction('Add Posts Fail',  props<{ payload: any }>() );
export const addPostsSuccess = createAction('Add Posts Success',  props<{ payload: IPost }>());
