import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  imports: [NgStyle, DatePipe, CurrencyPipe],
  selector: 'app-courses-list',
  styleUrl: './courses-list.css',
  templateUrl: './courses-list.html',
})
export class CoursesList implements OnInit{
  title: string = "Corsi Disponibili"
  courses = [
    { id: 1, title: 'Introduzione ad Angular', description: 'Impara Angular in questo corso', price: 30, date: '2026-10-20', soldOut: false, img: 'Angular-logo.png' },
    { id: 2, title: 'Angular avanzato', description: 'Impara nuove skill di Angular', price: 50, date: '2026-10-20', soldOut: true, img: 'Angular-logo.png' },
    { id: 3, title: 'RxJS Fondamentali', description: 'Impara RxJS', price: 45, date: '2026-10-20', soldOut: false, img: 'RxJS-logo.png' },
  ];

  ngOnInit(): void{
    console.log("Lista corsi Inizializzato")
  }

  viewDetails(title: string): void{
    alert(`Vedi i dettagli per ${title}`)
  }
}
