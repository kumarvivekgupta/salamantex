import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {users} from '../../../../assets/mock-users';

@Injectable()
export class SalamantexApi {
  constructor(private http: HttpClient) {
    // this.getJSON().subscribe(data => {
    //   console.log(data);
    // });
  }

  public getJSON(): Observable<any> {
    return of(users);
  }
}
