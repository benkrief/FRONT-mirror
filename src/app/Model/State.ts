import {StateEnum} from "../Enum/state.enum";

export interface State<T> {
  state: StateEnum;
  appData?: T;
  error?: string;
}
