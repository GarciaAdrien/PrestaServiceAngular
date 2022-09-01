import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AjoutPrestationComponent } from './ajout-prestation/ajout-prestation.component';
import { ExplorationComponent } from './exploration/exploration.component';
import { LoginComponent } from './login/login.component';
import { MesPrestationsComponent } from './mes-prestations/mes-prestations.component';
import { PrestationComponent } from './prestation/prestation.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AjoutPrestationComponent,
    ExplorationComponent,
    LoginComponent,
    MesPrestationsComponent,
    PrestationComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
