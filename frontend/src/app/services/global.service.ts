import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  users:any=[]
  constructor(private http:HttpClient) { }
  allUsers():Observable<any>{
    return this.http.get("http://localhost:3000/api/user/showAll")
  }

  user(obj:any):Observable<any>{
    return this.http.post("http://localhost:3000/api/user/singleUser",obj)
  }
  userTransactions(obj:any):Observable<any>{
    return this.http.post("http://localhost:3000/api/transactions/userTransactions",obj)
  }
  allTransactions():Observable<any>{
    return this.http.get("http://localhost:3000/api/transactions/allTransactions")
  }
  makeTransaction(obj:any):Observable<any>{
    return this.http.put("http://localhost:3000/api/user/transefer",obj)
  }
}
