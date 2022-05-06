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


@NgModule({
  declarations: [
    AppComponent,
    PlateformeComponent,
    MenuComponent,
    ImageComponent,
    ServicesComponent,
    AvisComponent,

    AdressComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
