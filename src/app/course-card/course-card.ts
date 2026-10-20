import { DatePipe, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [DatePipe, CurrencyPipe],
  selector: 'app-course-card',
  styleUrl: './course-card.css',
  templateUrl: './course-card.html',
})
export class CourseCard {
   @Input() course: any;

  viewDetails(title: string): void{
    alert(`Vedi i dettagli per ${title}`)
  }
}
