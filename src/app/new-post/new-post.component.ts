import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private postsService: PostsService,
    private router: Router) { }

  ngOnInit() {
   
  }

  onSubmit(form: NgForm) {
    const titre = form.value['titre'];
    const content = form.value['content'];
    this.postsService.addPost(titre, content);
    this.router.navigate(['/posts']);
  }

}
