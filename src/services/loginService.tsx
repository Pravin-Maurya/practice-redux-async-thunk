import axios from "../axios-config";
const googleLogin = (payload) => {
  return axios.post("user/sign-in-google", payload);
};
const register = (payload) => {
  return axios.post("user/signUp", payload);
};

const login = (payload) => {
  return axios.post("user/signIn", payload);
};
const LoginService = { googleLogin, register, login };
export default LoginService;
