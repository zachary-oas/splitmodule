import { IAction, IActionConfig } from './action.model';

export const TransformActions: IActionConfig = {
  collapseSideWidth: {
    width: 5,
  },
  collapseSideHeight: {
    width: 100,
    height: 40,
  },
  collapseMainWidth: {
    width: 5,
  },
  collapseHeight: {
    height: 40,
  },
  expand: {
    width: 95,
    height: 100,
  },
  expandSideWidth: {
    width: 95,
  },
  expandMainWidth: {
    width: 95,
  },
  reset: {
    width: 100,
    height: 100,
  },
  resetMain: {
    width: 70,
    height: 100,
  },
  resetMainWidth: {
    width: 70,
  },
  resetSide: {
    width: 30,
    height: 100,
  },
  resetSideWidth: {
    width: 30,
  },
  expandHeight: {
    height: 100,
  },
  maximizeHeight: {
    height: 260,
  },
};

export interface INavConfig {
  right: {
    action: IAction,
    disabled: boolean,
  };
  left: {
    action: IAction,
    disabled: boolean,
  };
  up: {
    action: IAction,
    disabled: boolean,
  };
  down: {
    action: IAction,
    disabled: boolean,
  };
  default: {
    action: IAction,
    disabled: boolean,
  };
}

export const DefaultNavConfig: INavConfig = {
  right: {
    action: TransformActions.expand,
    disabled: false,
  },
  left: {
    action: TransformActions.collapseMainWidth,
    disabled: true,
  },
  up: {
    action: TransformActions.collapseHeight,
    disabled: false,
  },
  down: {
    action: TransformActions.expandHeight,
    disabled: true,
  },
  default: {
    action: TransformActions.resetMain,
    disabled: false,
  },
};
