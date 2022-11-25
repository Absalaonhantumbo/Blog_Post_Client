import {postsReducer, IPostsState} from "./posts.reducer";
import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {environment} from "../../../environments/environment";

export interface IAppState {
  posts: IPostsState;
}

export const reducers: ActionReducerMap<IAppState> = {
  posts:postsReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? []
  : [];
