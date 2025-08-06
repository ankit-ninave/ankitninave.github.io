import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone:true,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Angular Portfolio',
      description: 'A personal portfolio built with Angular and SCSS.',
      githubUrl: 'https://github.com/yourusername/ng-showcase',
      demoUrl: 'https://yourusername.github.io/ng-showcase'
    },
    {
      title: 'Todo App',
      description: 'A simple todo application with Angular and localStorage.',
      githubUrl: 'https://github.com/yourusername/todo-app'
    },
    {
      title: 'Weather Dashboard',
      description: 'Displays weather data from an API with Angular.',
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      demoUrl: 'https://weatherdemo.example.com'
    }
  ];
}
