import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Z0HomeComponent } from './Components/z0-home/z0-home.component';
import { Z1AboutComponent } from './Components/z1-about/z1-about.component';
import { Z2MusicaComponent } from './Components/z2-musica/z2-musica.component';
import { Z3CancionesComponent } from './Components/z3-canciones/z3-canciones.component';
import { Z4PremiosComponent } from './Components/z4-premios/z4-premios.component';
import { Z5MerchComponent } from './Components/z5-merch/z5-merch.component';

const routes: Routes = [
  {path: '', component: Z0HomeComponent},
  {path: 'about', component: Z1AboutComponent},
  {path: 'musica', component: Z2MusicaComponent},
  {path: 'canciones', component: Z3CancionesComponent},
  {path: 'premios', component: Z4PremiosComponent},
  {path: 'merch', component: Z5MerchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
