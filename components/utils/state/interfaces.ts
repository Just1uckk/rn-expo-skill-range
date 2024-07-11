import { Dispatch, SetStateAction } from "react";

export interface GlobalStateInterface {
  user: any;
}

export interface GlobalContextInterface {
  state: GlobalStateInterface;
  setState: Dispatch<SetStateAction<GlobalStateInterface>>;
}
