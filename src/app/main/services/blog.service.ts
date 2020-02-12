import { Injectable } from '@angular/core';
import { UserComment } from 'src/app/core/models/user-comment.model';
import { User } from 'src/app/core/models/user.model';
import { Article } from 'src/app/core/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  findComments(id, list): UserComment[] {
    const arr = list.filter((item) => item.post === id );
    return arr;
  }

  findAuthorPosts(id, list): Article[] {
    const arr = list.filter((item) => item.author === id );
    return arr;
  }

  findUserName(id, list): User {
    const arr = list.filter((item) => item.id === id );
    return arr;
  }

}
