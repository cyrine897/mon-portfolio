import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  // <-- implémente OnInit
  constructor(private router: Router) {
        console.log('AppComponent chargé !');

  }

  goToProjects() {
    this.router.navigate(['/accueil']); // bouton "Voir mes projets"
  }
}
