import {Component, OnInit} from '@angular/core';
import {SalamantexApi} from '../core/services/salamantex.api';
import {ActivatedRoute} from '@angular/router';
import {UserModel} from '../core/models/user-model';

@Component({
  selector   : 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls  : ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId: number;
  data: UserModel;

  constructor(private salamantexService: SalamantexApi, private route: ActivatedRoute) {
    this.userId = +this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.salamantexService.getJSON().subscribe((r) => {
      r.forEach(res => {
        if (res.user.id === this.userId) {
          this.data = res.user;
        }
      });
    });
  }
}
