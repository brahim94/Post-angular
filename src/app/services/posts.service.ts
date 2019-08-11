import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot

@Injectable()

export class PostsService {
  
  loveIts : number = 0;
  createdAt = new Date();
  titre = 'posts'; 

  posts = [
    {
    titre: 'Mon Premier Post',
    content: 'Hello Friend, you know there is a handred way to do this, and what matters is if it operational or not'
    },
    {
    titre: 'Mon deixième post',
    content: 'So, be cool :D '
    },
    {
    titre: 'Encore un post',
    content: ' i don\'\t know whatelse to add'
    }
    ];

    postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }
    emitPosts() {
    this.postsSubject.next(this.posts);
}
  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
    .on('value', (data: DataSnapshot) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    }
    );

  }
  getSinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }
    
  creatNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }
  clickLike(): void{
    this.loveIts++
    }

  clickDeslike(): void{
    this.loveIts--
}

}