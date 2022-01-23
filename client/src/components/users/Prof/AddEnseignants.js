import React, { useState } from "react"
import ViewEnseignants from "./ViewEnseignants"
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { register } from '../../../data/reducers/authprof';
import { Redirect } from 'react-router-dom';

const AddEnseignants = ({ register, isAuth, enseignant }) => {
  const [data, setData] = useState({
    nom: '',
    prenom: '',
    email: '',
    cin:'',
    garade:'',
    password: '',
    
  });

  const { nom, prenom, email, cin, garade, password } = data;

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
  
    if (!nom || !prenom || !email || !cin || !garade || !password){
      toast.error('Please fill all fields');
    } else {
      register({nom, prenom, email, cin, garade, password})
    }
      
    
  };


  if (isAuth && enseignant) {
    const { nom, role } = enseignant
    toast.success(`welcome ${nom}`)
    if(role === 1) return <Redirect to='/'/>
    if(!role === 1) return <Redirect to='/dashboard/admin'/>
  }

  return (
    <div className="container">
      <br></br>
      <form
        onSubmit={onSubmit}
      >
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Ajoute Porf</h2>
        
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Entrer Votre nom"
              name="nom"
              value={nom}
              onChange={handleChange('nom')} required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Entrer Votre Prenom"
              name="prenom"
              value={prenom}
              onChange={handleChange('prenom')} required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Entrer Votre E-mail "
              name="email"
              value={email}
              onChange={handleChange('email')} required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Entrer Votre CIN"
              name="cin"
              value={cin}
              onChange={handleChange('cin')} required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Entrer Votre Garade"
              name="garade"
              value={garade}
              onChange={handleChange('garade')} required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Entrer Votre password"
              name="password"
              value={password}
              onChange={handleChange('password')} required
            />
          </div>
          <button className="btn btn-primary btn-block"  type="submit">Ajouter</button>
     
      </div>
      </form>
    </div>
  );
}

const mapToStateProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
  //isLoading: state.auth.loading,
  enseignant: state.auth.enseignant,
});
export default connect(mapToStateProps, { register })(AddEnseignants);