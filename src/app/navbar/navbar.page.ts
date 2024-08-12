import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarContainer } from './container/navbar.container';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,NavbarContainer],
  templateUrl: './navbar.page.html',
  styleUrl: './navbar.page.scss',
})
export class NavbarPage {}
