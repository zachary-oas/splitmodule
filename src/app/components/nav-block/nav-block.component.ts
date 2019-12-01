import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DefaultNavConfig, INavConfig } from '../../shared/nav-config.model';

@Component({
  selector: 'app-nav-block',
  templateUrl: './nav-block.component.html',
  styleUrls: ['./nav-block.component.scss'],
})

export class NavBlockComponent {
  @Output() sizeChange: EventEmitter<object> = new EventEmitter<object>();

  _config: INavConfig = DefaultNavConfig;

  get config() {
    return this._config;
  }

  @Input() set config(config) {
    this._config = config;
  }

  transformSize(dimensions: object) {
    this.sizeChange.emit(dimensions);
  }

}
