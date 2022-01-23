import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import loginImg from "./login.svg";
import "./style.scss";
import { login } from '../../../data/reducers/authprof';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'

const LoginProf = ({ login, isAuth, isLoading, enseignant }) => {
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

  if (isAuth && enseignant) {
    const { nom, role } = enseignant;
    console.log(enseignant)
    toast.success(`welcome ${nom}`);
    if (role === 1) return <Redirect to='/about' />;
    if (!role === 1) return <Redirect to='/Home' />;
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
          <Link to={`/modifiermdpprof`}>
          <h5 class="card-header">Modifier mot de passe</h5>
            </Link>
        </div>
        </form>
      </div>
    );
  };
  const mapToStateProps = (state) => ({
    isAuth: state.authprof.isAuthenticated,
    isLoading: state.authprof.loading,
    enseignant: state.authprof.enseignant,
  });
  export default connect(mapToStateProps, { login })(LoginProf);

