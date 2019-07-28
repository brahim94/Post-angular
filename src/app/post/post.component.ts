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
  loveIts : number = 0;


  constructor() { }

  ngOnInit() {
  }

   clickLike(): void{
        this.loveIts++
        }

    clickDeslike(): void{
        this.loveIts--
    }

}
