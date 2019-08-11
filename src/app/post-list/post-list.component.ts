import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];
  postSubscription: Subscription;
  
  //@Input() posts: any;
  
  constructor(private postsservice: PostsService,
              private router : Router) { }

  ngOnInit() {
    this.postSubscription = this.postsservice.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;

      }
    );
    this.postsservice.emitPosts();
  }

  onNewPost() {
  this.router.navigate(['/posts', 'new']);
  }

  onDeletePost(post: Post) {
    this.postsservice.removePost(post);
  }

  onViewPost(id: number) {
    this.router.navigate(['/posts', 'view', id]);
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
