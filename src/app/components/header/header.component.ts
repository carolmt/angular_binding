import { Component} from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { RouterLinkActive, RouterLink} from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TitleComponent, AvatarComponent, RouterLinkActive, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  pageTitle = 'Proyecto Api';

  userInfo = {
    image: 'https://github.com/carolmt.png',
    role: 'SALES'
  }

  constructor() {}

  onDataCheck(e: any) {
    console.log(e);
  }
}
