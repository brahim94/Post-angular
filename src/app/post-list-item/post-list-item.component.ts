import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit, OnDestroy {

  @Input() titre: string;
  @Input() content: string;
  loveIts : number = 0;
  posts: any[];

  postsSubscription: Subscription;

  createdAt = new Date();
  
  constructor(private postsService : PostsService) { }
 
  ngOnInit() {

    this.postsSubscription = this.postsService.postsSubject.subscribe(
    (posts: any[]) => {
    this.posts = posts;
  }
 );
  this.postsService.emitPostSubject();
  }

  LikeIt() {
    this.postsService.clickLike();
    
  }

  Deslike() {
    this.postsService.clickDeslike();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

 
}
