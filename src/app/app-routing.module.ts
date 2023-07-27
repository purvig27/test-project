import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './Components/films/films.component';
import { ViewFilmsComponent } from './Components/view-films/view-films.component';


const routes: Routes = [
  { path: '', component: FilmsComponent },
  {path: 'viewfilms', component: ViewFilmsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
