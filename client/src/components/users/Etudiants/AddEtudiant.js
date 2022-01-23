import React, { useState } from "react"
import ViewEtudiant from "./ViewEtudiant"
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { register } from '../../../data/reducers/authetud';
import { Redirect } from 'react-router-dom';
import Etudiant from "./Etudiant";


const AddEtudiant = ({ register, isAuth, etudiant }) => {
  const [data, setData] = useState({
    nomutilisateur: '',
    email: '',
    cin:'',
    numcarte:'',
    password: '',
    
  });

  const { nomutilisateur, email, cin, numcarte, password } = data;

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
  
    if (!nomutilisateur || !email || !cin || !numcarte || !password){
      toast.error('Please fill all fields');
    } else {
      register({nomutilisateur, email, cin, numcarte, password})
    }
      
    
  };


  if (isAuth && etudiant) {
    const { nomutilisateur, role } = etudiant
    toast.success(`welcome ${nomutilisateur}`)
    if(role === 2) return <Redirect to='/'/>
    if(!role === 2) return <Redirect to='/dashboard/admin'/>
  }

  return (
    <div className="container">
       <form
        onSubmit={onSubmit}
      >
      <br></br>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Ajoute Etudiants</h2>
        
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Entrer Votre nom d'utilisateur"
              name="nomutilisateur"
              value={nomutilisateur}
              onChange={handleChange('nomutilisateur')} required
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
              placeholder="Entrer Votre Num Carte"
              name="numcarte"
              value={numcarte}
              onChange={handleChange('numcarte')} required
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
          <button className="btn btn-primary btn-block" type="submit" >Ajouter</button>
     
      </div>
      </form>
    </div>
  );
}

const mapToStateProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
  //isLoading: state.auth.loading,
  etudiant: state.auth.etudiant,
});
export default connect(mapToStateProps, { register })(AddEtudiant);