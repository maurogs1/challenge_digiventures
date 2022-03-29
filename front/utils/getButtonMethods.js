import axios from "axios";
import Router from 'next/router'
export const getButtonMethods = (
  data,
  set_response_error,
  set_state,
  selectOptionsList
) => {
  if (data.method === "register") {
    return register(data, set_response_error, set_state, selectOptionsList);
  }
  if (data.method === "login") {
    return login(data, set_response_error, set_state);
  }
};

const register = async (user,set_response_error,setRegistroExitoso,selectOptionsList) => {
  
  if (user.password !== user.password_confirmation) {
    return set_response_error("Password does not match");
  }

  if (user.country.toLowerCase() === "other" && user.custom_country.toLowerCase().trim() !== "") {
    if (selectOptionsList.includes(user.custom_country.toLowerCase().trim())) {
      return set_response_error("Country already exists in the list");
    }
  }
  if ( user.country.toLowerCase() === "other" && user.custom_country.toLowerCase().trim() === "") {
    return set_response_error( "Should write a valid country or select one from the list");
  }
  
  
  axios.post(`users/register`, {
      fullname: user.fullname,
      username: user.username,
      email: user.email,
      password: user.password,
      country: user.country === 'other' ? user.custom_country : user.country 
    }).then(function ({ data }) {
      if (data?.response) {
        set_response_error("");
        setRegistroExitoso(
          "Register successful"
        );
        setTimeout(() => {
          window.open('/login', '_self');
          setRegistroExitoso("");
        }, 2000);
      }
      if (data?.error) {
        set_response_error(data.error);
        setRegistroExitoso("");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

const login = async (user, set_response_error, setUsername) => {
  axios
    .post(`/users/login`, {
      username: user.username,
      password: user.password,
    })
    .then(function ({ data }) {
      if (data?.response) {
        set_response_error("");
        setUsername(data.response.username);
        Router.push('/home')

      }
      if (data?.error) {
        set_response_error(data.error);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

const validate_conditions = (data) => {
  data.validations.forEach((key, index) => {});
};


