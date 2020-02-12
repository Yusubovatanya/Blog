import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Article } from 'src/app/core/models/article.model';
import { User } from 'src/app/core/models/user.model';
import { UserComment } from 'src/app/core/models/user-comment.model';

@Injectable({
  providedIn: 'root'
})
export class BlogCoreService {
  url = 'http://my-json-server.typicode.com/orlovskyalex/jellyfish-fake-rest-server/';
  postsList: Article[];
  users: User[];
  commentsList: UserComment[];

  constructor(
    private http: HttpClient,
  ) { }

  getPosts(): Observable<Article[]> {
    return this.http.get(`${this.url}posts`)
      .pipe(
        tap((res: Article[]) => {
          console.log(res);
          this.postsList = res;
        })
      );
  }

  getPost(id): Observable<any> {
    return this.http.get(`${this.url}posts/${id}`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get(`${this.url}users`)
      .pipe(
        tap((res: User[]) => {
          this.users = res;
        })
      );
  }

  getComments(): Observable<UserComment[]> {
    return this.http.get(`${this.url}comments`)
      .pipe(
        tap((res: UserComment[]) => {
          this.commentsList = res;
        })
      );
  }

  getAll() {
    return this.http.get(`${this.url}db`);
  }
}
