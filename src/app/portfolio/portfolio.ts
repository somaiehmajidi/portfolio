import { Component, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { data } from './projects.data'

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Portfolio implements OnInit{
  items = signal([...data])

  ngOnInit(): void {
    
  }
}
