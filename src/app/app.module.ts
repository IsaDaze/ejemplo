import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { prueba } from './prueba/prueba.compA';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { AboutComponent } from './Components/about/about.component';
import { Z0HomeComponent } from './Components/z0-home/z0-home.component';
import { Z1AboutComponent } from './Components/z1-about/z1-about.component';
import { Z2MusicaComponent } from './Components/z2-musica/z2-musica.component';
import { Z3CancionesComponent } from './Components/z3-canciones/z3-canciones.component';
import { Z4PremiosComponent } from './Components/z4-premios/z4-premios.component';
import { Z5MerchComponent } from './Components/z5-merch/z5-merch.component';

@NgModule({
  declarations: [
    AppComponent,
    prueba,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    AboutComponent,
    Z0HomeComponent,
    Z1AboutComponent,
    Z2MusicaComponent,
    Z3CancionesComponent,
    Z4PremiosComponent,
    Z5MerchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
