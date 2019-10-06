import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SalamantexApi} from '../core/services/salamantex.api';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector   : 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls  : ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  userForm: FormGroup;
  userId: number;

  constructor(private salamantexService: SalamantexApi, private route: ActivatedRoute) {
    this.userId = +this.route.snapshot.params['id'];
    console.log(this.userId);
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      name      : new FormControl(''),
      email     : new FormControl('', Validators.email),
      desc      : new FormControl(''),
      max       : new FormControl(''),
      bitBalance: new FormControl(''),
      ethBalance: new FormControl('')
    });
    this.salamantexService.getJSON().subscribe((r) => {
      r.forEach(res => {
        if (res.user.id === this.userId) {
          this.userForm.setValue({
            name      : res.user.name,
            email     : res.user.email,
            desc      : res.user.desc,
            max       : res.user.max,
            bitBalance: res.user.wallet[0].bal,
            ethBalance: res.user.wallet[1].bal
          });
        }
      });
    });

  }

  onSubmit() {
    // API calling of form and submit user detail
  }

}
