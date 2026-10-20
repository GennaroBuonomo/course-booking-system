import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  imports: [NgStyle],
  selector: 'app-courses-list',
  styleUrl: './courses-list.css',
  templateUrl: './courses-list.html',
})
export class CoursesList implements OnInit{
  title: string = "Corsi Disponibili"
  courses = [
    {id: 1, title: 'Introduzzione ad Angular', description: 'Impara Angular in questo corso', price: '30', date:'20-10-2026', soldOut: false, img: 'Angular-logo.png'},
    {id: 2, title: 'Angular avanzato', description: 'Impara nuove skill di Angular', price: '50', date:'20-10-2026', soldOut: true, img: 'Angular-logo.png'},
    {id: 3, title: ' Angular supremo', description: 'Impara Angular supremo', price: '100', date:'20-10-2026', soldOut: false, img: 'Angular-logo.png'},
  ];

  ngOnInit(): void{
    console.log("Lista corsi Inizializzato")
  }

  viewDetails(title: string): void{
    alert(`Vedi i dettagli per ${title}`)
  }
}
