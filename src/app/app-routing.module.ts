import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadsComponent } from './downloads/downloads.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/home'},
  {path:'home',component:HomeComponent},
  {path:'downloads',component:DownloadsComponent},
  {path: 'friends',  
  
  loadChildren: () => import('./module/friends/friends.module')
  .then(m => m.FriendsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
