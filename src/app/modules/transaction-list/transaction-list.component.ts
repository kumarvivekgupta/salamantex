import {Component, OnInit} from '@angular/core';
import {SalamantexApi} from '../core/services/salamantex.api';
import {TransactionModel} from '../core/models/transaction-model';

@Component({
  selector   : 'app-trans-list',
  templateUrl: './transaction-list.component.html',
  styleUrls  : ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transList: TransactionModel[];
  displayedColumns: string[] = ['id', 'balance', 'to', 'from', 'type', 'state'];

  constructor(private salamantexService: SalamantexApi) {

  }

  ngOnInit() {
    this.salamantexService.getTransJSON().subscribe((r) => {
      this.transList = r;

    });
  }
}
