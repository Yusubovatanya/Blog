import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/core/models/article.model';
import { User } from 'src/app/core/models/user.model';
import { BlogService } from 'src/app/main/services/blog.service';
import { BlogCoreService } from 'src/app/main/services/blog-core.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {
  @Input() article: Article;
  author: User;

  constructor(
    public blogService: BlogService,
    public blogCoreService: BlogCoreService,
  ) { }

  ngOnInit() {
    if (!this.blogCoreService.users) {
      this.blogCoreService.getUsers().subscribe(
        () => {
          this.getAuthor();
        }
      );
    } else {
      this.getAuthor();
    }
  }

  getAuthor() {
    this.author = this.blogService.findUserName(this.article.author, this.blogCoreService.users)[0];
  }
}
