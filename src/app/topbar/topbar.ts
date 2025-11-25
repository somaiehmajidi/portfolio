import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-topbar',
  imports: [RouterLink],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Topbar {
  hamburgerStatus = signal(true)

  toggleMobileMenu() {
    const temp = this.hamburgerStatus()
    this.hamburgerStatus.set(!temp)
  }

}
