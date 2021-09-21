import React from 'react';
import {useDispatch} from 'react-redux';
import {AUTHENTICATION} from '../../../store/reducers/authenReducer';
import {getToken} from '../../../utils/util';
import Header from '../layouts/Header';
import './login.css';
const Login = () => {
  const dispatch = useDispatch ();

  const onClickLogin = () => {
    dispatch (AUTHENTICATION ({username: 'xaopaibun', password: 'vanquy'}));
    // if(getToken()){
    //   alert("login succsess")
    // }
    // else{
    //   alert("login thất bại")
    // }
  };
  return (
    <div>
      <div id="login">
      <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto py-4 px-0">
              <div className="card p-0">
                <div className="card-title text-center">
                  <h5 className="mt-5">LOGIN</h5>
                  {' '}
                  <small className="para">
                    Login to your cool account below.
                  </small>
                </div>
                <div className="signup">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                    />
                  </div>
                  {' '}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onClickLogin}
                  >
                    Login
                  </button>
                  <div className="row">
                    <div className="col-6 col-sm-6">
                      {' '}<a href="#">
                        <p className="text-left pt-2 ml-1">Forgot password?</p>
                      </a>{' '}
                    </div>
                    <div className="col-6 col-sm-6">
                      {' '}<a href="#">
                        <p className="text-right pt-2 mr-1">Sign Up Now</p>
                      </a>{' '}
                    </div>
                  </div>
                  {' '}
                  <span className="text-center">Or</span>
                  <hr  width="100%" align="center" />
                  <span className="text-center pt-3">Login Using</span>
                  <div className="row">
                    <div className="d-flex mx-auto pt-1 pb-3 justify-content-center">
                      {' '}
                      <a href="#"><i className="btn-social fab fa-facebook" /></a>
                      {' '}
                      <a href="#"><i className="btn-social fab fa-twitter" /></a>
                      {' '}
                      <a href="#"><i className="btn-social fab fa-linkedin" /></a>
                      {' '}
                    </div>
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
