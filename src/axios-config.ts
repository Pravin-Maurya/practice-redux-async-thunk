import axios from "axios";

const Axios = axios.create({
  baseURL: "http://35.154.200.9/testing/",
  headers: {
    "Content-type": "application/json",
  },
});
export default Axios;
