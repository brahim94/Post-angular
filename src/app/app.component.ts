import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

created_at: Date


posts = [
{
titre: 'Mon Premier Post',
content: 'Salut'
},
{
titre: 'Mon deixième post',
content: 'soyez sympa '
},
{
titre: 'Encore un post',
content: 'je sais pas quoi ajouter autre'
}
];

}
