import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { FriendComponent } from 'src/app/module/friends/friend/friend.component';
import { FriendsComponent } from 'src/app/module/friends/friends.component';



const routes: Routes = [
  {path:'',
  component:FriendsComponent,canActivate:[AuthGuard]},
  {path:'',children:[
    {path:'friend/:friendname',component:FriendComponent,canActivate:[AuthGuard]}
  ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendsRoutingModule { }
