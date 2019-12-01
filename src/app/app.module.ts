import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { NavBlockComponent } from './components/nav-block/nav-block.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SidenavContentTopComponent } from './components/sidenav-content-top/sidenav-content-top.component';
import { SidenavContentBottomComponent } from './components/sidenav-content-bottom/sidenav-content-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavBlockComponent,
    SidenavContentTopComponent,
    SidenavContentBottomComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
