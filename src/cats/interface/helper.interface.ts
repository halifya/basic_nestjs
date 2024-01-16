import { Interface } from "readline";

export interface StandardRespInterface {
  success: Boolean;
  message: String;
  data: Array<Object>;
}