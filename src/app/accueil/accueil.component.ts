import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements AfterViewInit {


  portfolioItems = [
    { img: 'assets/img/rotar1.PNG', title: 'App 1', description: 'Description', category: 'gallery-app' },
    { img: 'assets/img/rotar2.PNG', title: 'Product 1', description: 'Description', category: 'gallery-product' },
    { img: 'assets/img/rotar3.PNG', title: 'Branding 1', description: 'Description', category: 'gallery-branding' },
    { img: 'assets/img/rotar4.PNG', title: 'App 2', description: 'Description', category: 'gallery-app' },
    { img: 'assets/img/rotar5.PNG', title: 'Product 2', description: 'Description', category: 'gallery-product' },
    { img: 'assets/img/rotar6.PNG', title: 'Branding 2', description: 'Description', category: 'gallery-branding' },
    // ajoute le reste de tes items
  ];

  slideIndex = 1;

  ngAfterViewInit() {
      setTimeout(() => this.showSlide(this.slideIndex), 0);

  }


  plusSlide(n: number) {
    this.showSlide(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlide(this.slideIndex = n);
  }

  private showSlide(n: number) {
    const slides = document.getElementsByClassName("portfolio-slide") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;

    if (n > slides.length) this.slideIndex = 1;
    if (n < 1) this.slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    for (let i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" active", "");

    slides[this.slideIndex - 1].style.display = "block";
    if (dots[this.slideIndex - 1]) dots[this.slideIndex - 1].className += " active";
  }
}
