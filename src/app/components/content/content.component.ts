import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { DefaultNavConfig, INavConfig } from '../../shared/nav-config.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  @HostBinding('style.width') wrapperWidth;
  @HostBinding('style.height') wrapperHeight;
  @Input() self = true;
  @Output() sizeChange: EventEmitter<object | number> = new EventEmitter<object | number>();

  _navConfig: INavConfig = DefaultNavConfig;

  get navConfig() {
    return this._navConfig;
  }

  @Input() set navConfig(config) {
    if (!config) {
      return;
    }
    this._navConfig = config;
  }

  changeSize(dimensions) {
    if (dimensions.width) {
      this.self ? this.changeProportions(dimensions) :
        this.sizeChange.emit(dimensions.width);
    }
    if (dimensions.height) {
      this.wrapperHeight = `${dimensions.height}%`;
      this.navConfig.down.disabled = dimensions.height !== 40;
      this.navConfig.up.disabled = dimensions.height === 40;
    }
  }

  changeProportions(dimensions) {
    this.wrapperWidth = `${dimensions.width}%`;
    this.sizeChange.emit(100 - dimensions.width);
  }
}
