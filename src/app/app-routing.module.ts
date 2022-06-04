import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./plateforme/headerComponent/menu/menu.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {NosLocalisationsComponent} from "./plateforme/nos-localisations/nos-localisations.component";
import {PermisComponent} from "./plateforme/permis/permis.component";
import {AdressComponent} from "./plateforme/footer/adress/adress.component";
import {ImageComponent} from "./plateforme/bodyComponent/header/image/image.component";
import {ServicesComponent} from "./plateforme/bodyComponent/body/services/services.component";
import {AgenceComponent} from "./plateforme/agence/agence.component";
import {ZoneAvisComponent} from "./plateforme/zone-avis/zone-avis.component";
import {ModalComponent} from "./plateforme/modal/modal.component";


const routes: Routes = [{path:'noslocalisations' ,component: NosLocalisationsComponent },
  {path:'permis', component: PermisComponent},{path:'ag', component: AgenceComponent},
  {path:'', component: LandingPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
