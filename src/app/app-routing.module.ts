import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadsComponent } from './downloads/downloads.component';
import { FriendComponent } from './friends/friend/friend.component';
import { FriendsComponent } from './friends/friends.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/home'},
  {path:'home',component:HomeComponent},
  {path:'downloads',component:DownloadsComponent},
  {path:'friends',
  component:FriendsComponent},
  {path:'friends',children:[
    {path:'friend/:friendname',component:FriendComponent}
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
