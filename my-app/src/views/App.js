import logo from './logo.svg';
import './App.scss';
import ListToDo from './ToDo/ListToDo';
import Nav from './Nav/Nav';
import Home from './Home/Home';
// import AddToDo from './ToDo/AddToDo';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";




function App() {
  return (
    <>
      <Router>
        <div className="App">
          <header className="App-header">
            <Nav />
            <img src={logo} className="App-logo" alt="logo" />
            <Routes>
              <Route path="/" element={<Home />} >
              </Route>
              <Route path="/todo" element={<ListToDo />}>
              </Route>
            </Routes>

          </header>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />

        </div>
      </Router>

    </>

  );
}

export default App;
