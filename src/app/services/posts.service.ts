import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/Http';
//import * as firebase from 'firebase';
//import DataSnapshot = firebase.database.DataSnapshot

@Injectable()

export class PostsService {

  postsSubject = new Subject<Post[]>();
  public loveIts: number = 0;
  public dontloveIt: number = 0;

  private  posts = [];

    clickLike(loveIts: number) {
      this.loveIts++
      }
  
     clickDeslike(loveIts: number) {
    loveIts = this.loveIts-- 
    }
  

   
  constructor(private httpClient: HttpClient) {
  }
    emitPostSubject() {
      this.postsSubject.next(this.posts.slice());
    }

    
    addPost(titre: string, content: string) {
    const postObject = {
      //id: 0,
      titre: '',
      content: ''
    };

    postObject.titre = titre;
    postObject.content = content; 
    //postObject.id = this.posts[(this.posts.length - 1)].id + 1;

    this.posts.push(postObject);
    this.emitPostSubject();
  }

  SavePostsToServer() {
    this.httpClient
      .put('https://posts-78b9e.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrelent terminé');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl == post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.SavePostsToServer();
    this.emitPostSubject();
    console.log()
  }
  
}
