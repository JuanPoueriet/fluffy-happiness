import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  background: ThemePalette = undefined;
  navLinks = [
    {
      path: 'home', label: 'Home'
    },
    {
      path: 'service', label: 'Service'
    },
    {
      path: 'project', label: 'Project'
    },
    {
      path: 'about-us', label: 'About us'
    },
    {
      path: 'contact', label: 'Contact'
    },
  ]
}
