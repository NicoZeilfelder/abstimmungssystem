import {Component, Input, OnInit} from '@angular/core';
import {Questionnaire} from "../../services/survey.service";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  @Input() questionnaire: Questionnaire

  constructor() { }

  ngOnInit(): void {

  }

}
