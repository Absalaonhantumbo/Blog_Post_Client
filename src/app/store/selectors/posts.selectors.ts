import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IPostsState} from "../reducers/posts.reducer";

export const postsState = createFeatureSelector<IPostsState>('posts');

export const selectAllPosts = createSelector(
  postsState,
  state => state.posts
);

export const selectPostsLoading = createSelector(
  postsState,
  state => state.isLoading
);
