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

  private  posts = [
    {
    id: 1,
    titre: 'Mon Premier Post',
    content: 'Hello Friend, you know there is a handred way to do this, and what matters is if it operational or not'
    },
    {
    id: 2,
    titre: 'Mon deixième post',
    content: 'So, be cool :D '
    },
    {
    id: 3,
    titre: 'Encore un post',
    content: ' i don\'\t know whatelse to add'
    }
    ];

    clickLike(loveIts: number) {
     loveIts =  this.loveIts++
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
      id: 0,
      titre: '',
      content: ''
    };

    postObject.titre = titre;
    postObject.content = content; 
    postObject.id = this.posts[(this.posts.length - 1)].id + 1;

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
  
}
