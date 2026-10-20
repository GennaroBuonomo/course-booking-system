import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesList } from './courses-list/courses-list';

@Component({
  imports: [RouterOutlet, CoursesList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('course-booking-system');
}
