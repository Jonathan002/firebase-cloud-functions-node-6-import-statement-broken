import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  markdownStr = `
  ----

  # Markdown H1 Test 
  
  ## Markdown module has import <-- statement

  - test
  - a
  - ul
  - etc

  More text
  `;
}
