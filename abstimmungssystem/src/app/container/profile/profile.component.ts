import {Component, OnDestroy, OnInit} from '@angular/core';
import {User, UserService} from "../../services/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription[] = [];
  public user: User;

  constructor(private readonly userService: UserService) {
  }

  ngOnInit(): void {
    this.subscriptions.push(this.userService.getCurrentUser().subscribe((user: User) => {
      this.user = user;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
