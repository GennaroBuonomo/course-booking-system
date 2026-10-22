import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../course-card/course-card';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course';

@Component({
  imports: [CourseCard],
  selector: 'app-courses-list',
  styleUrl: './courses-list.css',
  templateUrl: './courses-list.html',
})
export class CoursesList implements OnInit{
  title: string = "Corsi Disponibili"
  wishlist: Course[] = [];
  courses:  Course[] = [];

  constructor(private courseService: CourseService) {

  }

  ngOnInit(): void{
    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data
      },
      error: (err) => {
        console.error('Errore corso', err)
      }
    });
  }

  onCourseBooked(course: Course): void {
    console.log('Un genitore ha sentito parlare della prenotazione', course.title)
  }

  onToWhishlist(course: Course): void {
    console.log('Aggiunto ai preferiti', course.title);
    this.wishlist.push(course)
  }


}
