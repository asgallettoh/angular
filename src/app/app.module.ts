import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';
import { TempComponent } from './temp/temp.component'

const routes:Routes = [
  {path: '', component: RentalComponent},
  {path: 'temp', component: TempComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RentalComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
