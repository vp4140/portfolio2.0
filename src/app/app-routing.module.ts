import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'portfolio/:id', component: ProjectDetailsComponent },
  { path: 'testimonials', component:TestimonialsComponent},
  { path: 'about', component:AboutComponent},
  { path: 'articles', component:ArticlesComponent},
  { path:'get-in-touch',component:GetInTouchComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
