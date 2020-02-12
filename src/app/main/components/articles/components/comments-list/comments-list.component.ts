import { Component, OnInit, Input } from '@angular/core';
import { UserComment } from 'src/app/core/models/user-comment.model';
import { BlogCoreService } from 'src/app/main/services/blog-core.service';
import { BlogService } from 'src/app/main/services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { PagingService } from 'src/app/shared/services/paging.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  commentList: UserComment[] = [];
  commentServiceList: UserComment[] = [];
  idPost: string;
  itemOnPage = 1;
  lastPage = false;

  constructor(
    public blogCoreService: BlogCoreService,
    public blogService: BlogService,
    public activatedRoute: ActivatedRoute,
    public pagingService: PagingService,
  ) { }

  ngOnInit() {
    this.idPost = this.activatedRoute.snapshot.paramMap.get('id');
    this.blogCoreService.getComments().subscribe(
      (res: UserComment[]) => {
        this.init();
      }
    );
  }

  init() {
    this.commentServiceList = this.blogService.findComments(this.idPost, this.blogCoreService.commentsList);
    this.pagingService.initPaging();
    this.pagingService.setInitialParametersPaging(this.itemOnPage, this.commentServiceList.length);
    this.pagingService.identLastPageService();
    this.showMore();
  }

  isLastPage() {
    this.lastPage = this.pagingService.isLastPage();
  }

  showMore() {
    this.pagingService.identStartEndPage();
    this.commentList = this.commentList.concat(
      this.commentServiceList.slice(this.pagingService.startPage, this.pagingService.endPage)
    );
    this.isLastPage();
  }
}
