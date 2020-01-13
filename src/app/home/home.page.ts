import { Component } from '@angular/core';

// TODO: add an interface to represent a tab.
export interface HomePageTab {
  title: string; // The title of the tab in the tab bar
  icon: string; // The icon of the tab in the tab bar
  path: string; // The route's path of the tab to display
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tabs: HomePageTab[];

  constructor() {
    this.tabs = [
      { title: 'Events', icon: 'list', path: 'events'},
      { title: 'My events', icon: 'heart', path: 'favorites' },
      { title: 'Profil', icon: 'contact', path: 'profil'}
    ];
  }

}
