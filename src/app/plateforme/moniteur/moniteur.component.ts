import { Component, OnInit } from '@angular/core';
import {MoniteurPratiqueService} from "../../Controller/service/MoniteurPratique.service";
import {MoniteurTheoriqueService} from "../../Controller/service/MoniteurTheorique.service";
import {GenderService} from "../../Controller/service/Gender.service";
import {MoniteurPratiqueVo} from "../../Controller/model/MoniteurPratique.model";
import {MoniteurTheoriqueVo} from "../../Controller/model/MoniteurTheorique.model";
import {GenderVo} from "../../Controller/model/Gender.model";

@Component({
  selector: 'app-moniteur',
  templateUrl: './moniteur.component.html',
  styleUrls: ['./moniteur.component.css']
})
export class MoniteurComponent implements OnInit {

  constructor(private moniteurPratiqueService: MoniteurPratiqueService,
              private moniteurTheoriqueService: MoniteurTheoriqueService,
              private genderService: GenderService) { }


  get moniteurPratiques(): Array<MoniteurPratiqueVo> {
    return this.moniteurPratiqueService.moniteurPratiques;
  }

  set moniteurPratiques(value: Array<MoniteurPratiqueVo>) {
    this.moniteurPratiqueService.moniteurPratiques = value;
  }

  get selectedMoniteurPratique(): MoniteurPratiqueVo {
    return this.moniteurPratiqueService.selectedMoniteurPratique;
  }

  set selectedMoniteurPratique(value: MoniteurPratiqueVo) {
    this.moniteurPratiqueService.selectedMoniteurPratique = value;
  }

  get moniteurPratiqueSelections(): Array<MoniteurPratiqueVo> {
    return this.moniteurPratiqueService.moniteurPratiqueSelections;
  }


  set moniteurPratiqueSelections(value: Array<MoniteurPratiqueVo>) {
    this.moniteurPratiqueService.moniteurPratiqueSelections = value;
  }

  get createMoniteurPratiqueDialog(): boolean {
    return this.moniteurPratiqueService.createMoniteurPratiqueDialog;
  }

  set createMoniteurPratiqueDialog(value: boolean) {
    this.moniteurPratiqueService.createMoniteurPratiqueDialog = value;
  }

  get editMoniteurPratiqueDialog(): boolean {
    return this.moniteurPratiqueService.editMoniteurPratiqueDialog;
  }

  set editMoniteurPratiqueDialog(value: boolean) {
    this.moniteurPratiqueService.editMoniteurPratiqueDialog = value;
  }

  get viewMoniteurPratiqueDialog(): boolean {
    return this.moniteurPratiqueService.viewMoniteurPratiqueDialog;
  }

  set viewMoniteurPratiqueDialog(value: boolean) {
    this.moniteurPratiqueService.viewMoniteurPratiqueDialog = value;
  }

  get searchMoniteurPratique(): MoniteurPratiqueVo {
    return this.moniteurPratiqueService.searchMoniteurPratique;
  }

  set searchMoniteurPratique(value: MoniteurPratiqueVo) {
    this.moniteurPratiqueService.searchMoniteurPratique = value;
  }


  //MoniteurTheorique

  get moniteurTheoriques(): Array<MoniteurTheoriqueVo> {
    return this.moniteurTheoriqueService.moniteurTheoriques;
  }

  set moniteurTheoriques(value: Array<MoniteurTheoriqueVo>) {
    this.moniteurTheoriqueService.moniteurTheoriques = value;
  }

  get selectedMoniteurTheorique(): MoniteurTheoriqueVo {
    return this.moniteurTheoriqueService.selectedMoniteurTheorique;
  }

  set selectedMoniteurTheorique(value: MoniteurTheoriqueVo) {
    this.moniteurTheoriqueService.selectedMoniteurTheorique = value;
  }

  get moniteurTheoriqueSelections(): Array<MoniteurTheoriqueVo> {
    return this.moniteurTheoriqueService.moniteurTheoriqueSelections;
  }


  set moniteurTheoriqueSelections(value: Array<MoniteurTheoriqueVo>) {
    this.moniteurTheoriqueService.moniteurTheoriqueSelections = value;
  }

  get createMoniteurTheoriqueDialog(): boolean {
    return this.moniteurTheoriqueService.createMoniteurTheoriqueDialog;
  }

  set createMoniteurTheoriqueDialog(value: boolean) {
    this.moniteurTheoriqueService.createMoniteurTheoriqueDialog = value;
  }

  get editMoniteurTheoriqueDialog(): boolean {
    return this.moniteurTheoriqueService.editMoniteurTheoriqueDialog;
  }

  set editMoniteurTheoriqueDialog(value: boolean) {
    this.moniteurTheoriqueService.editMoniteurTheoriqueDialog = value;
  }

  get viewMoniteurTheoriqueDialog(): boolean {
    return this.moniteurTheoriqueService.viewMoniteurTheoriqueDialog;
  }

  set viewMoniteurTheoriqueDialog(value: boolean) {
    this.moniteurTheoriqueService.viewMoniteurTheoriqueDialog = value;
  }

  get searchMoniteurTheorique(): MoniteurTheoriqueVo {
    return this.moniteurTheoriqueService.searchMoniteurTheorique;
  }

  set searchMoniteurTheorique(value: MoniteurTheoriqueVo) {
    this.moniteurTheoriqueService.searchMoniteurTheorique = value;
  }

  //Gender

  get genders(): Array<GenderVo> {
    return this.genderService.genders;
  }

  set genders(value: Array<GenderVo>) {
    this.genderService.genders = value;
  }

  get selectedGender(): GenderVo {
    return this.genderService.selectedGender;
  }

  set selectedGender(value: GenderVo) {
    this.genderService.selectedGender = value;
  }

  get genderSelections(): Array<GenderVo> {
    return this.genderService.genderSelections;
  }


  set genderSelections(value: Array<GenderVo>) {
    this.genderService.genderSelections = value;
  }

  get createGenderDialog(): boolean {
    return this.genderService.createGenderDialog;
  }

  set createGenderDialog(value: boolean) {
    this.genderService.createGenderDialog = value;
  }

  get editGenderDialog(): boolean {
    return this.genderService.editGenderDialog;
  }

  set editGenderDialog(value: boolean) {
    this.genderService.editGenderDialog = value;
  }

  get viewGenderDialog(): boolean {
    return this.genderService.viewGenderDialog;
  }

  set viewGenderDialog(value: boolean) {
    this.genderService.viewGenderDialog = value;
  }

  get searchGender(): GenderVo {
    return this.genderService.searchGender;
  }

  set searchGender(value: GenderVo) {
    this.genderService.searchGender = value;
  }


  ngOnInit(): void {
  }

}
