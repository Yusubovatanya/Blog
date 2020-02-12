import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/main/services/blog.service';
import { BlogCoreService } from 'src/app/main/services/blog-core.service';
import { User } from 'src/app/core/models/user.model';
import { Article } from 'src/app/core/models/article.model';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.scss']
})
export class AuthorItemComponent implements OnInit {
   idAuthor: string;
  author: User;
  articleList: Article[];

  constructor(
    public activatedRoute: ActivatedRoute,
    public blogService: BlogService,
    public blogCoreService: BlogCoreService,
  ) { }

  ngOnInit() {
    this. idAuthor = this.activatedRoute.snapshot.paramMap.get('id');

    if (!this.blogCoreService.users) {
      this.blogCoreService.getUsers().subscribe(
        () => {
          this.getAuthor();
        }
      );
    } else {
      this.getAuthor();
    }

    if (!this.blogCoreService.postsList) {
      this.blogCoreService.getPosts().subscribe(
        () => {
          this.getArticleList();
        }
      );
    } else {
      this.getArticleList();
    }
  }

  getAuthor() {
    this.author = this.blogService.findUserName(this. idAuthor, this.blogCoreService.users)[0];
  }

  getArticleList() {
    this.articleList = this.blogService.findAuthorPosts(this. idAuthor, this.blogCoreService.postsList);
  }
}
