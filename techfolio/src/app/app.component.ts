import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from "./pages/about/about.component";
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SkilledServicesComponent } from "./pages/skilled-services/skilled-services.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent, ProjectsComponent, AboutComponent, ContactUsComponent, SkilledServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Ankit Ninave - Angular Developer Portfolio');
    this.meta.addTags([
      { name: 'description', content: 'Angular Developer Portfolio of Ankit Ninave showcasing projects and skills.' },
      { name: 'keywords', content: 'Angular, JavaScript, Frontend Developer, TypeScript, Ankit Ninave, Web Developer, Portfolio' },
    ]);
  }
}
