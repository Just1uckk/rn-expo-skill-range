import API from "./api";

interface RegisterInterface {
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
