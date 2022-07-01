import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendComponent } from 'src/app/friends/friend/friend.component';
import { FriendsComponent } from 'src/app/friends/friends.component';



const routes: Routes = [
  {path:'',
  component:FriendsComponent},
  {path:'',children:[
    {path:'friend/:friendname',component:FriendComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendsRoutingModule { }
