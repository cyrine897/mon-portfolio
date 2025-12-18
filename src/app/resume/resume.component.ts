import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
 // si tu veux animer les barres depuis TS, tu peux ajouter les valeurs ici et les appliquer via [style.width]
  skills = [
    { label: 'UX Research and Testing', percent: 95 },
    { label: 'Product Management', percent: 84 },
    { label: 'UI & Visual Design', percent: 90 }
  ];

    realisations = [
    { title: 'Application Forum', designation: 'Développement d’application web / Forum interactif', image: 'assets/img/Proj1.PNG'}, 
    { title: 'SahtyApp', designation: 'Application mobile de santé', image: 'assets/img/proj2.PNG'}, 
    { title: 'Carte Labess', designation: 'Gestion de données sociales et administratives', image: 'assets/img/proje3.PNG'}, 
    { title: 'VisiteTunisia', designation: 'Plateforme touristique web', image: 'assets/img/projet4.PNG'}, 
  ];
}
