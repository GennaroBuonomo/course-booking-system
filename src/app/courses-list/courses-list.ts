import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../course-card/course-card';

@Component({
  imports: [CourseCard],
  selector: 'app-courses-list',
  styleUrl: './courses-list.css',
  templateUrl: './courses-list.html',
})
export class CoursesList implements OnInit{
  title: string = "Corsi Disponibili"
  courses = [
    { id: 1, title: 'Introduzione ad Angular', description: 'Impara Angular in questo corso', price: 30, date: '2026-10-20', soldOut: false, img: 'Angular-logo.png', onSale: false },
    { id: 2, title: 'Angular avanzato', description: 'Impara nuove skill di Angular', price: 50, date: '2026-10-20', soldOut: true, img: 'Angular-logo.png', onSale: true },
    { id: 3, title: 'RxJS Fondamentali', description: 'Impara RxJS', price: 45, date: '2026-10-20', soldOut: false, img: 'RxJS-logo.png', onSale: true },
  ];

  ngOnInit(): void{
    console.log("Lista corsi Inizializzato")
  }

  onCourseBooked(course: any): void {
    console.log('Un genitore ha sentito parlare della prenotazione', course.title)
  }


}
