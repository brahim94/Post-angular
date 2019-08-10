import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
titre = 'posts'; 




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

}
