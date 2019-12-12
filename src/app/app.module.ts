import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTreeModule, MatIconModule, MatButtonModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FirstComponent } from './app-components/first/first.component';
import { SecondComponent } from './app-components/second/second.component';
import { CommunicationBetweenCompService } from './services/communication-between-comp.service';


// import { MaterialModule } from './angular.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    MatTreeModule,
    MatIconModule,
    FormsModule
  ],
  providers: [CommunicationBetweenCompService],
  bootstrap: [AppComponent]
})
export class AppModule { }
