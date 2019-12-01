import { Component, EventEmitter, Output } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { TransformActions } from '../../shared/nav-config.model';

@Component({
  selector: 'app-sidenav-content-top',
  templateUrl: '../content/content.component.html',
  styleUrls: ['../content/content.component.scss'],
})
export class SidenavContentTopComponent extends ContentComponent {
  @Output() heightChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    super();
  }

  changeSize(dimensions) {
    if (dimensions.width) {
      this.self ? this.changeProportions(dimensions) :
        this.sizeChange.emit(dimensions.width);
    }
    if (dimensions.height) {
      this.wrapperHeight = `${dimensions.height}%`;
      if (dimensions.height === 260) {
        this.navConfig.up.action = TransformActions.expandHeight;
      }
      if (dimensions.height === 100) {
        this.navConfig.up.action = TransformActions.collapseHeight;
        this.navConfig.down.action = TransformActions.maximizeHeight;
      }
      if (dimensions.height === 40) {
        this.navConfig.down.action = TransformActions.expandHeight;
      }
      this.navConfig.up.disabled = dimensions.height === 40;
      this.navConfig.down.disabled = dimensions.height === 260;
      this.heightChanged.emit(true);
    }
  }

}
