import React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    
    
  return(
    <div className="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
    <ul className="nav nav-tabs">
      <li className="nav-item"  >
        <NavLink to='/' exact className="nav-link" >
        <i className="fa fa-check" aria-hidden="true"></i>Introduction
        </NavLink>
      </li>
      <li className="nav-item" >
        <NavLink to='/personal' className="nav-link " >
        <i className="fa fa-check" aria-hidden="true"></i>Personal Information
        </NavLink>
      </li>
    </ul>
    </div>
  )
}
    
}