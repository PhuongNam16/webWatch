import React from 'react';
import { useDispatch } from 'react-redux';
import { AUTHENTICATION } from '../../../store/reducers/authenReducer';
import { getToken } from '../../../utils/util';
import './login.css';
const Login = () => {
  const dispatch = useDispatch();
  const onClickLogin=() =>{
      dispatch(AUTHENTICATION({username: "xaopaibun", password: "vanquy"}));
      // if(getToken()){
      //   alert("login succsess")
      // }
      // else{
      //   alert("login thất bại")
      // }
  }
  return (
    <div id="login">
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
                <h3 className="text-center text-info">Login</h3>
                <div className="form-group">
                  <label htmlFor="username" className="text-info">
                    Username:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text-info">
                    Password:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="password"
                    id="password"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="remember-me" className="text-info">
                    <span>Remember me</span>
                    &nbsp;
                    <span>
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                      />
                    </span>
                  </label>
                  <br />
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={onClickLogin}
                  >
                    Login
                  </button>
                  <hr className="my-4" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
