import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {
 currentFilter: string = '*';
  portfolioItems = [
    { id: 1, type: 'app', title: 'Récolter les succès : retour sur nos projets', img: 'rotar1.PNG' },
    { id: 1, type: 'app', title: 'Stratégies pour projets d’été', img: 'rotar2.PNG' },
    { id: 1, type: 'app', title: 'Résolution de problèmes et prise de décision en équipe', img: 'rotar3.PNG' },
    { id: 1, type: 'app', title: 'Créativité et innovation pour jeunes leaders', img: 'rotar4.PNG' },
    { id: 1, type: 'app', title: 'Cérémonie de remise des certificats', img: 'rotar5.PNG' },

    { id: 2, type: 'product', title: 'Ciné-Kids : Une séance magique pour les enfants', img: 'rotar6.PNG' },
        { id: 2, type: 'product', title: 'Planter les graines du changement', img: 'rotar9.PNG' },
    { id: 2, type: 'product', title: 'Leadership et motivation pour un nouveau départ', img: 'rotara8.PNG' },


    { id: 3, type: 'branding', title: 'Atelier : "Gestion de projet et planification stratégique"', img: 'rotar10.PNG' },
        { id: 3, type: 'branding', title: 'Réunion : "Récolter les succès : retour sur nos projets', img: 'rotar11.PNG' },
    { id: 3, type: 'branding', title: 'Formation : "Leadership avancé et mentorat', img: 'rotar12.PNG' },
    { id: 3, type: 'branding', title: 'Formation  : "Entrepeneuriat"', img: 'rotar13.PNG' },

    // ... tous les items
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.currentFilter = data['filter'] || '*';
    });
  }

  setFilter(filter: string) {
    this.currentFilter = filter;
    // Mise à jour de l'URL sans recharger la page
    this.router.navigate(['/about', filter === '*' ? '' : filter]);
  }

  getFilteredItems() {
    if (this.currentFilter === '*') return this.portfolioItems;
    return this.portfolioItems.filter(item => item.type === this.currentFilter);
  }
}
