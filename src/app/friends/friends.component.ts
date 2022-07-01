import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private router:Router) { }

  names:string[]=["ravi","teja","raju","ramu","sai","ramesh","vamsi","krishna","babu","chandu"];

  ngOnInit(): void {
  }
  

}
