import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WatchPage } from './watch';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    WatchPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WatchPage),
  ],
})
export class WatchPageModule {}
