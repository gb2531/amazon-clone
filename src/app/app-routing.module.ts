import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  {path:"home" , component:HomeComponent},
  {path:"header", component:HeaderComponent},
  {path:"footer", component:FooterComponent},
{path:"", redirectTo:"home", pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
