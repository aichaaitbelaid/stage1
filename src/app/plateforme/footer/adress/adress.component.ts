import { Component, OnInit } from '@angular/core';
import {MessageService} from "../../../Controller/service/Message.service";
import {MessageVo} from "../../../Controller/model/model/Message.model";
import {EtatMessageService} from "../../../Controller/service/EtatMessage.service";
import {EtatMessageVo} from "../../../Controller/model/model/EtatMessage.model";

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css']
})
export class AdressComponent implements OnInit {

  constructor(private messageService: MessageService , private etatMessageService: EtatMessageService) { }

  get messages(): Array<MessageVo> {
    return this.messageService.messages;
  }

  set messages(value: Array<MessageVo>) {
    this.messageService.messages = value;
  }

  get selectedMessage(): MessageVo {
    return this.messageService.selectedMessage;
  }

  set selectedMessage(value: MessageVo) {
    this.messageService.selectedMessage = value;
  }

  get messageSelections(): Array<MessageVo> {
    return this.messageService.messageSelections;
  }


  set messageSelections(value: Array<MessageVo>) {
    this.messageService.messageSelections = value;
  }

  get createMessageDialog(): boolean {
    return this.messageService.createMessageDialog;
  }

  set createMessageDialog(value: boolean) {
    this.messageService.createMessageDialog = value;
  }

  get editMessageDialog(): boolean {
    return this.messageService.editMessageDialog;
  }

  set editMessageDialog(value: boolean) {
    this.messageService.editMessageDialog = value;
  }

  get viewMessageDialog(): boolean {
    return this.messageService.viewMessageDialog;
  }

  set viewMessageDialog(value: boolean) {
    this.messageService.viewMessageDialog = value;
  }

  get searchMessage(): MessageVo {
    return this.messageService.searchMessage;
  }

  set searchMessage(value: MessageVo) {
    this.messageService.searchMessage = value;
  }

  //EtatMessage

  get etatMessages(): Array<EtatMessageVo> {
    return this.etatMessageService.etatMessages;
  }

  set etatMessages(value: Array<EtatMessageVo>) {
    this.etatMessageService.etatMessages = value;
  }

  get selectedEtatMessage(): EtatMessageVo {
    return this.etatMessageService.selectedEtatMessage;
  }

  set selectedEtatMessage(value: EtatMessageVo) {
    this.etatMessageService.selectedEtatMessage = value;
  }

  get etatMessageSelections(): Array<EtatMessageVo> {
    return this.etatMessageService.etatMessageSelections;
  }


  set etatMessageSelections(value: Array<EtatMessageVo>) {
    this.etatMessageService.etatMessageSelections = value;
  }

  get createEtatMessageDialog(): boolean {
    return this.etatMessageService.createEtatMessageDialog;
  }

  set createEtatMessageDialog(value: boolean) {
    this.etatMessageService.createEtatMessageDialog = value;
  }

  get editEtatMessageDialog(): boolean {
    return this.etatMessageService.editEtatMessageDialog;
  }

  set editEtatMessageDialog(value: boolean) {
    this.etatMessageService.editEtatMessageDialog = value;
  }

  get viewEtatMessageDialog(): boolean {
    return this.etatMessageService.viewEtatMessageDialog;
  }

  set viewEtatMessageDialog(value: boolean) {
    this.etatMessageService.viewEtatMessageDialog = value;
  }

  get searchEtatMessage(): EtatMessageVo {
    return this.etatMessageService.searchEtatMessage;
  }

  set searchEtatMessage(value: EtatMessageVo) {
    this.etatMessageService.searchEtatMessage = value;
  }

  ngOnInit(): void {
  }




}
