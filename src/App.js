import React , { Component } from 'react'
import ReactDOM from 'react-dom/client';
import  Login   from  "./components/Login/login"
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


const App = () => {
    return (
        <div>
         <Login />
        </div>
    )
}

export default App