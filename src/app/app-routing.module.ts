import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component:PortfolioComponent},
  { path: 'testimonials', component:TestimonialsComponent},
  { path: 'about', component:AboutComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
