import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
     { id: 1, title: 'Introduzione ad Angular', description: 'Impara Angular in questo corso', price: 30, date: '2026-10-20', soldOut: false, img: 'Angular-logo.png', onSale: false },
    { id: 2, title: 'Angular avanzato', description: 'Impara nuove skill di Angular', price: 50, date: '2026-10-20', soldOut: true, img: 'Angular-logo.png', onSale: true },
    { id: 3, title: 'RxJS Fondamentali', description: 'Impara RxJS', price: 45, date: '2026-10-20', soldOut: false, img: 'RxJS-logo.png', onSale: true },
  ]


  constructor() { }

  getCourses(): Course[] {
    return this.courses
  }
}
