// import React from 'react';
import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const GET = (customUrl) => {
  // used as a proxy server to enable cors for third-party api
  return axios.get(`${customUrl}`);
};

export const GETENDPOINT = (endpoint, options) => {
  if (typeof options === undefined) {
    return axios.get(`${url}${endpoint}`);
  } else {
    return axios.get(`${url}${endpoint}`, options);
  }
};

export const POST = (endpoint, data) => {
  return axios.post(`${url}${endpoint}`, data);
};
