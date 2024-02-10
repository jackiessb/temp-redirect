import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'temp-redirect';

  pageWidth = window.innerWidth;

  showSmallerBeatDetailsPage() {
    if (this.pageWidth <= 576) {
      return true;
    } else {
      return false;
    }
  }
}
