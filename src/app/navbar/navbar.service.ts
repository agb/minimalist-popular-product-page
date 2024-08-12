import { Injectable } from '@angular/core';
import { loginUser } from './dto/login-user.dto';
import { environment } from '../../environment.dev';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  getLoginUser(): loginUser {
    const loginUser: loginUser = {
      fullname: 'Ali Bektash',
      profilePictureImgSourceUrl: `${environment.baseUrl}/assets/images/avatars/ali.png`,
    };

    return loginUser;
  }
}
