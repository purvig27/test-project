import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-view-films',
  templateUrl: './view-films.component.html',
  styleUrls: ['./view-films.component.scss']
})
export class ViewFilmsComponent {
  public viewFilm: any;
  public getFilmsData: any;
  public peopleInfo: any
  public spaceship: any;
  constructor(private route: Router,private router:ActivatedRoute, public _commonService: CommonService){

    this.router.paramMap.subscribe((params)=>{
      debugger
      console.log(params)
      console.log(params.get('queryParams'))
      this.viewFilm = params.get('queryParams')
    })
    this.getFilmDetails();
  }
  getFilmDetails(){
    var result = this._commonService.getFilmsById(this.viewFilm).subscribe({
      next: (val: any) => {
        this.getFilmsData = val
        if(this.getFilmsData){
          this.getFilmsPeopleDetails();
          this.getSpaceShipDetails();
        }
      },
      error: (err: any) => {
        alert("error from server side")
      },
    });
  }

  getFilmsPeopleDetails(){
    this.peopleInfo = [];
    for(let i =0; i < this.getFilmsData.characters.length; i++){
      var peopleUrl = this.getFilmsData.characters[i]
      this._commonService.getPeopleById(peopleUrl).subscribe({
        next:(val: any) => {
          this.peopleInfo.push(val)
         
        }
      })
    }
    console.log(this.peopleInfo);
  }

  
  getSpaceShipDetails(){
    this.spaceship = [];
    for(let i =0; i < this.getFilmsData.starships.length; i++){
      var spaceUrl = this.getFilmsData.starships[i]
      this._commonService.getSpaceShipById(spaceUrl).subscribe({
        next:(val: any) => {
          this.spaceship.push(val)
         
        }
      })
    }
    console.log(this.spaceship);
  }
}
