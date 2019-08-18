import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/Http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostComponent } from './post-list/post-list.component'
import { PostsService } from './services/posts.service';
import { Routes, RouterModule } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import { SinglePostComponent } from './post-list/single-post/single-post.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostComponent},
  { path: 'Posts/new', component: NewPostComponent},
  { path: 'posts/view', component: PostListItemComponent},
  { path: 'posts/single', component: SinglePostComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListItemComponent,
    SinglePostComponent,
    NewPostComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  
    
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
