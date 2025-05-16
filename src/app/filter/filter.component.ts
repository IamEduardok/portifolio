import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() categories: { id: string, name: string }[] = [];
  @Input() selectedCategory: string = 'all';
  @Output() categoryChange = new EventEmitter<string>();

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
    this.categoryChange.emit(categoryId);
  }
}