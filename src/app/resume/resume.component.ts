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
    { title: 'Summit Partners', designation: 'Design', image: 'assets/img/forum2.PNG' },
    { title: 'Apex Strategies', designation: 'Stratégie visuelle', image: 'assets/img/sahty1.PNG' },
    { title: 'Cozycasa', designation: 'Illustration 3D', image: 'assets/img/activities1.PNG' },
    { title: 'Mars', designation: 'Art minimaliste', image: 'assets/img/labes.PNG' },
  ];
}
