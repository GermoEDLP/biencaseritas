import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { RecetaComponent } from './receta/receta.component';
import { RecetasComponent } from './recetas/recetas.component';


const pages_routes: Routes = [
  { path: '', component: PagesComponent, children: [
      {
          path: 'home', component: HomeComponent
      },
      {
        path: 'recetas', component: RecetasComponent
      },
      {
        path: 'receta/:id', component: RecetaComponent
      },
      { path: '**', pathMatch: 'full', redirectTo: 'home' }
  ] }
];

export const PagesRoutes = RouterModule.forChild( pages_routes );
