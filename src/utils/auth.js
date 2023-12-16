import { checkResponse } from "./api";

export const baseUrl = "http://localhost:3001";

export const signin = ({email, password}) => {
    return fetch(`${baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    }).then((res) => {return checkResponse(res)});
  };


  export const register = ({ name, userName, password, email, avatar }) => {
    return fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, userName, password, email, avatar }),
    }).then((response) => {
      checkResponse(response);
    });
  };


  export const checkToken = (token) => {
    return fetch(`${baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then((res) => checkResponse(res));
  };