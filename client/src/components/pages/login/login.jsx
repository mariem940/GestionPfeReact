import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import loginImg from "./login.svg";
import "./style.scss";
import { login } from '../../../data/reducers/auth';
import { Redirect } from 'react-router-dom';

const Login = ({ login, isAuth, isLoading, user }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = data;

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  if (isAuth && user) {
    const { nom, role } = user;
    toast.success(`welcome ${nom}`);
    console.log(user)
        if (role === 0) return <Redirect to='/' />;
    if (role === 1) return <Redirect to='/ListCahier' />;
  }

  
    return (
      <div className="base-container" >
         <form
        onSubmit={onSubmit}
      >
        <div className="header">Connexion</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="email" name="email" value={email} placeholder="username" onChange={handleChange('email')} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input type="password" name="password" value={password} placeholder="password" onChange={handleChange('password')} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Connecter
          </button>
        </div>
        </form>
      </div>
    );
  };
  const mapToStateProps = (state) => ({
    isAuth: state.auth.isAuthenticated,
    isLoading: state.auth.loading,
    user: state.auth.user,
  });
  export default connect(mapToStateProps, { login })(Login);

