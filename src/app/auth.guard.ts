import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { FriendsComponent } from './module/friends/friends.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private friends:FriendsComponent,private route:Router){}
  canActivate(): boolean {
    if(this.friends.names.length>10){
      return true;
    }
    else{
        this.route.navigate(['/home']);
        return false;
    }
    
  }
  
  
}
