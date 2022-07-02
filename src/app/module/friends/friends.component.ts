import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private router:Router) { }

  public names:string[]=["ravi","teja","raju","ramu","sai","ramesh","vamsi","krishna","babu","chandu"];

  ngOnInit(): void {
    
  }
  // getFriendsLength():number{
  //   console.log(this.names.length);
  //   return this.names.length;
  // }
  

}
