import { CanActivateFn, Router } from '@angular/router';
import {Injectable, inject} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
export const authGuard: CanActivateFn = (route, state) => {

  const currentMenu=route.url[0].path;
  const router = inject(Router);
  const service = inject(AuthService);
  const localStorage=inject(LocalStorageService);
  const sessionStorage=inject(SessionStorageService);

  type JwtToken = {
    id_token: string;
  };
  
  if(service.haveAccess()||service.isLoggedIn())
  {
    return true;
  
} else {
  alert('access denied');
  router.navigate(['']);
  return false;
}


};