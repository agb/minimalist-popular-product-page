import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environment.dev';

@Component({
  selector: 'app-navbar-logo-presentational',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-logo.presentational.html',
  styleUrl: './navbar-logo.presentational.scss',
})
export class NavbarLogoPresentational {
  @Input() logoImgSrc: string | undefined;

  getHomepageUrl() {
    return environment.baseUrl;
  }
}
