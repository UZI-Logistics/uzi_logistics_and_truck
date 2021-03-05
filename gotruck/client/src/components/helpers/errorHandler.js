import Swal from "sweetalert2";

export const handleError = err => {
  console.log(err.response);
  if (err.response) {
    if (err.response.status === 401) {
      Swal.fire({
        title: "Sorry 😞",
        text: "Your session has expired. ",
        type: "error"
      });
    } else {
      Swal.fire({
        title: "Sorry 😞",
        text: err.response.data.message,
        type: "error"
      });
    }
  } else {
    Swal.fire({
      title: "Sorry 😞",
      text: "Network error. Please check your internet",
      type: "error"
    });
    // toast.error(`Network error. Please check your internet`, {
    //   position: toast.POSITION.TOP_RIGHT
    // });
  }

  return Promise.reject(err.response);
};
