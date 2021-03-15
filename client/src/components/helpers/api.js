// import React from 'react';
import axios from "axios";

const baseUrl = "https://gotrucker.herokuapp.com/api/";

export const GET = (customUrl) => {
  // used as a proxy server to enable cors for third-party api
  return axios.get(`${customUrl}`);
};

export const GETENDPOINT = (endpoint, options) => {
  if (typeof options === undefined) {
    // console.log(options)
    //return axios.get(`${url}${endpoint}`);
  } else {
    //  return axios.get(`${url}${endpoint}`, options);
  }
};


export const POST = (endpoint, data) => {
  // const promise = new Promise((resolve, reject) => {}
  //return axios.post(`${url}${endpoint}`, data);
};

export const httpGetNoToken = async (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}${url}`, {
        //headers: { Authorization: `${localStorage.api_token}`},
      })
      .then(({ data }) => {
        return resolve(data.response);
      })
      .catch((error) => {
        return reject(error.response);
      });
  });
};

export const httpPostNoToken = async (url, fd) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}${url}`, fd, {
        //headers: { Authorization: `${localStorage.api_token}`},
      })
      .then(({ data }) => {
        return resolve(data.response);
      })
      .catch((error) => {
        console.log("here>>", error.response);
        let error_msg = {
          message: "Something went wrong. Please check and make sure everything is okay and try again",
        };
        if (
          error &&
          error.response &&
          error.response.data &&
          error.response.data.response
        ) {
          error_msg = {
            message: Array.isArray(error.response.data.response.message)
              ? error.response.data.response.message[0]
              : error.response.data.response.message,
          };
        }
        return reject(error_msg);
      });
  });
};

// export const httpPostAuctionTruck = async (url, fetchdata) => {
//   return new Promise((resolve, reject) => {
//     axios.post(`${baseUrl}${url}`, fetchdata, {

//     }).then(({ data }) => {
//       return resolve(data.response);
//     })
//       .catch((error) => {
//         console.log("show??", error.response);
//         let error_msg = {
//           message: ""
//         }
//     })

//   })
// }