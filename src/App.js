import React from "react";
import './App.css';
import AddAppointments from './Components/AddAppointments';
import SearchAppointments from './Components/SearchAppointments';
import ListAppointments from './Components/ListAppointments';

function App() {
  return (
    <main className="page bg-white" id="petratings">
    <div className="container">
      <div className="row">
        <div className="col-md-12 bg-white">
          <div className="container">
           <AddAppointments />
            <SearchAppointments />
            <ListAppointments />
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}

export default App;
