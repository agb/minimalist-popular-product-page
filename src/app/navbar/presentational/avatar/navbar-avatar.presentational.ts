import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-navbar-avatar-presentational',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './navbar-avatar.presentational.html',
  styleUrl: './navbar-avatar.presentational.scss',
})
export class NavbarAvatarPresentational {
  @Input() fullname: string | undefined;
  @Input() userProfilePictureImgSrcUrl: string | undefined;
}
