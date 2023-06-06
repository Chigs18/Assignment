
import './App.css';
import '../node_modules/bootstrap5/src/css/bootstrap.min.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUsers from './users/AddUsers';
import EditUsers from './users/EditUser';
import User from './users/User';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/contact' Component={Contact} />
          <Route exact path='/users/add' Component={AddUsers} />
          <Route exact path='/users/edit/:id' Component={EditUsers} />
          <Route exact path='/users/:id' Component={User} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
