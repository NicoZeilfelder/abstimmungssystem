import {Component, OnDestroy, OnInit} from '@angular/core';
import {User, UserService} from "../../services/user.service";
import {Subscription} from "rxjs";
import {Questionnaire, Survey, SurveyService} from "../../services/survey.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription[] = [];
  public user: User;
  public surveys: Survey[];
  public selectedQuestionnaire: Questionnaire;

  constructor(private readonly userService: UserService,
              private readonly surveyService: SurveyService) {
  }

  ngOnInit(): void {
    this.subscriptions.push(this.userService.getCurrentUser().subscribe((user: User) => {
      this.user = user;
    }));

    this.subscriptions.push(this.surveyService.getSurveys().subscribe((surveys: Survey[]) => {
      this.surveys = surveys;
    }));
  }

  onQuestionnaireSelection(questionnaire: Questionnaire): void {
    this.selectedQuestionnaire = questionnaire;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
