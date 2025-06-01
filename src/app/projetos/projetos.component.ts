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
    { id: 'fullstack', name: 'FullStack' },
    
  ];

  selectedCategory: string = 'all';
  
  projects: Project[] = [
    {
      id: 1,
      title: 'Site StartCine+',
      subtitle: 'Este projeto foi desenvolvido durante o programa Start <Tech> da Universidade TOTVS, em parceria com a Ada Tech e o Instituto da Oportunidade Social, utilizando o framework Angular.',
      category: 'frontend',
      imageUrl: 'assets/images/Startcine.png',
      demoUrl: '/',
      codeUrl: 'https://github.com/IamEduardok/ProjetoFinal_StartTech.git'
    },
    {
      id: 2,
      title: 'Login Autentificado',
      subtitle: 'Este projeto tem como objetivo demonstrar a construção de um sistema de login com autenticação de usuários utilizando tecnologias modernas de frontend e backend.',
      category: 'fullstack',
      imageUrl: 'assets/images/loginpage.png',
      demoUrl: '#',
      codeUrl: 'https://github.com/IamEduardok/loginpage.git'
    },
    {
      id: 3,
      title: 'Sistema de Vendas',
      subtitle: 'O Sistema de Gestão de Vendas é uma aplicação Java desenvolvida em modo terminal, utilizando Java puro, com persistência de dados via arquivos CSV, voltada ao gerenciamento de produtos e vendas.',
      category: 'backend',
      imageUrl: 'assets/images/backend.jpg',
      demoUrl: 'https://github.com/IamEduardok/Sistema-Vendas.git',
      codeUrl: 'https://github.com/IamEduardok/Sistema-Vendas.git'
    },
    {
      id: 4,
      title: 'Weather App',
      subtitle: 'Um aplicativo web de previsão do tempo que utiliza a API do OpenWeather, que oferece dados meteorológicos precisos e em tempo real, com um design moderno e interativo. Desenvolvido para ser rápido e intuitivo.',
      category: 'frontend',
      imageUrl: 'assets/images/Clima.png',
      demoUrl: 'https://iameduardok.github.io/Weather-App/',
      codeUrl: 'https://github.com/IamEduardok/Weather-App.git'
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