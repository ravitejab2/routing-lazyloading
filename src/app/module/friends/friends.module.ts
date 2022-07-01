import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsComponent } from 'src/app/friends/friends.component';
import { FriendComponent } from 'src/app/friends/friend/friend.component';



@NgModule({
  declarations: [
    FriendsComponent,
    FriendComponent
    
  ],
  imports: [
    CommonModule,
    FriendsRoutingModule,
    RouterModule
  ]
})
export class FriendsModule { }
