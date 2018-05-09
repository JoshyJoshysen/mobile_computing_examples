import { Component } from '@angular/core';
import { IonicPage } from "ionic-angular";

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'LocationPage';
  tab2Root = 'WatchPage';
  tab3Root = 'CameraPage';
  tab4Root = 'ArPage';

  constructor() {

  }
}
