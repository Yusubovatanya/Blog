import { Component, OnInit, Input } from '@angular/core';
import { UserComment } from 'src/app/core/models/user-comment.model';
import { BlogCoreService } from 'src/app/main/services/blog-core.service';
import { BlogService } from 'src/app/main/services/blog.service';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {
  @Input() comment: UserComment;
  author: User;

  constructor(
    public blogCoreService: BlogCoreService,
    public blogService: BlogService,
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
    this.author = this.blogService.findUserName(this.comment.author, this.blogCoreService.users)[0];
  }
}
