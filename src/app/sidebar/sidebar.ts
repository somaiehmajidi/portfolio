import { Component } from '@angular/core';
import { CursorHoverDirective } from '../shared/hover.directive';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [CursorHoverDirective, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  
}
