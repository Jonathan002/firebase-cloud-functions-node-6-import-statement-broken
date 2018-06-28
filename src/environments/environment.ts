import { BASE_ENV } from "./environment-master";

export const ENVIRONMENT_VALUE = (<any>Object).assign(BASE_ENV, {
  production: false,
});
