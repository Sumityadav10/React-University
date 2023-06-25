import "./App.css";
import React, { useState } from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./Abouts";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Routes, Route} from "react-router-dom";
import Footer from "./Footer";
import Courses from "./Courses";
import Plan from "./Plan";


function App() {

  const[submitBtn,setSubmitBtn]=useState(false);

  return (
    <div className="App">
      <Navbar/>

 {/* {
  submitBtn ? ("hello") : (<Routes>
    <Route exact path="/" Component={Home} />
    <Route exact path="/about" Component={About} />
    <Route exact path="/service" Component={Service} />
    <Route exact path="/contact" Component={Contact} />
 
  </Routes>)
}  */}
       <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/prepare" Component={Plan} />
        <Route exact path="/service" Component={Service} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/courses" Component={Courses} />
     
      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;
