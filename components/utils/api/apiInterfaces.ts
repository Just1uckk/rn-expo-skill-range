import { AxiosResponse } from "axios";

export interface ApiInterface {
  doGet(
    endpoint: string,
    headers?: any,
    api?: string,
  ): Promise<AxiosResponse<any, any>>;
  doPatch(
    endpoint: string,
    data: any,
    headers?: any,
    api?: string,
  ): Promise<AxiosResponse<any, any>>;
  doPost(
    endpoint: string,
    data: any,
    headers?: any,
    api?: string,
  ): Promise<AxiosResponse<any, any>>;
  doPut(
    endpoint: string,
    data: any,
    headers?: any,
    api?: string,
  ): Promise<AxiosResponse<any, any>>;
  base?: BaseInterface;
}

export interface RegisterInterface {
  user: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    birthday: string;
  };
  shouldValidate: boolean;
  validateOnlyUnique: boolean;
}

export interface BaseInterface {
  register: (params: RegisterInterface) => Promise<any>;
}
