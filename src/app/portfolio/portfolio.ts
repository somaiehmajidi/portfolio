import { Component, signal, OnInit, ChangeDetectionStrategy, computed } from '@angular/core';
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
  keyword = signal<string | null>('')
  
  selectedItems =  computed(() => {
    const sq = this.keyword()
    if(!sq) return this.items()
    return this.items().filter(x => x.tag === sq )
  })

  ngOnInit(): void {
    
  }

  filter(type: string | null) {
    this.keyword.set(type)
  }
}
