import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create.html',
  styleUrls: ['./create.css']
})
export class Create {
  title = '';
  body = '';
  createdPost: any = null;

  constructor(private http: HttpClient) {}

  createPost() {
    const payload = {
      title: this.title,
      body: this.body,
      userId: 1
    };

    this.http
      .post('https://jsonplaceholder.typicode.com/posts', payload)
      .subscribe((data) => {
        this.createdPost = data;
      });
  }
}
