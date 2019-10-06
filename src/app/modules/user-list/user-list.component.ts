import {Component, OnInit} from '@angular/core';
import {SalamantexApi} from '../core/services/salamantex.api';
import {UserModel} from '../core/models/user-model';

@Component({
  selector   : 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'wallet', 'max', 'action'];
  userList: UserModel[]      = [];

  constructor(private salamantexService: SalamantexApi) {

  }

  ngOnInit() {
    this.salamantexService.getJSON().subscribe((r) => {
      r.forEach((res) => {
        console.log(res.user);
        this.userList.push(res.user);
      });
      // console.log(this.userList);
    });
  }
}
