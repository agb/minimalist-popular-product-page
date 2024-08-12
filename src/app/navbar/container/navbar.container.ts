import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAvatarPresentational } from '../presentational/avatar/navbar-avatar.presentational';
import { NavbarLogoPresentational } from '../presentational/logo/navbar-logo.presentational';
import { environment } from '../../../environment.dev';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-navbar-container',
  standalone: true,
  imports: [CommonModule, NavbarAvatarPresentational, NavbarLogoPresentational],
  templateUrl: './navbar.container.html',
  styleUrl: './navbar.container.scss',
})
export class NavbarContainer {
  navbarService = inject(NavbarService);
  loginUser = this.navbarService.getLoginUser();

  getLogoImgSourceUrl(): string {
    const logoPath = 'assets/images/logo.png';

    return `${environment.baseUrl}/${logoPath}`;
  }
}
