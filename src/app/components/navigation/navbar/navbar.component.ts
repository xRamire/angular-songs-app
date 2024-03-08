import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: string = 'Mi Aplicación';
  showSidebar: boolean = false;
  showTitle: boolean = false;
  showBackButton: boolean = false; 

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateNavbarContent();
    });
  }

  ngOnInit(): void {
    this.updateNavbarContent();
  }

  updateNavbarContent(): void {
    let currentRoute = this.route;
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }
    currentRoute.data.subscribe(data => {
      if (data && data['title']) {
        this.title = data['title'];
        this.showTitle = true;
        this.showBackButton = currentRoute.snapshot.url.length > 0; // Verifica si estamos en una ruta hija
      } else {
        this.showTitle = false;
        this.showBackButton = false;
      }
    });
  
    // Si estamos en la ruta 'song-details', actualizamos el título con el parámetro de la ruta
    if (currentRoute.snapshot.routeConfig?.path === 'song-details/:artist/:title/:id') {
      this.title = `${currentRoute.snapshot.params['artist']} - ${currentRoute.snapshot.params['title']}`;
    }
  }
  

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
