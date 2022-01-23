import React, { useEffect } from 'react';
import { loadUser } from './data/reducers/auth';

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import ViewCahier from "./components/pages/Cahier/ViewCahier";
import ViewAnnee from "./components/pages/annee/ViewAnnee";
import ListCahier from "./components/pages/Prof";
import Annee from "./components/pages/annee";
import Connexion from "./components/pages/Login";
import LoginEtudiant from "./components/pages/login/Loginetudiant";
import ModifiermdpProf from "./components/pages/login/modifiermdpprof";
import ModifiermdpEtud from "./components/pages/login/modifiermdpetud";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import ViewEtudiant from "./components/users/Etudiants/ViewEtudiant";
import ViewEnseignants from "./components/users/Prof/ViewEnseignants";
import EditUser from "./components/users/EditUser";
import EditEnseignant from "./components/users/EditEnseignant";
import EditEtudiant from "./components/users/EditEtudiant";
import User from "./components/users/User";

import CahierDetails from "./components/pages/Cahier/CahierDetails";
import ValidationParProf from "./components/pages/Cahier/ValidationParProf";
import ListValidation from "./components/pages/Cahier/ListValidation";
import AnneeDetails from "./components/pages/annee/AnneeDetails";
import ProfDetails from "./components/users/Prof/ProfDetails";
import EtudtDetails from "./components/users/Etudiants/EtudtDetails";
import { ToastContainer } from "react-toastify";
import setAuthToken from './helpers/setAuthToken';
import store from './data/store';
import { loadEnseignant } from './data/reducers/authprof';
import { loadEtudiant } from './data/reducers/authetud';
import Enseignant from './components/users/Prof';
import AddEnseignants from './components/users/Prof/AddEnseignants';
import Etudiant from './components/users/Etudiant';
import CahierByEtud from './components/pages/Cahier/Cahierbyetud';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App(props) {
  useEffect(() => {
    console.log('app')
   store.dispatch(loadUser()) 
   store.dispatch(loadEnseignant())
   store.dispatch(loadEtudiant())
  }, [])
  return (
    <Router>
      <div className="App">
        <Navbar />
<ToastContainer/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={ViewCahier} />
          <Route exact path="/connexion" component={Connexion} />
          <Route exact path="/listcahier" component={ListCahier} />
          <Route exact path="/listvalidation" component={ListValidation} />
          <Route exact path="/annee/" component={ViewAnnee} />
          <Route exact path="/users/add" component={ViewEtudiant} />
          <Route exact path="/utilisateurs/AjouteEnseignant" component={AddEnseignants} />
          <Route exact path="/users/Viewprof" component={ViewEnseignants} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/enseignant/edit/:id" component={EditEnseignant} />
          <Route exact path="/etudiant/edit/:id" component={EditEtudiant} />
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/etudiant/:id" component={Etudiant} />
          <Route exact path="/enseignant/:id" component={Enseignant} />
          <Route exact path="/tasks/:taskId">
            <CahierDetails />
          </Route>
          <Route exact path="/loginetudiant">
            <LoginEtudiant />
          </Route>
          <Route exact path="/modifiermdpprof">
            <ModifiermdpProf />
          </Route>
          <Route exact path="/modifiermdpetud">
            <ModifiermdpEtud />
          </Route>
          <Route exact path="/cahierbyetud">
            <CahierByEtud />
          </Route>
          <Route exact path="/validationparprof">
            <ValidationParProf />
          </Route>
          <Route exact path="/etudiants/:etudiantId">
            <EtudtDetails />
          </Route>
          <Route exact path="/ensgts/:ensgtId">
            <ProfDetails />
          </Route>
          <Route exact path="/annees/:anneeId">
            <AnneeDetails />
          </Route>
          
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
