import './App.css';
import AllInfo from './components/Dashboard';
import { Router, Link } from '@reach/router';
import Info from './components/Info';
import CreateInfo from './components/Form';
import Edit from './components/Edit';


function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>
        <AllInfo path="/"></AllInfo>
        <Info path="/MERN_Exams/:id"></Info>
        <CreateInfo path="/MERN_Exams/create"></CreateInfo>
        <Edit path="MERN_Exams/update/:id"></Edit>
      </Router>
    </div>
  );
}

export default App;
