import { Component, OnInit } from '@angular/core';
import {AvisVisiteurService} from "../../../../Controller/service/AvisVisiteur.service";
import {AvisVisiteurVo} from "../../../../Controller/model/model/AvisVisiteur.model";
import {TypeAvisService} from "../../../../Controller/service/TypeAvis.service";
import {TypeAvisVo} from "../../../../Controller/model/model/TypeAvis.model";

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  constructor(private avisVisiteurService : AvisVisiteurService , private typeAvisService: TypeAvisService) { }

  get avisVisiteurs(): Array<AvisVisiteurVo> {
    return this.avisVisiteurService.avisVisiteurs;
  }

  set avisVisiteurs(value: Array<AvisVisiteurVo>) {
    this.avisVisiteurService.avisVisiteurs= value;
  }

  get selectedAvisVisiteur(): AvisVisiteurVo {
    return this.avisVisiteurService.selectedAvisVisiteur;
  }

  set selectedAvisVisiteur(value: AvisVisiteurVo) {
    this.avisVisiteurService.selectedAvisVisiteur = value;
  }

  get avisVisiteurSelections(): Array<AvisVisiteurVo> {
    return this.avisVisiteurService.avisVisiteurSelections;
  }


  set avisVisiteurSelections(value: Array<AvisVisiteurVo>) {
    this.avisVisiteurService.avisVisiteurSelections = value;
  }

  get createAvisVisiteurDialog(): boolean {
    return this.avisVisiteurService.createAvisVisiteurDialog;
  }

  set createAvisVisiteurDialog(value: boolean) {
    this.avisVisiteurService.createAvisVisiteurDialog = value;
  }

  get editAvisVisiteurDialog(): boolean {
    return this.avisVisiteurService.editAvisVisiteurDialog;
  }

  set editAvisVisiteurDialog(value: boolean) {
    this.avisVisiteurService.editAvisVisiteurDialog = value;
  }

  get viewAvisVisiteurDialog(): boolean {
    return this.avisVisiteurService.viewAvisVisiteurDialog;
  }

  set viewAvisVisiteurDialog(value: boolean) {
    this.avisVisiteurService.viewAvisVisiteurDialog = value;
  }

  get searchAvisVisiteur(): AvisVisiteurVo {
    return this.avisVisiteurService.searchAvisVisiteur;
  }

  set searchAvisVisiteur(value: AvisVisiteurVo) {
    this.avisVisiteurService.searchAvisVisiteur = value;
  }

  //typeAvis

  get typeAviss(): Array<TypeAvisVo> {
    return this.typeAvisService.typeAviss;
  }

  set typeAviss(value: Array<TypeAvisVo>) {
    this.typeAvisService.typeAviss = value;
  }

  get selectedTypeAvis(): TypeAvisVo {
    return this.typeAvisService.selectedTypeAvis;
  }

  set selectedTypeAvis(value: TypeAvisVo) {
    this.typeAvisService.selectedTypeAvis = value;
  }

  get typeAvisSelections(): Array<TypeAvisVo> {
    return this.typeAvisService.typeAvisSelections;
  }


  set typeAvisSelections(value: Array<TypeAvisVo>) {
    this.typeAvisService.typeAvisSelections = value;
  }

  get createTypeAvisDialog(): boolean {
    return this.typeAvisService.createTypeAvisDialog;
  }

  set createTypeAvisDialog(value: boolean) {
    this.typeAvisService.createTypeAvisDialog = value;
  }

  get editTypeAvisDialog(): boolean {
    return this.typeAvisService.editTypeAvisDialog;
  }

  set editTypeAvisDialog(value: boolean) {
    this.typeAvisService.editTypeAvisDialog = value;
  }

  get viewTypeAvisDialog(): boolean {
    return this.typeAvisService.viewTypeAvisDialog;
  }

  set viewTypeAvisDialog(value: boolean) {
    this.typeAvisService.viewTypeAvisDialog = value;
  }

  get searchTypeAvis(): TypeAvisVo {
    return this.typeAvisService.searchTypeAvis;
  }

  set searchTypeAvis(value: TypeAvisVo) {
    this.typeAvisService.searchTypeAvis = value;
  }




  ngOnInit(): void {
  }


}
