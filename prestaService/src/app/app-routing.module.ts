import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from '../app/accueil/accueil.component';
import { AjoutPrestationComponent } from '../app/ajout-prestation/ajout-prestation.component';
import { ExplorationComponent } from '../app/exploration/exploration.component';
import { LoginComponent } from '../app/login/login.component';
import { MesPrestationsComponent } from '../app/mes-prestations/mes-prestations.component';
import { PrestationComponent } from '../app/prestation/prestation.component';

const routes: Routes = [
  { path: "", component: AccueilComponent},
  { path: "ajoutPrestation", component: AjoutPrestationComponent},
  { path: "prestation", component: PrestationComponent},
  { path: "exploration", component: ExplorationComponent},
  { path: "mesprestations", component: MesPrestationsComponent},
  { path: "connexion", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
