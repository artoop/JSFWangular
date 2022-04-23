import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tab';
  bgImage: string = 'https://img.freepik.com/free-photo/book-stack-library-room-blurred-bookshelf-background_42691-514.jpg?w=2000';

  applyBg($event: string) {
    this.bgImage = $event;
    console.log($event);
  }
}
