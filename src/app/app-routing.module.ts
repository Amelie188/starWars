import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VaisseauComponent } from './components/vaisseau/vaisseau.component';
import { PlanetComponent } from './components/planet/planet.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { VaisseauDetailComponent } from './components/vaisseau-detail/vaisseau-detail.component';
import { AddVaisseauComponent } from './components/add-vaisseau/add-vaisseau.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import { EditPlanetComponent } from './components/edit-planet/edit-planet.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'}, //permet de rediriger automatiquement l'utilisateur si aucune URL renseignée
  { path: 'home', component: HomeComponent },
  { path: 'vaisseau', component: VaisseauComponent},
  { path: 'planet', component: PlanetComponent },
  { path: 'planet/ajout', component:AddPlanetComponent},
  { path: 'vaisseau/edit/:id' , component: EditPlanetComponent},
  { path: 'planet/:id', component: PlanetDetailComponent },
  { path: 'vaisseau/ajout', component: AddVaisseauComponent},
  { path: 'planet/edit/:id' , component: EditPlanetComponent},
  { path: 'vaisseau/:id', component: VaisseauDetailComponent},

  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
