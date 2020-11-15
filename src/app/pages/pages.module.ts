import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutes } from './pages.routes';
import { ShareModule } from '../share/share.module';
import { ComponentsModule } from '../components/components.module';
import { PagesComponent } from './pages.component';
import { RecetasComponent } from './recetas/recetas.component';
import { RecetaComponent } from './receta/receta.component';

const componentes = [
  PagesComponent,
  HomeComponent,
  RecetasComponent,
  RecetaComponent
]

@NgModule({
  declarations: componentes,
  imports: [
    CommonModule,
    ShareModule,
    ComponentsModule,
    PagesRoutes
  ],
  exports: componentes
})
export class PagesModule { }
