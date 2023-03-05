import React from "react";
import "../../css/style.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className="login-form-bg ">
        <div className="container ">
          <div className="row justify-content-center my-5">
            <div className="col-xl-6">
              <div className="form-input-content">
                <div className="card login-form mb-0">
                  <div className="card-body pt-5">
                    <a className="text-center" href="index.html">
                      {" "}
                      <h4>CRM Login</h4>
                    </a>
                    <form className="mt-5 mb-5 login-input">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                      <button className="btn login-form__btn submit w-100">
                        Sign In
                      </button>
                    </form>
                    <p className="mt-5 login-form__footer">
                      Dont have account? {""}
                      <Link to="/signin">
                        Sign Up {""} {""}
                      </Link>
                      now
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
