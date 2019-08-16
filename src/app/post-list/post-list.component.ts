import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs/';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostComponent implements OnInit {
  isAuth = false;
  titre = 'posts'; 
  posts: any[];
  postsSubscription: Subscription;

  //@Input() posts: any;
  
  constructor(private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPostSubject();
  }

  onNewPost() {
    this.router.navigate(['/posts', 'new']);
  }

  onSave() {
    this.postsService.SavePostsToServer();
  }

  //onDeletePost(post: Post) {
    //this.postsService.removePost(post);
  //}
  
 // onViewPost(id: number) {
   // this.router.navigate(['/posts', 'view', id]);
  //}

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
