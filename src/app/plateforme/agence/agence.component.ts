import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EcoleService} from "../../Controller/service/Ecole.service";
import {EcoleVo} from "../../Controller/model/Ecole.model";
import {GerantService} from "../../Controller/service/Gerant.service";
import {GerantVo} from "../../Controller/model/Gerant.model";
import {CategoriePermisService} from "../../Controller/service/CategoriePermis.service";
import {CategoriePermisVo} from "../../Controller/model/CategoriePermis.model";
import {VehiculeService} from "../../Controller/service/Vehicule.service";
import {VehiculeVo} from "../../Controller/model/Vehicule.model";
import {TypeVehiculeService} from "../../Controller/service/TypeVehicule.service";
import {TypeVehiculeVo} from "../../Controller/model/TypeVehicule.model";
import {MarqueService} from "../../Controller/service/Marque.service";
import {MarqueVo} from "../../Controller/model/Marque.model";

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {


  constructor(private ecoleService: EcoleService , private gerantService: GerantService ,
              private categoriePermisService: CategoriePermisService, private vehiculeService: VehiculeService,
              private typeVehiculeService: TypeVehiculeService, private marqueService: MarqueService) {
  }


  get ecoles(): Array<EcoleVo> {
    return this.ecoleService.ecoles;
  }

  set ecoles(value: Array<EcoleVo>) {
    this.ecoleService.ecoles = value;
  }

  get selectedEcole(): EcoleVo {
    return this.ecoleService.selectedEcole;
  }

  set selectedEcole(value: EcoleVo) {
    this.ecoleService.selectedEcole = value;
  }

  get ecoleSelections(): Array<EcoleVo> {
    return this.ecoleService.ecoleSelections;
  }


  set ecoleSelections(value: Array<EcoleVo>) {
    this.ecoleService.ecoleSelections = value;
  }

  get createEcoleDialog(): boolean {
    return this.ecoleService.createEcoleDialog;
  }

  set createEcoleDialog(value: boolean) {
    this.ecoleService.createEcoleDialog = value;
  }

  get editEcoleDialog(): boolean {
    return this.ecoleService.editEcoleDialog;
  }

  set editEcoleDialog(value: boolean) {
    this.ecoleService.editEcoleDialog = value;
  }

  get viewEcoleDialog(): boolean {
    return this.ecoleService.viewEcoleDialog;
  }

  set viewEcoleDialog(value: boolean) {
    this.ecoleService.viewEcoleDialog = value;
  }

  get searchEcole(): EcoleVo {
    return this.ecoleService.searchEcole;
  }

  set searchEcole(value: EcoleVo) {
    this.ecoleService.searchEcole = value;
  }

  //Gerant
  get gerants(): Array<GerantVo> {
    return this.gerantService.gerants;
  }

  set gerants(value: Array<GerantVo>) {
    this.gerantService.gerants = value;
  }

  get selectedGerant(): GerantVo {
    return this.gerantService.selectedGerant;
  }

  set selectedGerant(value: GerantVo) {
    this.gerantService.selectedGerant = value;
  }

  get gerantSelections(): Array<GerantVo> {
    return this.gerantService.gerantSelections;
  }


  set gerantSelections(value: Array<GerantVo>) {
    this.gerantService.gerantSelections = value;
  }

  get createGerantDialog(): boolean {
    return this.gerantService.createGerantDialog;
  }

  set createGerantDialog(value: boolean) {
    this.gerantService.createGerantDialog = value;
  }

  get editGerantDialog(): boolean {
    return this.gerantService.editGerantDialog;
  }

  set editGerantDialog(value: boolean) {
    this.gerantService.editGerantDialog = value;
  }

  get viewGerantDialog(): boolean {
    return this.gerantService.viewGerantDialog;
  }

  set viewGerantDialog(value: boolean) {
    this.gerantService.viewGerantDialog = value;
  }

  get searchGerant(): GerantVo {
    return this.gerantService.searchGerant;
  }

  set searchGerant(value: GerantVo) {
    this.gerantService.searchGerant = value;
  }

//CategoriePermis

  get categoriePermiss(): Array<CategoriePermisVo> {
    return this.categoriePermisService.categoriePermiss;
  }

  set categoriePermiss(value: Array<CategoriePermisVo>) {
    this.categoriePermisService.categoriePermiss = value;
  }

  get selectedCategoriePermis(): CategoriePermisVo {
    return this.categoriePermisService.selectedCategoriePermis;
  }

  set selectedCategoriePermis(value: CategoriePermisVo) {
    this.categoriePermisService.selectedCategoriePermis = value;
  }

  get categoriePermisSelections(): Array<CategoriePermisVo> {
    return this.categoriePermisService.categoriePermisSelections;
  }


  set categoriePermisSelections(value: Array<CategoriePermisVo>) {
    this.categoriePermisService.categoriePermisSelections = value;
  }

  get createCategoriePermisDialog(): boolean {
    return this.categoriePermisService.createCategoriePermisDialog;
  }

  set createCategoriePermisDialog(value: boolean) {
    this.categoriePermisService.createCategoriePermisDialog = value;
  }

  get editCategoriePermisDialog(): boolean {
    return this.categoriePermisService.editCategoriePermisDialog;
  }

  set editCategoriePermisDialog(value: boolean) {
    this.categoriePermisService.editCategoriePermisDialog = value;
  }

  get viewCategoriePermisDialog(): boolean {
    return this.categoriePermisService.viewCategoriePermisDialog;
  }

  set viewCategoriePermisDialog(value: boolean) {
    this.categoriePermisService.viewCategoriePermisDialog = value;
  }

  get searchCategoriePermis(): CategoriePermisVo {
    return this.categoriePermisService.searchCategoriePermis;
  }

  set searchCategoriePermis(value: CategoriePermisVo) {
    this.categoriePermisService.searchCategoriePermis = value;
  }

  //Vehicule

  get vehicules(): Array<VehiculeVo> {
    return this.vehiculeService.vehicules;
  }

  set vehicules(value: Array<VehiculeVo>) {
    this.vehiculeService.vehicules = value;
  }

  get selectedVehicule(): VehiculeVo {
    return this.vehiculeService.selectedVehicule;
  }

  set selectedVehicule(value: VehiculeVo) {
    this.vehiculeService.selectedVehicule = value;
  }

  get vehiculeSelections(): Array<VehiculeVo> {
    return this.vehiculeService.vehiculeSelections;
  }


  set vehiculeSelections(value: Array<VehiculeVo>) {
    this.vehiculeService.vehiculeSelections = value;
  }

  get createVehiculeDialog(): boolean {
    return this.vehiculeService.createVehiculeDialog;
  }

  set createVehiculeDialog(value: boolean) {
    this.vehiculeService.createVehiculeDialog = value;
  }

  get editVehiculeDialog(): boolean {
    return this.vehiculeService.editVehiculeDialog;
  }

  set editVehiculeDialog(value: boolean) {
    this.vehiculeService.editVehiculeDialog = value;
  }

  get viewVehiculeDialog(): boolean {
    return this.vehiculeService.viewVehiculeDialog;
  }

  set viewVehiculeDialog(value: boolean) {
    this.vehiculeService.viewVehiculeDialog = value;
  }

  get searchVehicule(): VehiculeVo {
    return this.vehiculeService.searchVehicule;
  }

  set searchVehicule(value: VehiculeVo) {
    this.vehiculeService.searchVehicule = value;
  }

  //TypeVehicule

  get typeVehicules(): Array<TypeVehiculeVo> {
    return this.typeVehiculeService.typeVehicules;
  }

  set typeVehicules(value: Array<TypeVehiculeVo>) {
    this.typeVehiculeService.typeVehicules = value;
  }

  get selectedTypeVehicule(): TypeVehiculeVo {
    return this.typeVehiculeService.selectedTypeVehicule;
  }

  set selectedTypeVehicule(value: TypeVehiculeVo) {
    this.typeVehiculeService.selectedTypeVehicule = value;
  }

  get typeVehiculeSelections(): Array<TypeVehiculeVo> {
    return this.typeVehiculeService.typeVehiculeSelections;
  }


  set typeVehiculeSelections(value: Array<TypeVehiculeVo>) {
    this.typeVehiculeService.typeVehiculeSelections = value;
  }

  get createTypeVehiculeDialog(): boolean {
    return this.typeVehiculeService.createTypeVehiculeDialog;
  }

  set createTypeVehiculeDialog(value: boolean) {
    this.typeVehiculeService.createTypeVehiculeDialog = value;
  }

  get editTypeVehiculeDialog(): boolean {
    return this.typeVehiculeService.editTypeVehiculeDialog;
  }

  set editTypeVehiculeDialog(value: boolean) {
    this.typeVehiculeService.editTypeVehiculeDialog = value;
  }

  get viewTypeVehiculeDialog(): boolean {
    return this.typeVehiculeService.viewTypeVehiculeDialog;
  }

  set viewTypeVehiculeDialog(value: boolean) {
    this.typeVehiculeService.viewTypeVehiculeDialog = value;
  }

  get searchTypeVehicule(): TypeVehiculeVo {
    return this.typeVehiculeService.searchTypeVehicule;
  }

  set searchTypeVehicule(value: TypeVehiculeVo) {
    this.typeVehiculeService.searchTypeVehicule = value;
  }

  //Marque

  get marques(): Array<MarqueVo> {
    return this.marqueService.marques;
  }

  set marques(value: Array<MarqueVo>) {
    this.marqueService.marques = value;
  }

  get selectedMarque(): MarqueVo {
    return this.marqueService.selectedMarque;
  }

  set selectedMarque(value: MarqueVo) {
    this.marqueService.selectedMarque = value;
  }

  get marqueSelections(): Array<MarqueVo> {
    return this.marqueService.marqueSelections;
  }


  set marqueSelections(value: Array<MarqueVo>) {
    this.marqueService.marqueSelections = value;
  }

  get createMarqueDialog(): boolean {
    return this.marqueService.createMarqueDialog;
  }

  set createMarqueDialog(value: boolean) {
    this.marqueService.createMarqueDialog = value;
  }

  get editMarqueDialog(): boolean {
    return this.marqueService.editMarqueDialog;
  }

  set editMarqueDialog(value: boolean) {
    this.marqueService.editMarqueDialog = value;
  }

  get viewMarqueDialog(): boolean {
    return this.marqueService.viewMarqueDialog;
  }

  set viewMarqueDialog(value: boolean) {
    this.marqueService.viewMarqueDialog = value;
  }

  get searchMarque(): MarqueVo {
    return this.marqueService.searchMarque;
  }

  set searchMarque(value: MarqueVo) {
    this.marqueService.searchMarque = value;
  }


  ngOnInit(): void {
  }


}
