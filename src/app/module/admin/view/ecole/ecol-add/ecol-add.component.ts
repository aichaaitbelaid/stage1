import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EcoleVo} from "../../../../../Controller/model/Ecole.model";
import {EcoleService} from "../../../../../Controller/service/Ecole.service";

@Component({
  selector: 'app-ecol-add',
  templateUrl: './ecol-add.component.html',
  styleUrls: ['./ecol-add.component.css']
})
export class EcolAddComponent implements OnInit {

  actionBttn = 'ajouter';
  constructor(private formBuilder: FormBuilder, private ecolService: EcoleService,
              @Inject(MAT_DIALOG_DATA) public editData: EcoleVo ,private dialogRef: MatDialogRef<EcolAddComponent>) { }

  ngOnInit(): void {
    if (this.editData) {
      this.selectedEcole.reference=this.editData.reference;
      this.selectedEcole.nom = this.editData.nom;
      this.actionBttn = 'modifier';
    }
  }
  get selectedEcole(){
    return this.ecolService.selectedEcole;

  }

  set selectedEcole(value: EcoleVo) {
    this.ecolService.selectedEcole = value;
  }

  save() {
    if (!this.editData) {
      this.ecolService.save(this.selectedEcole).subscribe(data => {
        console.log(data);
      }, error => {
        console.log('eroor', error);
      });
      this.dialogRef.close('save');
      this.selectedEcole = null;
    }else {
      this.updateEcole();

    }
  }
  annuller(){
    this.selectedEcole= null;
  }
  updateEcole(){
    this.ecolService.edit(this.selectedEcole)
      .subscribe({
        next: (res) => {
          this.dialogRef.close('update');
        }, error: (err) => {
          console.log(err);
        }
      });

  }



}
