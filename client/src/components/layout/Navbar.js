import React from "react";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../buttons/button.component';
import { logout } from '../../data/reducers/auth';
const Navbar = (logout, isAuth) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Gestion PFE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Admin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/annee">
                Annees
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                Cahiers des charges
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/listcahier" >
                PFE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/listvalidation" >
              Validation
              </NavLink>
            </li>
          </ul>
        </div>

        <Link className="btn btn-outline-light" to="/loginetudiant">Connexion Etudiants</Link>
        {!isAuth && ( 
        <Button
        title='Connexion'
        action={ () => {
         logout();
       }}
      />
        )}
        {isAuth && (
          <>
          <Link className="btn btn-outline-light" to="/connexion">Déconnexion</Link>
          </>
      )}

        </div>
    </nav>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { logout })(withRouter(Navbar));

