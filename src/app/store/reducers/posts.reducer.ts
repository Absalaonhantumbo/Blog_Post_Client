import {createReducer, on} from "@ngrx/store";
import {
  getPosts,
  getPostsSuccess,
  getPostsFail,
  addPosts,
  addPostsSuccess,
  addPostsFail
} from "../actions/posts.actions";
import {IPost} from "../../models/post";

export interface IPostsState {
  posts: IPost[],
  isSaving : boolean,
  isLoading: boolean;
}

const initialState: IPostsState = {
  posts: [],
  isLoading: false,
  isSaving : false
}

export const postsReducer = createReducer(
  initialState,
  on(getPosts, (state) => {
    return { ...state, isLoading: true };
  }),
  on(getPostsSuccess, (state, { payload }) => {
    return {...state, posts: payload, isLoading: false}
  }),
  on(getPostsFail, (state, { payload }) => {
    return { ...state, isLoading: false};
  }),
  on(addPosts, (state) => {
    return { ...state, isSaving: true };
  }),
  on(addPostsSuccess, (state, {payload}) => {
    const newPosts = [...state.posts, payload];
    return { ...state, isSaving: false, posts: newPosts};
  }),
  on(addPostsFail, (state) => {
    return { ...state, isSaving: false};
  }),
);
