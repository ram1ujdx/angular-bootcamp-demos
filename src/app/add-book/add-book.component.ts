import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book:Book;

  
  constructor(private bookService:BookService, private router:Router) { }

  ngOnInit(): void {
    this.book=new Book();
    

  }

  addBook(f){
    console.log(f);
    this.bookService.books.push(f.value);
    this.router.navigate(['/show-all']);
    
  }

}
