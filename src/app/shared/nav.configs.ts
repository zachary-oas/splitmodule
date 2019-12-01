import { TransformActions } from './nav-config.model';

export const SideNavConfig = {
  right: {
    action: TransformActions.collapseSideWidth,
    disabled: false,
  },
  left: {
    action: TransformActions.expandSideWidth,
    disabled: false,
  },
  up: {
    action: TransformActions.collapseHeight,
    disabled: false,
  },
  down: {
    action: TransformActions.maximizeHeight,
    disabled: false,
  },
  default: {
    action: TransformActions.resetSide,
    disabled: false,
  },
};
export const SideNavConfig1 = {
  right: {
    action: TransformActions.collapseSideWidth,
    disabled: false,
  },
  left: {
    action: TransformActions.expandSideWidth,
    disabled: false,
  },
  up: {
    action: TransformActions.maximizeHeight,
    disabled: false,
  },
  down: {
    action: TransformActions.collapseHeight,
    disabled: false,
  },
  default: {
    action: TransformActions.resetSide,
    disabled: false,
  },
};
