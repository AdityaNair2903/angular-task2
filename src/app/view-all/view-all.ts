import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-all',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-all.html',
  styleUrls: ['./view-all.css']
})
export class ViewAll {
  posts: any[] = [];
  search = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    const url = this.search
      ? `https://jsonplaceholder.typicode.com/posts?title_like=${this.search}`
      : `https://jsonplaceholder.typicode.com/posts`;

    this.http.get<any[]>(url).subscribe((data) => {
      this.posts = data;
    });
  }
}
