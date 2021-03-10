// import React from 'react';
import axios from "axios";

const url = "https://gotrucker.herokuapp.com/"

export const GET = (customUrl) => {
  // used as a proxy server to enable cors for third-party api
  return axios.get(`${customUrl}`);
};

export const GETENDPOINT = (endpoint, options) => {
  if (typeof options === undefined) {
    // console.log(options)
    return axios.get(`${url}${endpoint}`);
  } else {
    return axios.get(`${url}${endpoint}`, options);
  }
};

// export const GETENDPOINT = (endpoint) => {
//   if(typeof )
// }

export const POST = (endpoint, data) => {
  // const promise = new Promise((resolve, reject) => {}
  return axios.post(`${url}${endpoint}`, data);
};