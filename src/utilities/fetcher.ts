import axios from "axios";

export default () => {
  const token = localStorage.getItem(
    `${process.env.REACT_APP_TOKEN_PREFIX}-token`
  )
    ? localStorage.getItem(`${process.env.REACT_APP_TOKEN_PREFIX}-token`)
    : "token";
  const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    timeout: 10000 * 15,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return axiosClient;
};
