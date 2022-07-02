import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  name!:any;
  ngOnInit(): void {
    this.name= this.route.snapshot.paramMap.get('friendname');
  }

}
