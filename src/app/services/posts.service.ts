import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
//import * as firebase from 'firebase';
//import DataSnapshot = firebase.database.DataSnapshot

@Injectable()

export class PostsService {
  loveIts : number = 0;
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
  }
  
  clickLike(): void{
    this.loveIts++
    }

  clickDeslike(): void{
    this.loveIts--


}
}
