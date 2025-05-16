import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component'; 

interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
  demoUrl?: string;
  codeUrl?: string;
}

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, FilterComponent],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent {
  filterCategories = [
    { id: 'all', name: 'Todos' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    
  ];

  selectedCategory: string = 'all';
  
  projects: Project[] = [
    {
      id: 1,
      title: 'Projeto 1',
      subtitle: 'Descrição do projeto 1',
      category: 'frontend',
      imageUrl: 'assets/images/card1.png',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Projeto 2',
      subtitle: 'Descrição do gyv 2',
      category: 'frontend',
      imageUrl: 'assets/images/card2.png',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Projeto 3',
      subtitle: 'Descrição do projeto 3',
      category: 'backend',
      imageUrl: 'assets/images/card3.png',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 4,
      title: 'Projeto smartfit',
      subtitle: 'usando angular',
      category: 'frontend',
      imageUrl: 'assets/images/card4.png',
      demoUrl: '#',
      codeUrl: '#'
    },
    
  ];

  get filteredProjects() {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }

  onCategoryChange(categoryId: string) {
    this.selectedCategory = categoryId;
  }
}