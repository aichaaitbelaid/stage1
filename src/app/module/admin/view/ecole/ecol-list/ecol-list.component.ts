import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {EcoleService} from "../../../../../Controller/service/Ecole.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSort} from "@angular/material/sort";
import {EcoleVo} from "../../../../../Controller/model/Ecole.model";
import {EcolAddComponent} from "../ecol-add/ecol-add.component";

@Component({
  selector: 'app-ecol-list',
  templateUrl: './ecol-list.component.html',
  styleUrls: ['./ecol-list.component.css']
})
export class EcolListComponent implements OnInit {


  ngOnInit(): void {

    this.all();

  }

  displayedColumns: string[] = ['id', 'nom', 'reference',  'action'];
  dataSource: MatTableDataSource<EcoleVo>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: EcoleService, private dialog: MatDialog) {

  }

  all() {
    return this.service.findAll().subscribe(
      res => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error => {
        console.log(error);
      }
    )
  }

  add() {
    this.dialog.open(EcolAddComponent, {
      width: '40%',
      height: '60%'
    }).afterClosed().subscribe(valu => {
        this.all();

      }
    );
  }

  refresh() {
    window.location.reload();
  }

  editAgent(row: EcoleVo) {
    this.dialog.open(EcolAddComponent, {
      width: '40%',
      height: '60%',
      data: row
    }).afterClosed().subscribe(valu => {
        this.all();
      }
    );
  }

  remove(reference: string) {
    return this.service.delete(reference).subscribe(
      data => {
        console.log(data);
        this.all();
      }, error => {
        console.log(error);
      }
    );
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
