import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  constructor(private readonly http: HttpClient) {
  }

  getSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>('../../assets/surveys.json');
  }
}

export interface Survey {
  id: string;
  title: string;
  questionnaires: Questionnaire[];
}

export interface Questionnaire{
  id: string;
  title: string;
  questions: Question[];
}

export interface Question {
  question: string;
  reply: boolean;
}
