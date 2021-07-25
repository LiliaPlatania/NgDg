import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Header/navbar/navbar.component';
import { HeaderBackgroundComponent } from './Header/header-background/header-background.component';
import { ResultContainerComponent } from './Header/result-container/result-container.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'header-background', component: HeaderBackgroundComponent },
  { path: 'results-container', component: ResultContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
