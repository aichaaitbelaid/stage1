import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlateformeComponent } from './plateforme/plateforme.component';
import { MenuComponent } from './plateforme/headerComponent/menu/menu.component';
import { ImageComponent } from './plateforme/bodyComponent/header/image/image.component';
import { ServicesComponent } from './plateforme/bodyComponent/body/services/services.component';
import { AvisComponent } from './plateforme/bodyComponent/footer/avis/avis.component';

import { AdressComponent } from './plateforme/footer/adress/adress.component';
import {NosLocalisationsComponent} from "./plateforme/nos-localisations/nos-localisations.component";
import {PermisComponent} from "./plateforme/permis/permis.component";
import { AgenceComponent } from './plateforme/agence/agence.component';
import {MoniteurComponent} from "./plateforme/moniteur/moniteur.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ZoneAvisComponent } from './plateforme/zone-avis/zone-avis.component';
import { ModalComponent } from './plateforme/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {LoginAdminComponent} from "./module/admin/login-admin/login-admin.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EcolListComponent} from "./module/admin/view/ecole/ecol-list/ecol-list.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatLabel} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import { AComponent } from './a/a.component';





@NgModule({
  declarations: [
    AppComponent,
    PlateformeComponent,
    MenuComponent,

    AvisComponent,
    MoniteurComponent,
    LoginAdminComponent,



    NosLocalisationsComponent,
    PermisComponent,
    AgenceComponent,
    LandingPageComponent,
    ImageComponent,
    ServicesComponent,
    AdressComponent,

EcolListComponent,
    ZoneAvisComponent,
    ModalComponent,
    AComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
