import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-delete',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-delete.html',
  styleUrls: ['./update-delete.css']
})
export class UpdateDelete {
  postId = '';
  title = '';
  body = '';
  result: any = null;

  constructor(private http: HttpClient) {}

  updatePost() {
    const payload = {
      id: +this.postId,
      title: this.title,
      body: this.body,
      userId: 1
    };

    this.http
      .put(`https://jsonplaceholder.typicode.com/posts/${this.postId}`, payload)
      .subscribe((data) => {
        this.result = data;
      });
  }

  deletePost() {
    this.http
      .delete(`https://jsonplaceholder.typicode.com/posts/${this.postId}`)
      .subscribe((data) => {
        this.result = { deleted: true, response: data };
      });
  }
}
