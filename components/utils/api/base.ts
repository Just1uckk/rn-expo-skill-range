import API from "./api";
import { BaseInterface, RegisterInterface } from "./apiInterfaces";

const createBody = (params: any) => {
  const body = {
    params: [params],
  };
  return body;
};

const base: BaseInterface = {
  register: (params: RegisterInterface) =>
    API.doPost("/User/static/register", createBody(params)),
};

export default base;
