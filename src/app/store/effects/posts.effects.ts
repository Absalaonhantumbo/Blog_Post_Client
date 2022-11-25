import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType } from "@ngrx/effects";
import {
  addPosts,
  addPostsFail,
  addPostsSuccess,
  getPosts,
  getPostsFail,
  getPostsSuccess
} from "../actions/posts.actions";
import {catchError, exhaustMap, map, of} from "rxjs";
import {PostsService} from "../../services/posts.service";

@Injectable()
export class PostsEffects {
  post: FormData|any;

  constructor(private postService: PostsService, private actions$: Actions) {
  }

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPosts),
      exhaustMap((action) =>
        this.postService.getAllPosts().pipe(
          map((posts) => getPostsSuccess({payload: posts})),
          catchError((error) => of(getPostsFail({payload: error})))
        )
      )
    )
  );

  addPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addPosts),
      exhaustMap((action) =>
        this.postService.addPost(action.payload).pipe(
          map((posts) => addPostsSuccess({payload: posts})),
          catchError((error) => of(addPostsFail({ payload: error })))
        )
      )
    )
  );
}
