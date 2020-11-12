import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MenuComponent } from './menu/menu.component';
import { ResenasComponent } from './resenas/resenas.component';
import { SlidesComponent } from './slides/slides.component';


const componentes = [
  AboutComponent,
  ContactComponent,
  GalleryComponent,
  MenuComponent,
  ResenasComponent,
  SlidesComponent
]


@NgModule({
  declarations: componentes,
  imports: [
    CommonModule
  ],
  exports: componentes
})
export class ComponentsModule { }
