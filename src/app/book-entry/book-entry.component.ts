import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../book-detail/book-detail.component';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent implements OnInit {
  book: Book;
  form: FormGroup;

  open: boolean;

  constructor(private libraryService: LibraryService) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'author': new FormControl(null, [Validators.required]),
      'image': new FormControl(null, [Validators.required])
    });
    
    this.book = {
      title:'',
      description:'',
      author:'',
      image:''
    };
    this.reset();

    this.open = false;
  }

  openBox(){
    this.open = true;
  }

  reset(){
    this.form.reset();
    this.open = false;
  }


  save(){  
    if(this.form.valid) {
      this.libraryService.addBook(this.form.value as Book);
      this.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }


}
