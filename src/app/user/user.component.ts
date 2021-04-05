import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IUsers } from '../users';
import { UsersService } from '../users.service';
import * as UserActions from '../users.actions';
import * as fromUser from '../user.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users

  constructor(private userService: UsersService,
    private store: Store) { }

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers():void {
    // this.userService.getUsers().subscribe(
    //   data => this.users = data
    // )
    this.store.dispatch(new UserActions.LoadUserss());
    this.store.pipe(select(fromUser.getUsers)).subscribe(
      data => this.users = data
    )
  }
}
