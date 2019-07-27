import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

createdAt = new Date();


posts = [
{
titre: 'Mon Premier Post',
content: 'Hello again, it\'\s my way of doing things, it might likes you, it might not'
},
{
titre: 'Mon deixième post',
content: 'but don\'\t let that affects your decision in which concerncs the mark that you gonna give me '
},
{
titre: 'Encore un post',
content: 'je sais pas quoi ajouter autre'
}
];

}
