import { Component} from '@angular/core';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  pageTitle = 'Proyecto Api';

  constructor() {}

  onDataCheck(e: any) {
    console.log(e);
  }
}
