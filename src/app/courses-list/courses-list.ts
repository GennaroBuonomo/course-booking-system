import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-courses-list',
  styleUrl: './courses-list.css',
  templateUrl: './courses-list.html',
})
export class CoursesList {
  title: string = "Corsi Disponibili"
  courses = [
    {id: 1, title: 'Introduzzione ad Angular', description: 'Impara Angular in questo corso', price: '30', date:'20-10-2026', soldOut: false},
    {id: 2, title: 'Angular avanzato', description: 'Impara nuove skill di Angular', price: '50', date:'20-10-2026', soldOut: true},
    {id: 3, title: ' Angular supremo', description: 'Impara Angular supremo', price: '100', date:'20-10-2026', soldOut: false},
  ];
}
