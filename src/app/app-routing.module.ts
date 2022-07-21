import { HomeExplainComponent } from './home-explain/home-explain.component';
import { Homecomponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: Homecomponent
  },
  {
    path: 'about',
    component: HomeExplainComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
