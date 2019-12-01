import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DefaultNavConfig, TransformActions } from './shared/nav-config.model';
import { DimensionService } from './shared/services/dimension.service';
import * as L from 'leaflet';
import { MapOptions } from 'leaflet';
import { Map1Options, Map2Options } from './shared/map.options';
import { SideNavConfig, SideNavConfig1 } from './shared/nav.configs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('contentSide', {read: ElementRef, static: true}) contentSide: ElementRef;
  mainConfig = DefaultNavConfig;
  sideNavConfig = SideNavConfig;
  sideNavConfig1 = SideNavConfig1;
  options: MapOptions = Map1Options;
  options1: MapOptions = Map2Options;
  map1: L.Map = null;
  map2: L.Map = null;

  constructor(public dimensionService: DimensionService) {
  }

  map1Ready(map1: L.Map) {
    this.map1 = map1;
    map1.addControl(L.control.zoom({position: 'bottomright'}));
  }

  map2Ready(map2: L.Map) {
    this.map2 = map2;
    map2.addControl(L.control.zoom({position: 'bottomright'}));
  }

  onMapSizeChanged() {
    setTimeout(() => {
      this.map1.invalidateSize();
      this.map2.invalidateSize();
    }, 500);
  }

  ngOnInit() {
    this.dimensionService.frameWidths.subscribe(widths => this.handleButtons(widths));
  }

  handleButtons(widths) {
    if (!this.sideNavConfig || !this.sideNavConfig1 || !this.mainConfig) {
      return;
    }
    const cLeft = this.sideNavConfig.left;
    const c1Left = this.sideNavConfig1.left;
    const cRight = this.sideNavConfig.right;
    const c1Right = this.sideNavConfig1.right;
    const mCLeft = this.mainConfig.left;
    const mCRight = this.mainConfig.right;

    if (widths.main === 5) {
      mCRight.action = TransformActions.resetMainWidth;

      cRight.action = c1Right.action = TransformActions.resetSideWidth;
    }
    if (widths.main === 95) {
      mCLeft.action = TransformActions.resetMainWidth;

      cLeft.action = c1Left.action = TransformActions.resetSideWidth;
    }
    if (widths.main === 70) {
      mCLeft.action = TransformActions.collapseMainWidth;
      mCRight.action = TransformActions.expandMainWidth;

      cLeft.action = c1Left.action = TransformActions.expandSideWidth;
      cRight.action = c1Right.action = TransformActions.collapseSideWidth;
    }

    cLeft.disabled = c1Left.disabled = mCLeft.disabled = widths.side === 95;
    cRight.disabled = c1Right.disabled = mCRight.disabled = widths.main === 95;
  }

  changeSideWidth(width) {
    if (!width) {
      return;
    }
    this.dimensionService.frameWidths.next({
      side: width,
      main: 100 - width,
    });
    this.onMapSizeChanged();
    this.contentSide.nativeElement.style.width = `${width}%`;
  }
}
