import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() titre: string;
  @Input() content: string;
  @Input() createdAt = new Date;
  like : number = 0;
  deslike : number = 0;

  constructor() { }

  ngOnInit() {
  }

   clickLike(): void{
        this.like++
        }

    clickDeslike(): void{
        this.deslike++
    }

}
