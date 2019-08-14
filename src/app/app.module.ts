import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/Http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostComponent } from './post-list/post-list.component'
import { PostsService } from './services/posts.service';
import { Routes } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostComponent},
  { path: 'posts/new', component: NewPostComponent},
  { path: 'posts/view', component: PostListItemComponent}
 
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
    
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
