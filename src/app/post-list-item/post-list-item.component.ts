import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit, OnDestroy {

  @Input() titre: string;
  @Input() content: string;
  private test : number ;

  posts: any[];
  private count: number = 0;
  private discount: number = 0;
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
  
 

  LikeIt(count: number) {
  this.postsService.clickLike(count);
  this.count = this.postsService.loveIts;
  console.log(this.count);
  }

  Deslike(count: number) {
    this.postsService.clickDeslike(count);
    this.count = this.postsService.loveIts;
    console.log(this.postsService.loveIts);
    
  }

  

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

 
}
