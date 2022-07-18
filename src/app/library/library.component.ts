import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../book-detail/book-detail.component';
import { LibraryService } from '../services/library.service';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent{

  libraryUpdateSubscription: Subscription;
  selectedBookIndex: number;
  books: Book[];

  constructor(private libraryService: LibraryService) {
    this.books = libraryService.books;
  }

  ngOnInit(){
    this.libraryUpdateSubscription = this.libraryService.libraryUpdateEmitter.subscribe((bookList: Book[])=>{
      this.books = bookList;
    });
  }

  ngOnDestroy() {
    this.libraryUpdateSubscription.unsubscribe();
  }

  onBookSelected(index: number) {
    this.selectedBookIndex = index;
    this.libraryService.changeBgImage(this.books[index].image);
  }

  onNext() {
    if(this.selectedBookIndex === null || this.selectedBookIndex === undefined){
      this.selectedBookIndex = 0;
    }
    else{
      this.selectedBookIndex = (this.selectedBookIndex + 1)%this.books.length;
    }
    this.libraryService.changeBgImage(this.books[this.selectedBookIndex].image);
  }

  onPrevious() {
    if(this.selectedBookIndex === null || this.selectedBookIndex === undefined){
      this.selectedBookIndex = 0;
    }
    else{
      this.selectedBookIndex = (this.selectedBookIndex - 1);
      if(this.selectedBookIndex == -1){
        this.selectedBookIndex = this.books.length-1;
      }
    }
    this.libraryService.changeBgImage(this.books[this.selectedBookIndex].image);
  }


}
