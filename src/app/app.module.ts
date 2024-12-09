import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableAgendaComponent } from './table-agenda/table-agenda.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AgendaComponent } from './agenda/agenda.component';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TableAgendaComponent,
    NavBarComponent,
    AgendaComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
