import { Component, OnInit } from '@angular/core';
import { BlogCoreService } from 'src/app/main/services/blog-core.service';
import { Article } from 'src/app/core/models/article.model';
import { PagingService } from 'src/app/shared/services/paging.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  articleList: Article[] = [];
  articleServiceList: Article[] = [];
  itemOnPage = 4;
  lastPage = false;

  constructor(
    public blogCoreService: BlogCoreService,
    public pagingService: PagingService,
  ) { }

  ngOnInit() {
    if (!this.blogCoreService.postsList) {
      this.blogCoreService.getPosts().subscribe(
        () => {
          this.init();
        },
        (err) => console.log(err),
      );
    } else {
      this.init();
    }
  }

  init() {
    this.articleServiceList = this.blogCoreService.postsList;
    this.pagingService.initPaging();
    this.pagingService.setInitialParametersPaging(this.itemOnPage, this.articleServiceList.length);
    this.pagingService.identLastPageService();
    this.showMore();
  }

  isLastPage() {
    this.lastPage = this.pagingService.isLastPage();
  }

  showMore() {
    this.pagingService.identStartEndPage();
    this.articleList = this.articleList.concat(
      this.articleServiceList.slice(this.pagingService.startPage, this.pagingService.endPage)
    );
    this.isLastPage();
  }
}
