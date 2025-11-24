import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit, OnDestroy{
  
  @ViewChild('homeSection') homeSection!: ElementRef<HTMLElement>

  ngAfterViewInit(): void {
    // this.homeSection.nativeElement.classList.add('active')
  }

  ngOnDestroy(): void {
    // this.homeSection.nativeElement.classList.remove('active')
  }
}
