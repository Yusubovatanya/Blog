import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogCoreService } from 'src/app/main/services/blog-core.service';
import { BlogService } from 'src/app/main/services/blog.service';
import { Article } from 'src/app/core/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article;
  articleId: string;
  author: string;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public blogCoreService: BlogCoreService,
    public blogService: BlogService,
  ) { }

  ngOnInit() {
    this.articleId = this.activatedRoute.snapshot.paramMap.get('id');
    this.blogCoreService.getPost(this.articleId).subscribe(
      (res) => {
        this.article = res;
        if (!this.blogCoreService.users) {
          this.blogCoreService.getUsers().subscribe(
            () => {
              this.getAuthor();
            },
          );
        } else {
          this.getAuthor();
        }
      },
    );
  }

  getAuthor() {
    this.author = this.blogService.findUserName(this.article.author, this.blogCoreService.users)[0];
  }
}
