export interface IAction {
  width?: number;
  height?: number;
}
export interface IActionConfig {
  [key: string]: IAction;
}
