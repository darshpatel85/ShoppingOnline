const BASE_URL = 'https://gr8tsolutions.com/llc/public/api';

export const login = (email, password) => {
  var formdata = new FormData();
  formdata.append('password', password);
  formdata.append('email', email);

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  return fetch(`${BASE_URL}/auth/login`, requestOptions);
};

export const register = data => {
  var formdata = new FormData();
  let dt = new Date();
  formdata.append('name', `${data.title} ${data.fname} ${data.lname}`);
  formdata.append('password', data.password);
  formdata.append('email', data.email);
  formdata.append('date', dt.toLocaleString());

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  return fetch(`${BASE_URL}/auth/register`, requestOptions);
};
