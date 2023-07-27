import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  public filmData: any;
  constructor(public _commonService: CommonService, private route: Router) {

  }
  ngOnInit(): void {
    this.getFilmsData()
  }

  public getFilmsData() {
    debugger
    var result = this._commonService.getFilms().subscribe({
      next: (val: any) => {
        this.filmData = val.results
      },
      error: (err: any) => {
        alert("error from server side")
      },
    });

  }
  onpropertyClick(item: any){
    this.route.navigate(['viewfilms',{ queryParams:item}])
  }
}
