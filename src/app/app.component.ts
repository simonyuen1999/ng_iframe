import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-ifr';

  data = { foo: 'bar' };
  iframeUrl = 'https://www.bing.com';

  @ViewChild('iframe') iframe!: ElementRef<HTMLIFrameElement>;

  constructor() {
    this.iframe = {} as ElementRef<HTMLIFrameElement>;
  }

  onClick() {
    // Passing data to iframe
    this.iframe.nativeElement.src = `${this.iframeUrl}?data=${JSON.stringify(this.data)}`;
  }
}
