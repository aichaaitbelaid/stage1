import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {ModalComponent} from "../modal/modal.component";
import {VilleService} from "../../Controller/service/Ville.service";
import {VilleVo} from "../../Controller/model/Ville.model";


@Component({
  selector: 'app-nos-localisations',
  templateUrl: './nos-localisations.component.html',
  styleUrls: ['./nos-localisations.component.css']
})
export class NosLocalisationsComponent implements OnInit {

  constructor(private dialog: MatDialog , private villeService: VilleService) { }
  openDialog(){
     this.dialog.open(ModalComponent, {
      height: '100%',
      width: '40%',
       position: { left: '32%'}
    });

  }

  //ville

  get villes(): Array<VilleVo> {
    return this.villeService.villes;
  }

  set villes(value: Array<VilleVo>) {
    this.villeService.villes = value;
  }

  get selectedVille(): VilleVo {
    return this.villeService.selectedVille;
  }

  set selectedVille(value: VilleVo) {
    this.villeService.selectedVille = value;
  }

  get villeSelections(): Array<VilleVo> {
    return this.villeService.villeSelections;
  }


  set villeSelections(value: Array<VilleVo>) {
    this.villeService.villeSelections = value;
  }

  get createVilleDialog(): boolean {
    return this.villeService.createVilleDialog;
  }

  set createVilleDialog(value: boolean) {
    this.villeService.createVilleDialog = value;
  }

  get editVilleDialog(): boolean {
    return this.villeService.editVilleDialog;
  }

  set editVilleDialog(value: boolean) {
    this.villeService.editVilleDialog = value;
  }

  get viewVilleDialog(): boolean {
    return this.villeService.viewVilleDialog;
  }

  set viewVilleDialog(value: boolean) {
    this.villeService.viewVilleDialog = value;
  }

  get searchVille(): VilleVo {
    return this.villeService.searchVille;
  }

  set searchVille(value: VilleVo) {
    this.villeService.searchVille = value;
  }


  ngOnInit(): void {
  }

}
