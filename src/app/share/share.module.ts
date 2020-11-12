import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const componentes = [
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: componentes,
  imports: [
    CommonModule
  ],
  exports: componentes,
})
export class ShareModule { }
