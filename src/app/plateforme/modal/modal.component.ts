import { Component, OnInit } from '@angular/core';
import {JourService} from "../../Controller/service/Jour.service";
import {JourVo} from "../../Controller/model/Jour.model";
import {PlanningItemService} from "../../Controller/service/PlanningItem.service";
import {PlanningItemVo} from "../../Controller/model/PlanningItem.model";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private jourService: JourService, private planningItemService: PlanningItemService) { }

  get jours(): Array<JourVo> {
    return this.jourService.jours;
  }

  set jours(value: Array<JourVo>) {
    this.jourService.jours = value;
  }

  get selectedJour(): JourVo {
    return this.jourService.selectedJour;
  }

  set selectedJour(value: JourVo) {
    this.jourService.selectedJour = value;
  }

  get jourSelections(): Array<JourVo> {
    return this.jourService.jourSelections;
  }


  set jourSelections(value: Array<JourVo>) {
    this.jourService.jourSelections = value;
  }

  get createJourDialog(): boolean {
    return this.jourService.createJourDialog;
  }

  set createJourDialog(value: boolean) {
    this.jourService.createJourDialog = value;
  }

  get editJourDialog(): boolean {
    return this.jourService.editJourDialog;
  }

  set editJourDialog(value: boolean) {
    this.jourService.editJourDialog = value;
  }

  get viewJourDialog(): boolean {
    return this.jourService.viewJourDialog;
  }

  set viewJourDialog(value: boolean) {
    this.jourService.viewJourDialog = value;
  }

  get searchJour(): JourVo {
    return this.jourService.searchJour;
  }

  set searchJour(value: JourVo) {
    this.jourService.searchJour = value;
  }

  //PlanningItem
  get planningItems(): Array<PlanningItemVo> {
    return this.planningItemService.planningItems;
  }

  set planningItems(value: Array<PlanningItemVo>) {
    this.planningItemService.planningItems = value;
  }

  get selectedPlanningItem(): PlanningItemVo {
    return this.planningItemService.selectedPlanningItem;
  }

  set selectedPlanningItem(value: PlanningItemVo) {
    this.planningItemService.selectedPlanningItem = value;
  }

  get planningItemSelections(): Array<PlanningItemVo> {
    return this.planningItemService.planningItemSelections;
  }


  set planningItemSelections(value: Array<PlanningItemVo>) {
    this.planningItemService.planningItemSelections = value;
  }

  get createPlanningItemDialog(): boolean {
    return this.planningItemService.createPlanningItemDialog;
  }

  set createPlanningItemDialog(value: boolean) {
    this.planningItemService.createPlanningItemDialog = value;
  }

  get editPlanningItemDialog(): boolean {
    return this.planningItemService.editPlanningItemDialog;
  }

  set editPlanningItemDialog(value: boolean) {
    this.planningItemService.editPlanningItemDialog = value;
  }

  get viewPlanningItemDialog(): boolean {
    return this.planningItemService.viewPlanningItemDialog;
  }

  set viewPlanningItemDialog(value: boolean) {
    this.planningItemService.viewPlanningItemDialog = value;
  }

  get searchPlanningItem(): PlanningItemVo {
    return this.planningItemService.searchPlanningItem;
  }

  set searchPlanningItem(value: PlanningItemVo) {
    this.planningItemService.searchPlanningItem = value;
  }



  ngOnInit(): void {
  }

}
