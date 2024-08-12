import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterContainer } from './container/footer.container';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FooterContainer],
  templateUrl: './footer.page.html',
  styleUrl: './footer.page.scss',
})
export class FooterPage {}
