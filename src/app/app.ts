import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Navigation } from "./navigation/navigation";



@Component({
  selector: 'app-root',
  standalone:true,
  imports: [Navigation, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-task2';
}
