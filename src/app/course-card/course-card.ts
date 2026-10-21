import { DatePipe, CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  imports: [DatePipe, CurrencyPipe],
  selector: 'app-course-card',
  styleUrl: './course-card.css',
  templateUrl: './course-card.html',
})
export class CourseCard {
   @Input() course?: Course;
   @Output() courseBooked = new EventEmitter<any>();
   @Output() wishlistAdded = new EventEmitter<any>()

  onCourseBooked(): void {
    this.courseBooked.emit(this.course);
  }

  onToWhishlist(): void {
    this.wishlistAdded.emit(this.course);
  }
}
