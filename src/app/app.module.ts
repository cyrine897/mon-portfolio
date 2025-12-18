import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { register } from 'swiper/element/bundle';
import { AccueilComponent } from './accueil/accueil.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

register();

// Définir les routes
const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent,
    AccueilComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
