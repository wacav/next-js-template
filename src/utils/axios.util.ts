import config from "@config";
import Axios from "axios";

const axios = Axios.create({
  baseURL: config.baseURL,
  headers: { Pragma: "no-cache" },
});

export default axios;
