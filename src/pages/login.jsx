import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const db = [
  {
    email: "parvat@gmail.com",
    password: "123456",
    role: "student",
  },
  {
    email: "neelu@gmail.com",
    password: "123456",
    role: "admin",
  },
];

function Login() {
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let flag = false;
    db.map((detail) => {
      if (
        detail.email === e.target[0].value &&
        detail.password == e.target[1].value
      ) {
        if (detail.role == "student") {
          Swal.fire({
            title: "Login Successfully",
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000, // 2 second delay
          }).then(() => {
            navigate("/student");
          });
          flag = true;
        } else if (detail.role == "admin") {
           Swal.fire({
             title: "Login Successfully",
             icon: "success",
             toast: true,
             position: "top-end",
             showConfirmButton: false,
             timer: 2000, // 2 second delay
           }).then(() => {
             navigate("/admin");
           });
          flag = true;
        } else {
          return;
        }
      }
    });
    if (flag) {
      return;
    } else {
      Swal.fire({
        title: "Wrong Credentials",
        text: `Your have Entered Wrong Text `,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }
  return (
    <form className="container border w-50 p-3 " onSubmit={handleSubmit}>
      <div class="form-group">
        <label className="ps-2">Email</label>
        <input
          type="email"
          class="form-control m-2"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label className="ps-2">Password</label>
        <input
          type="password"
          class="form-control m-2"
          placeholder="Password"
        />
      </div>

      <button type="submit" class="btn btn-success  col-2 offset-5">
        Submit
      </button>
    </form>
  );
}

export default Login;
