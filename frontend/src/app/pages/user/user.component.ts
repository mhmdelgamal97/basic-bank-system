import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id:any
  user:any
  sentTransactions:any=[]
  recievedTransactions:any=[]

  showSentTable:boolean=true
  showRecivedTable:boolean=false

  transData =new FormGroup({
    rec:new FormControl("",[Validators.required,Validators.email]),
    amount:new FormControl("",Validators.required)
  })

  constructor(private _activated:ActivatedRoute, private global:GlobalService,private router:Router,private toastr: ToastrService) {
    this.id=this._activated.snapshot.paramMap.get('id')
    this.global.user({"id":this.id}).subscribe(res=>{
      this.user=res.data
      this.global.userTransactions({"email":this.user.email}).subscribe(res=>{
        this.sentTransactions=res.sentTrans
        this.recievedTransactions=res.recievedTrans
      })
    })
   }
   get rec(){return this.transData.get('rec')}
   get amount(){return this.transData.get('amount')}


  ngOnInit(): void {

  }
  showSentTrans(){
    this.showSentTable=true
    this.showRecivedTable=false


  }
  showRecTrans(){
    this.showRecivedTable=true
    this.showSentTable=false
  }
  handleSubmit(){
    this.transData.value.sender=this.user.email
    this.global.makeTransaction(this.transData.value).subscribe(res=>{
      this.toastr.success("Money Transfered")
      this.router.navigateByUrl("/all")
    })
    
  }

}
