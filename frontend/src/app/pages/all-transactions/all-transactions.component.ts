import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.css']
})
export class AllTransactionsComponent implements OnInit {
  transactions:any=[]
  constructor(private global:GlobalService) {
    this.global.allTransactions().subscribe(res=>{
      this.transactions=res.data
    })
   }

  ngOnInit(): void {
  }

}
