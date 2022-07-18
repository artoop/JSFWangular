import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LibraryService } from './services/library.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tab';
  bgImage: string;
  bgImageUpdateSubscription: Subscription;

  constructor(private libraryService: LibraryService){
    this.bgImage = this.libraryService.bgImage;
  }

  ngOnInit(){
    this.bgImageUpdateSubscription = this.libraryService.bgImageUpdateEmitter.subscribe((bgImage: string)=> {
      this.bgImage = bgImage;
    });
  }


  applyBg($event: string) {
    this.bgImage = $event;
    console.log($event);
  }
  
}
