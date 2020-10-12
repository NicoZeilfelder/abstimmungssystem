import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfileComponent } from './container/profile/profile.component';
import { QuestionaireComponent } from './container/questionaire/questionaire.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProfileComponent,
    QuestionaireComponent,
    QuestionnaireComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
