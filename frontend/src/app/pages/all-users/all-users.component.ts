import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  public users:any=[]
  constructor(private global:GlobalService) { 
    this.global.allUsers().subscribe(res=>{
      this.users=res.data
      this.global.users=res.data
      console.log(this.global.users)
    })
  }

  ngOnInit(): void {
  }

}
